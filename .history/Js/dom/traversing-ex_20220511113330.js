// Acitve modal
const modal = document.querySelector(".modal");
console.log(modal);
if (modal) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}
