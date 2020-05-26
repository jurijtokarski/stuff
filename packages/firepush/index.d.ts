import * as firebase from "firebase";
declare type OnMessageCallback = (payload: any) => void;
export declare class FirePush {
    protected messaging: firebase.messaging.Messaging;
    protected key: string;
    private onMessageCallbackOnMessageCallback?;
    constructor(messaging: firebase.messaging.Messaging, key: string);
    isSupported: () => boolean;
    initialize: () => this;
    setOnMessageCallback: (callback: OnMessageCallback) => this;
    private requestPermission;
    private handleRequestPermission;
    private setup;
    private getToken;
    private saveToken;
    private subscribeTokenRefresh;
    private subscribeMessages;
    private handleNewMessage;
}
export {};
