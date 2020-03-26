import { browser, Tabs } from "webextension-polyfill-ts";

/**
 * 注入 js 事件
 * @param code The string of code to execute on the current tab
 */
export function executeScript(code: string): void {
  // Query for the active tab in the current window
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then((tabs: Tabs.Tab[]) => {
      // Pulls current tab from browser.tabs.query response
      const currentTab: Tabs.Tab | undefined = tabs[0];

      // Short circuits function execution is current tab isn't found
      if (!currentTab) {
        return;
      }

      // Executes the script in the current tab
      browser.tabs
        .executeScript(currentTab.id, {
          code,
        })
        .then(() => {
          console.log("Done Scrolling");
        });
    });
}
