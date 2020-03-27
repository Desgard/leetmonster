import { fetch_new_testcase } from "@src/crawler/testcase-excutor";

setTimeout(() => {
  const result = fetch_new_testcase();
  console.log(result);
}, 2000)
