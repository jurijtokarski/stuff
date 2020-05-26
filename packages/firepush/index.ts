import * as firebase from "firebase";

type OnMessageCallback = (payload: any) => void;

export class FirePush {
  private onMessageCallbackOnMessageCallback?: OnMessageCallback;

  constructor(
    protected messaging: firebase.messaging.Messaging,
    protected key: string
  ) { }

  isSupported = () => this.messaging && ("Notification" in window) && ("localStorage" in window);

  initialize = () => {
    if (!this.isSupported()) {
      throw new Error("Not all required browser featured are supported");
    }

    this.messaging.usePublicVapidKey(this.key);
    this.requestPermission().then(this.handleRequestPermission);
  }

  setOnMessageCallback = (callback: OnMessageCallback) => {
    this.onMessageCallbackOnMessageCallback = callback
  };

  private requestPermission = () => Notification.requestPermission();

  private handleRequestPermission = (result: NotificationPermission): any => result === "granted" && this.setup();

  private setup = () => this.getToken().then(this.subscribeTokenRefresh).then(this.subscribeMessages);

  private getToken = () => this.messaging.getToken().then(this.saveToken);

  private saveToken = (token: string) => localStorage.setItem("device_token", token);

  private subscribeTokenRefresh = () => this.messaging.onTokenRefresh(this.getToken);

  private subscribeMessages = () => this.messaging.onMessage(this.handleNewMessage);

  private handleNewMessage = (payload: any) => this.onMessageCallbackOnMessageCallback && this.onMessageCallbackOnMessageCallback(payload);

}