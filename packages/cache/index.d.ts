export interface CacheItemInternal {
    expires: number;
    value: any;
}
export interface CacheItem {
    value: any;
    isSet: boolean;
    isFresh: boolean;
}
export interface CacheContainer {
    [key: string]: CacheItemInternal;
}
export declare enum CacheStatus {
    CACHE_NOT_SET = 0,
    CACHE_NOT_FRESH = 1,
    CACHE_OK = 2
}
export interface CacheResult {
    value: any;
    status: CacheStatus;
}
export declare class Cache {
    private data;
    constructor();
    get(name: string): CacheResult;
    set(name: string, value: any, lifetime: number): void;
}
