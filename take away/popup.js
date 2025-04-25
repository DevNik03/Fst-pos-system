// ------------for take away popup---------------
document
  .getElementById("popup-enable-btn")
  .addEventListener("click", function () {
    document.querySelector(".pop-up").style.display = "flex";
    document.querySelector(".overlay").style.display = "flex";
  });

document
  .getElementById("pop-up-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".pop-up").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
  });

// ------------for business source popup---------------

document
  .getElementById("business-source-popup-generator")
  .addEventListener("click", function () {
    document.querySelector(".business-source-popup").style.display = "flex";
    document.querySelector(".business-source-overlay").style.display = "flex";
  });

document
  .getElementById("business-source-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".business-source-popup").style.display = "none";
    document.querySelector(".business-source-overlay").style.display = "none";
  });
