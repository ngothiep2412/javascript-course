// 1. insertAdjacentText
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position", "text")
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "begin");
h3.insertAdjacentText("beforeend", "begin");
h3.insertAdjacentText("afterend", "begin");
// 2. insertAdjacentElement
const strong = document.createElement("strong");
strong.classList.add("bold");
