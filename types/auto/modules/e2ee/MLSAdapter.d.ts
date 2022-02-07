export class MLSAdapter {
    constructor(conference: any);
    _proxyAllocator: AllocatorClient;
    /**
     * Initializes the MLS adapter.
     */
    init(): Promise<void>;
    _initDeferred: Deferred;
    _proxyAddr: string;
    _proxyClient: ProxyClient;
    /**
     * Resets the MLS adapter.
     */
    reset(): Promise<void>;
    _key: boolean | Uint8Array;
    _epoch: number;
    /**
     * Updates the MLS session.
     */
    update(): Promise<void>;
    /**
     * Retrieves a key of given size.
     *
     * @param {Number} - The key size.
     * @returns {Promise<Uint8Array>}
     */
    setKey(size: any): Promise<Uint8Array>;
    /**
     * Retrieves the MLS epoch.
     *
     * @returns {Promise<Number>}
     */
    setEpoch(): Promise<number>;
    /**
     * Returns the current key.
     *
     * @returns {Uint8Array}
     */
    getKey(): Uint8Array;
    /**
     * Returns the current epoch.
     *
     * @returns {Boolean}
     */
    getEpoch(): boolean;
}
import { AllocatorClient } from "./mls/api/allocator/AllocatorServiceClientPb";
import Deferred from "../util/Deferred";
import { ProxyClient } from "./mls/api/proxy/ProxyServiceClientPb";
