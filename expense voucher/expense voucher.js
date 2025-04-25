// for menu button
const menubtn = document.querySelector("#menu-btn-activate");
const menu = document.querySelector("#menu-container");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("dropdown-menu-hide");
});

// for about us
document
  .getElementById("about-us-activate")
  .addEventListener("click", function () {
    document.querySelector(".about-us").style.display = "flex";
  });

document
  .getElementById("aboutus-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".about-us").style.display = "none";
  });

// for menu button
const userBtn = document.querySelector("#user-btn-activate");
const userDropdown = document.querySelector("#userDropdown-container");

userBtn.addEventListener("click", () => {
  userDropdown.classList.toggle("userDropdown-container-hide");
});

// for expense voucher main overlay

const mainOverlayEnable = document.querySelector(".expense-voucher-add");
mainOverlayEnable.addEventListener("click", () => {
  document.querySelector(".expense-voucher-overlay").style.display = "grid";
  document.querySelector(".toolbar-right-add-btn").style.display = "none";
});

// for extra charge popup

let extraChargeCloseButton = document.querySelector(
  ".select-extra-charge-popup-close-btn"
);

extraChargeCloseButton.addEventListener("click", () => {
  document.querySelector(".select-extra-charge-popup").style.display = "none";
  document.querySelector(".select-extra-charge-popup-overlay").style.display =
    "none";
});

let extraChargePopupEnableButton = document.querySelector(".add-ex-charge");
extraChargePopupEnableButton.addEventListener("click", () => {
  document.querySelector(".select-extra-charge-popup").style.display = "flex";
  document.querySelector(".select-extra-charge-popup-overlay").style.display =
    "flex";
});

// for add payment popup
const checkbox = document.querySelectorAll(".extra-charhe-popup-checkbox");
const addPaymentCloseButton = document.querySelector(
  ".add-payment-close-button"
);

const addPaymentPopupEnable = document.querySelector(".add-ex-payment");
addPaymentPopupEnable.addEventListener("click", () => {
  document.querySelector(".add-payment-popup").style.display = "flex";
  document.querySelector(".add-payment-overlay").style.display = "flex";
});

addPaymentCloseButton.addEventListener("click", () => {
  document.querySelector(".add-payment-popup").style.display = "none";
  document.querySelector(".add-payment-overlay").style.display = "none";
});

// for extra charge selections

const addkitchenMaterials = document.querySelector("#kitcherMaterials");
addkitchenMaterials.addEventListener("click", () => {
  document.querySelector(".tr-kitchen-materials").style.display = "table-row";
});

const kitchenMaterialsDeleteButton = document.getElementById(
  "kitcherMaterials-delete-btn"
);
kitchenMaterialsDeleteButton.addEventListener("click", () => {
  document.querySelector(".tr-kitchen-materials").style.display = "none";
});

// for extra charge selections

const addMiscExenses = document.querySelector("#miscExpenses");
addMiscExenses.addEventListener("click", () => {
  document.querySelector(".tr-Misc-Expenses").style.display = "table-row";
});

// for extra charge selections

const addOfficeExpenses = document.querySelector("#officeExpenses");
addOfficeExpenses.addEventListener("click", () => {
  document.querySelector(".tr-office-expenses").style.display = "table-row";
});
