// for menu button
const menubtn = document.querySelector("#menu-button");
const menu = document.querySelector("#menu-btn-container");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("hide");
});

// for user buttton

const userbtn = document.querySelector("#user-button");
const userDropdown = document.querySelector("#user-dropdown-container-id");

userbtn.addEventListener("click", () => {
  userDropdown.classList.toggle("container-hide");
});