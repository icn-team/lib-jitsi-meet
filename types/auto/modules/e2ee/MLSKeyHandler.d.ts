export class MLSKeyHandler extends ExternallyManagedKeyHandler {
    constructor(conference: any);
    _conferenceJoined: boolean;
    _maxClients: any;
    _mlsAdapter: MLSAdapter;
    _updateAndCatchUp: any;
    /**
     * Initializes the key handler.
     *
     * @private
     */
    private _init;
    /**
     * Resets the key handler.
     *
     * @private
     */
    private _reset;
    /**
     * Catches up with given MLS epoch.
     *
     * @param {Number} - The min MLS epoch to catch up with.
     * @private
     */
    private _catchUp;
    /**
     * Updates the MLS session then catches up.
     *
     * @private
     */
    private _updateAndCatchUpImpl;
    /**
     * @private
     */
    private _onConferenceUniqueIdSet;
    /**
     * @private
     */
    private _onConferenceJoined;
    /**
     * @private
     */
    private _onConferenceLeft;
    /**
     * @private
     */
    private _onUserJoined;
    /**
     * @private
     */
    private _onUserLeft;
    /**
     * Handles an update in a participant's presence property.
     *
     * @param {JitsiParticipant} participant - The participant.
     * @param {String} name - The name of the property that changed.
     * @param {*} _ - The property's previous value.
     * @param {*} newValue - The property's new value.
     * @private
     */
    private _onParticipantPropertyChanged;
    /**
     * Appoints a new leader among peers in the conference. The leader is the
     * peer with the lowest participant ID.
     *
     * @returns {Number} - The leader ID.
     * @private
     */
    private _appointLeader;
    _leader: any;
    /**
     * Checks if the participant is authorized to decipher the streams.
     *
     * @returns {Boolean}
     * @private
     */
    private _isAuthorized;
    /**
     * Sets the key and key index for End-to-End encryption using the MLS adapter.
     *
     * @private
     */
    private _setKey;
}
import { ExternallyManagedKeyHandler } from "./ExternallyManagedKeyHandler";
import { MLSAdapter } from "./MLSAdapter";
