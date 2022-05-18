// document.title
// document.head
console.log(document.title); // Javascript
document.title = "Welcome to Javascript Course";
// document.head
console.log(document.head);
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
// document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);
// insertBefore
// parseNode.insertBefore(newNode, existNode)
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
// insertAdjacentElement
// document.querySelector("h3").insertAdjacentElement("beforebegin", ul);
// replaceChild
// node.replaceChild(newNode, oldNode)
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
// convert HTML Collection, NodeList to Array
const li = document.getElementsByTagName("li");
// console.log(li);
//Array.from(HTML Collection or NodeList)
//[..HTMLCOLLECT], [...NodeList]
[...li].forEach((item) => item);
console.log(li);
// html body head title
// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title
