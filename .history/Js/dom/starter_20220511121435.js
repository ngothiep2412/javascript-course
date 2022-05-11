// Viết 1 function tạo ra thông báo
const noti = document.createElement("div");
const body = document.body;
noti.classList.add("noti");
const notiImage = document.createElement("img");
notiImage.classList.add("noti-image");
notiImage.setAttribute("src", "https://source.unsplash.com/random");
noti.appendChild(notiImage);
const notiContent = document.createElement("div");
notiContent.classList.add("noti-content");
const notiTitle = document.createElement("h3");
notiTitle.classList.add("noti-title");
notiTitle.textContent = "Welcome to notification";
const notiDesc = document.createElement("p");
notiDesc.classList.add("noti-desc");
notiDesc.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
noti.appendChild(notiContent);
notiContent.appendChild(notiTitle);
notiContent.appendChild(notiDesc);

body.appendChild(noti);

// js
const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) {
    item.parentNode.removeChild(item);
  }
}, 4000);
