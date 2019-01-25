const rootEl = document.querySelector("#root");
const contentEl = document.querySelector(".content");
const minFontSize = getComputedStyle(rootEl).fontSize;
const fontSize = getComputedStyle(contentEl).fontSize;

if (parseFloat(fontSize) < parseFloat(minFontSize)) {
  contentEl.style.fontSize = minFontSize;
}
