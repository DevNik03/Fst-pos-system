// ------------for take no charge account selection---------------
document
  .getElementById("nc-account-popup-activate")
  .addEventListener("click", function () {
    document.querySelector(".no-charge-account-select-popup").style.display =
      "flex";
    document.querySelector(".select-account-popup-overlay").style.display =
      "flex";
  });

document
  .getElementById("nc-account-popup-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".no-charge-account-select-popup").style.display =
      "none";

    document.querySelector(".select-account-popup-overlay").style.display =
      "none";
  });

// ------------for take no charge waiter selection---------------
document
  .getElementById("nc-waiter-popup-activate")
  .addEventListener("click", function () {
    document.querySelector(".no-charge-waiter-select-popup").style.display =
      "flex";

    document.querySelector(".select-waiter-popup-overlay").style.display =
      "flex";
  });

document
  .getElementById("nc-waiter-popup-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".no-charge-waiter-select-popup").style.display =
      "none";

    document.querySelector(".select-waiter-popup-overlay").style.display =
      "none";
  });
