import { getLogger } from '@jitsi/logger';
import debounce from 'lodash.debounce';

import * as JitsiConferenceEvents from '../../JitsiConferenceEvents';

import { ExternallyManagedKeyHandler } from './ExternallyManagedKeyHandler';
import { MLSAdapter } from './MLSAdapter';
import { importKey, deriveKeys } from './crypto-utils';

const logger = getLogger(__filename);

const KEY_SIZE = 32;
const CATCH_UP_TRIES = 5;
const CATCH_UP_DELAY = 20;
const DEBOUNCE_DELAY = 2000;

export class MLSKeyHandler extends ExternallyManagedKeyHandler {
    constructor(conference) {
        super(conference);

        const { mls = {
            startEnabled: true,
        } } = conference.options.config.e2ee;

        this.setEnabled(mls.startEnabled);

        this._conferenceJoined = false;
        this._mlsAdapter = new MLSAdapter(conference);
        this._updateAndCatchUp = debounce(this._updateAndCatchUpImpl, DEBOUNCE_DELAY);

        this.conference.on(
            JitsiConferenceEvents.CONFERENCE_JOINED,
            this._onConferenceJoined.bind(this));
        this.conference.on(
            JitsiConferenceEvents.CONFERENCE_LEFT,
            this._onConferenceLeft.bind(this));
        this.conference.on(JitsiConferenceEvents.USER_JOINED,
            this._onUserJoined.bind(this));
        this.conference.on(JitsiConferenceEvents.USER_LEFT,
            this._onUserLeft.bind(this));
        this.conference.on(
            JitsiConferenceEvents.PARTICIPANT_PROPERTY_CHANGED,
            this._onParticipantPropertyChanged.bind(this));
    }

    /**
     * Initializes the key handler.
     *
     * @private
     */
    async _init() {
        logger.debug('Init MLS key handler');
        await this._mlsAdapter.init();
        await this._mlsAdapter.setEpoch();
        await this._mlsAdapter.setKey(KEY_SIZE);
        await this._setKey();
    }

    /**
     * Resets the key handler.
     *
     * @private
     */
    async _reset() {
        logger.debug('Reset MLS key handler');
        await this._mlsAdapter.reset();
        await this._setKey();
    }

    /**
     * Catches up with given MLS epoch.
     *
     * @param {Number} - The min MLS epoch to catch up with.
     * @private
     */
    async _catchUp(minEpoch) {
        logger.debug(`Catch up with MLS epoch ${minEpoch}`);

        for (let i = 0; i < CATCH_UP_TRIES; i++) {
            if (await this._mlsAdapter.setEpoch() >= minEpoch) {
                break;
            }

            await new Promise(resolve => setTimeout(resolve, CATCH_UP_DELAY));
        }

        const currentEpoch = this._mlsAdapter.getEpoch();

        if (currentEpoch < minEpoch) {
            logger.error(`Failed to catch up with MLS epoch ${minEpoch}`);
            return Promise.reject();
        }

        this.conference.setLocalParticipantProperty('e2ee.epoch', currentEpoch);
        await this._mlsAdapter.setKey(KEY_SIZE);
        await this._setKey();
    }

    /**
     * Updates the MLS session then catches up.
     *
     * @private
     */
    async _updateAndCatchUpImpl() {
        const minEpoch = this._mlsAdapter.getEpoch();
        await this._mlsAdapter.update();
        await this._catchUp(minEpoch + 1);
    }

    /**
     * @private
     */
    async _onConferenceJoined() {
        logger.debug('Conference joined');
        await this._init();
        this._appointLeader();

        if (this.conference.myUserId() === this._leader) {
            await this._updateAndCatchUp();
        }

        this._conferenceJoined = true;
    }

    /**
     * @private
     */
    async _onConferenceLeft() {
        logger.debug('Conference left');
        await this._reset();
        this._conferenceJoined = false;
    }

    /**
     * @private
     */
    async _onUserJoined(id) {
        if (!this._conferenceJoined) {
            return;
        }

        logger.debug(`User ${id} joined`);
        this._appointLeader();

        if (this.conference.myUserId() === this._leader) {
            await this._updateAndCatchUp();
        }
    }

    /**
     * @private
     */
    async _onUserLeft(id) {
        if (!this._conferenceJoined) {
            return;
        }

        logger.debug(`User ${id} left`);
        this._appointLeader();

        if (this.conference.myUserId() === this._leader) {
            await this._updateAndCatchUp();
        }
    }

    /**
     * Handles an update in a participant's presence property.
     *
     * @param {JitsiParticipant} participant - The participant.
     * @param {String} name - The name of the property that changed.
     * @param {*} _ - The property's previous value.
     * @param {*} newValue - The property's new value.
     * @private
     */
    async _onParticipantPropertyChanged(participant, name, _, newValue) {
        if (!this._conferenceJoined) {
            return;
        }

        switch (name) {
            case 'e2ee.epoch':
                if (participant.getId() === this._leader) {
                    logger.debug(`Leader ${participant.getId()} property ${name} changed to ${newValue}`);
                    await this._catchUp(newValue);
                }
                break;
            case 'e2ee.enabled':
                if (participant.getRole() === 'moderator') {
                    logger.debug(`Moderator ${participant.getId()} property ${name} changed to ${newValue}`);
                    this.setEnabled(newValue);
                }
                break;
        }
    }

    /**
     * Appoints a new leader among peers in the conference. The leader is the
     * peer with the lowest participant ID.
     *
     * @returns {Number} - The leader ID.
     * @private
     */
    _appointLeader() {
        this._leader = this.conference.myUserId();

        for (const participant of this.conference.getParticipants()) {
            if (participant.getId() < this._leader) {
                this._leader = participant.getId();
            }
        }

        logger.debug(`Leader is ${this._leader} (self: ${this.conference.myUserId()})`);
        return this._leader;
    }

    /**
     * Sets the key and key index for End-to-End encryption using the MLS adapter.
     *
     * @private
     */
    async _setKey() {
        const material = await importKey(this._mlsAdapter.getKey());
        const key = await deriveKeys(material);
        const keyIndex = this._mlsAdapter.getEpoch();
        this.e2eeCtx.setKey(undefined, key, keyIndex);
    }
}
