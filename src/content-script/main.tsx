import { fetchNewTestcase } from "@src/crawler/testcase-excutor";
import { TestCaseButton } from "@src/components/testcaseButton";
import * as React from "React";

import $ from "jquery";
import ReactDOM from "react-dom";

const checkInterval = setInterval(() => {
  const runButtons = $("button[data-cypress='RunCode']");
  if (runButtons.length <= 0) return;
  clearInterval(checkInterval);

  // 定位button
  const btnContainer = runButtons
    .parent()
    .append("<div></div>")
    .children()
    .last()[0];
  // 获取数据
  const testcaseResult = fetchNewTestcase();
  let testcaseCount = 0;
  const testcaseRunner: () => void = () => {
    const current = testcaseResult[testcaseCount];
    testcaseCount += 1;
    testcaseCount %= testcaseResult.length;
    $("textarea[class^='testcase-editor']").val(current);
  };
  ReactDOM.render(
    <TestCaseButton handler={(): void => testcaseRunner()} />,
    btnContainer,
  );
}, 1000);
