// document.getElementById("menu-button").addEventListener("click", function () {
//   document.querySelector(".menu-container").style.display = "block";
// });

// document.getElementById("menu-button").addEventListener("click", function () {
//   document.querySelector(".menu-container").style.display = "non;
// });
// ------------for  menu dropdown--------------

const menubtn = document.querySelector("#menu-button");
const menu = document.querySelector("#menu-btn-container");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
// ------------for outlet popup menu---------------
document
  .getElementById("outlet-popup-btn")
  .addEventListener("click", function () {
    document.querySelector(".outlet-popup").style.display = "flex";
  });

document
  .getElementById("outlet-popup-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".outlet-popup").style.display = "none";
  });
