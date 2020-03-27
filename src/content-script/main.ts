import { fetch_new_testcase } from "@src/crawler/testcase-excutor";
import * as React from "React";

import $ from "jquery";
import ReactDOM from "react-dom";

let testcase_count: number = 0;
let testcase_result: string[] = [];

setTimeout(() => {
  // 获取数据
  testcase_result = fetch_new_testcase();

  // Button 定位逻辑
  const run_buttons = $("button[data-cypress='RunCode']");
  if (run_buttons.length <= 0) return;
  const run_button = run_buttons[0];
  const btn_container = run_button.parentElement;
  const test_case_button = React.createElement("button", {
    onClick: () => {
      // 先获取测试文本区域
      let current = testcase_result[testcase_count];
      testcase_count += 1;
      testcase_count %= testcase_result.length;
      $("textarea[class^='testcase-editor']").val(current);
    },
  });
  ReactDOM.render(test_case_button, btn_container);
}, 2000);
