/* global MLS */

import { getLogger } from '@jitsi/logger';

import Deferred from '../util/Deferred';

import * as proxy from './mls/api/proxy/proxy_pb';
import { ProxyClient } from './mls/api/proxy/ProxyServiceClientPb';
import * as allocator from './mls/api/allocator/allocator_pb';
import { AllocatorClient } from './mls/api/allocator/AllocatorServiceClientPb';
import google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js'

const logger = getLogger(__filename);

const MLS_EXPORT_LABEL = 'jitsi-meet';

export class MLSAdapter {
    constructor(conference) {
        const { mls = {
            proxyAllocator: 'https://10.60.16.138:14200',
        } } = conference.options.config.e2ee;

        logger.debug(`MLS proxy allocator address set to ${mls.proxyAllocator}`);
        this._proxyAllocator = new AllocatorClient(mls.proxyAllocator);
        this.reset();
    }

    /**
     * Initializes the MLS adapter.
     */
    async init() {
        logger.debug('Init MLS');

        if (this._initDeferred) {
            throw new Error('MLSAdapter init called multiple times');
        }

        this._initDeferred = new Deferred();

        try {
            const request = new google_protobuf_empty_pb.Empty();
            const proxyAddr = await this._proxyAllocator.requestProxy(request, {});

            logger.debug(`MLS proxy address set to ${proxyAddr}`);

            this._proxyAddr = proxyAddr.getAddress();
            this._proxyClient = new ProxyClient(this._proxyAddr);

            this._initDeferred.resolve();
            this._initDeferred = undefined;
        } catch (e) {
            logger.error('Failed to initialize MLS', e);
            this._initDeferred.reject(e);
            await this.reset();
        }
    }

    /**
     * Resets the MLS adapter.
     */
    async reset() {
        logger.debug('Reset MLS');

        if (this._proxyAddr !== undefined) {
            let request = new allocator.Proxy();
            request.setAddress(this._proxyAddr);
            await this._proxyAllocator.addProxy(request, {});
        }

        this._initDeferred = undefined;
        this._proxyAddr = undefined;
        this._proxyClient = undefined;
        this._key = false;
        this._epoch = -1;
    }

    /**
     * Updates the MLS session.
     */
    async update() {
        await this._initDeferred;
        logger.debug('Update MLS');
        await this._proxyClient.update(new google_protobuf_empty_pb.Empty(), {});
    }

    /**
     * Retrieves a key of given size.
     *
     * @param {Number} - The key size.
     * @returns {Promise<Uint8Array>}
     */
    async setKey(size) {
        await this._initDeferred;

        let request = new proxy.ExporterSecretRequest();
        request.setLabel(MLS_EXPORT_LABEL);
        request.setContext('');
        request.setSize(size);

        const key = await this._proxyClient.getExporterSecret(request, {});
        this._key = key.getValue_asU8();

        logger.debug(`Retrieved key of size ${size}: ${key.getValue_asB64()}`);

        return this._key;
    }

    /**
     * Retrieves the MLS epoch.
     *
     * @returns {Promise<Number>}
     */
    async setEpoch() {
        await this._initDeferred;

        let request = new google_protobuf_empty_pb.Empty();

        const epoch = await this._proxyClient.getEpoch(request, {});
        this._epoch = epoch.getValue();

        logger.debug(`Retrieved epoch: ${epoch}`);

        return this._epoch;
    }

    /**
     * Returns the current key.
     *
     * @returns {Uint8Array}
     */
    getKey() {
        return this._key;
    }

    /**
     * Returns the current epoch.
     *
     * @returns {Boolean}
     */
    getEpoch() {
        return this._epoch;
    }
}
