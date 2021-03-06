// 1. insertAdjacentText(position, text)
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position", "text")
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "begin");
h3.insertAdjacentText("beforeend", "begin");
h3.insertAdjacentText("afterend", "begin");
// 2. insertAdjacentElement(position, node)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);
// 3. element.insertAdjacentHTMl
const template = `
<ul class="menu2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>`;
document.body.insertAdjacentHTML("afterbegin", template);
// parse
