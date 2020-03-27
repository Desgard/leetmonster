export function fetch_new_testcase() {
  const pres = document.getElementsByTagName("pre");
  let result: string[] = [];
  if (pres && pres.length > 0) {
    const reg: RegExp = /^输入：(.+)输出：.+?$/;
    for (let i = 0; i < pres.length; ++ i) {
      const pre: HTMLPreElement = pres[i];
      const inner_text = pre.innerText.split("\n").reduce((pre, cur) => pre + cur).trim();
      const m = reg.exec(inner_text);
      if (m) {
        result.push(m[1]);
        // const single_test = m[1].trim();
        // single_test.split(",").map(equ => {
        //   return equ
        // })
      }
    }
  }
  return result;
}