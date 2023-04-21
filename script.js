const menu = document.querySelector(".list");
const navbar = document.querySelector(".navbar");
const openBtn = document.querySelector(".menu-icons");
const CloseBtn = document.querySelector(".cancel-icons");
openBtn.onclick = () => {
  menu.classList.add("active");
  openBtn.classList.add("hide");
};
CloseBtn.onclick = () => {
  menu.classList.remove("active");
  openBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 50
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
