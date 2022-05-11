// Acitve modal

const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

const modalClose = document.createElement("i");
modalClose.className = "fa fa-time modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem tenetur maiores suscipit veniam, facere ipsa nisi libero dicta ipsamillum perferendis asperiores sunt laudantium vero, quis ut molestias quae sapiente.";
modalContent.appendChild(modalDesc);

document.body.appendChild(modal);
// const template = ` <div class="modal">
// <div class="modal-content">
//   <i class="fa fa-time modal-close"></i>
//   <div class="modal-desc">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
//     tenetur maiores suscipit veniam, facere ipsa nisi libero dicta ipsam
//     illum perferendis asperiores sunt laudantium vero, quis ut molestias
//     quae sapiente.
//   </div>
//   <div class="modal-action">
//     <button class="modal-submit">Confirm</button>
//     <button class="modal-cancel">Cancel</button>
//   </div>
// </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);
// const modalWrapper = document.querySelector(".modal");
// console.log(modal);
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add("is-show");
//   }, 3000);
// }
