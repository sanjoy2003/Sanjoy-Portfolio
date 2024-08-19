let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let darkmode = document.querySelector("#darkmode");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

darkmode.onclick = () => {
  darkmode.classList.toggle("bx-moon");
  darkmode.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode"); 
};
