# Firebase Cloud Messageing web-push helper

```
import { FirePush } from "@jurijtokarski/firepush";

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

if (isLocalhost) {
  return;
}

if (!window.firebase?.messaging || !window.firebase.messaging.isSupported()) {
  return;
}

const KEY = "--your-vapid-key--";

new FirePush(window.firebase.messaging(), KEY)
  .initialize()
  .setCallback((payload: any) => {
    const notification = new Notification(payload.notification.title, {
      body: payload.notification.body
    });

    notification.addEventListener("click", function () {
      window.open("/");
      notification.close();
    });
  });
```