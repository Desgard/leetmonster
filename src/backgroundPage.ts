import { browser } from "webextension-polyfill-ts";

import { monsterStore } from "@src/store/monster-store";

// Listen for messages sent from other parts of the extension
browser.runtime.onMessage.addListener((request: { popupMounted: boolean }) => {
  // Log statement if request.popupMounted is true
  // NOTE: this request is sent in `popup/component.tsx`
  if (request.popupMounted) {
    console.log("backgroundPage notified that Popup.tsx has mounted.");
  }
});

console.log(document.body);
monsterStore.updateHtml(document.body);
