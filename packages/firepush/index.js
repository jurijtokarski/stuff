"use strict";
exports.__esModule = true;
exports.FirePush = void 0;
var FirePush = /** @class */ (function () {
    function FirePush(messaging, key) {
        var _this = this;
        this.messaging = messaging;
        this.key = key;
        this.isSupported = function () { return _this.messaging && ("Notification" in window) && ("localStorage" in window); };
        this.initialize = function () {
            if (!_this.isSupported()) {
                throw new Error("Not all required browser featured are supported");
            }
            _this.messaging.usePublicVapidKey(_this.key);
            _this.requestPermission().then(_this.handleRequestPermission);
        };
        this.setOnMessageCallback = function (callback) {
            _this.onMessageCallbackOnMessageCallback = callback;
        };
        this.requestPermission = function () { return Notification.requestPermission(); };
        this.handleRequestPermission = function (result) { return result === "granted" && _this.setup(); };
        this.setup = function () { return _this.getToken().then(_this.subscribeTokenRefresh).then(_this.subscribeMessages); };
        this.getToken = function () { return _this.messaging.getToken().then(_this.saveToken); };
        this.saveToken = function (token) { return localStorage.setItem("device_token", token); };
        this.subscribeTokenRefresh = function () { return _this.messaging.onTokenRefresh(_this.getToken); };
        this.subscribeMessages = function () { return _this.messaging.onMessage(_this.handleNewMessage); };
        this.handleNewMessage = function (payload) { return _this.onMessageCallbackOnMessageCallback && _this.onMessageCallbackOnMessageCallback(payload); };
    }
    return FirePush;
}());
exports.FirePush = FirePush;
