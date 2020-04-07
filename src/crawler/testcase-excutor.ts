export function fetchNewTestcase(): string[] {
  const pres = document.getElementsByTagName("pre");
  const result: string[] = [];
  if (pres && pres.length > 0) {
    const reg = /^输入(：|\:)([\w\W]+)输出(：|\:).+?$/;
    for (let i = 0; i < pres.length; i++) {
      const pre: HTMLPreElement = pres[i];
      const innerText = pre.innerText
        .split("\n")
        .reduce((pre, cur) => pre + cur)
        .trim();
      console.log(innerText);
      const m = reg.exec(innerText);
      if (m) {
        result.push(m[2]);
      }
    }
  }
  return result;
}
