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

export enum CacheStatus {
  CACHE_NOT_SET,
  CACHE_NOT_FRESH,
  CACHE_OK
}

export interface CacheResult {
  value: any;
  status: CacheStatus;
}

export class Cache {
  private data: CacheContainer = {};

  constructor() {
    this.data = {};
  }

  get(name: string): CacheResult {
    const item = this.data[name];

    if (!item) {
      return {
        value: null,
        status: CacheStatus.CACHE_NOT_SET
      };
    }

    return {
      value: item.value,
      status: item.expires > Date.now()
        ? CacheStatus.CACHE_OK
        : CacheStatus.CACHE_NOT_FRESH
    };
  }

  set(name: string, value: any, lifetime: number): void {
    this.data[name] = {
      value: value,
      expires: Date.now() + lifetime
    };
  }
}