const masterButton = document.querySelector(".master-btn");
const menuButton = document.querySelector(".menu-btn");
const settingButton = document.querySelector(".settings-btn");

// Helper function to reset button background colors
function resetButtonStyles() {
  masterButton.style.backgroundColor = "";
  menuButton.style.backgroundColor = "";
  settingButton.style.backgroundColor = "";
}

// Event listener for the Master button
masterButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  masterButton.style.backgroundColor = "#00aeef"; // Highlight clicked button

  // Show the master menu and hide others
  document.querySelector(".nav-master-options").style.display = "flex";
  document.querySelector(".nav-menu-options").style.display = "none";
  document.querySelector(".nav-setting-options").style.display = "none";
});

// Event listener for the Menu button
menuButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  menuButton.style.backgroundColor = "#00aeef"; // Highlight clicked button

  // Show the menu options and hide others
  document.querySelector(".nav-master-options").style.display = "none";
  document.querySelector(".nav-menu-options").style.display = "flex";
  document.querySelector(".nav-setting-options").style.display = "none";
});

// Event listener for the Settings button
settingButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  settingButton.style.backgroundColor = "#00aeef"; // Highlight clicked button

  // Show the settings options and hide others
  document.querySelector(".nav-master-options").style.display = "none";
  document.querySelector(".nav-menu-options").style.display = "none";
  document.querySelector(".nav-setting-options").style.display = "flex";
});

// for import export menu

const importExportMenuButton = document.querySelector(".options-button");
const importExportMenu = document.querySelector(".import-export-options");

importExportMenuButton.addEventListener("click", () => {
  importExportMenu.classList.toggle("import-export-options-hide");
});
// rotating icons

const sortEnable = document.querySelectorAll(".sortbtn");

sortEnable.forEach((sortEnable) => {
  sortEnable.addEventListener("click", () => {
    sortEnable.querySelector(".rotated-icon").classList.toggle("rotate-180");
  });
});

// delete record button

const checkbox = document.querySelector("#delete-record-checkbox");
const deleteRecordBtn = document.querySelector(".delete-records-button");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    deleteRecordBtn.style.display = "flex";
  } else {
    deleteRecordBtn.style.display = "none";
  }
});

// add payment popup close button

const popupCloseButton = document.querySelector(".close-popup-btn");
const popupBody = document.querySelector(".add-payment-option-popup");
const overlayBG = document.querySelector(".popup-overlay");
const popupEnableButton = document.querySelector(".popup-enable-button");

popupCloseButton.addEventListener("click", () => {
  popupBody.style.display = "none";
  overlayBG.style.display = "none";
});

popupEnableButton.addEventListener("click", () => {
  popupBody.style.display = "grid";
  overlayBG.style.display = "flex";
});

// surcharge menu enable

const surchargeEnable = document.querySelector("#surcharge-enable");
const surchargeMenu = document.querySelector("#surcharge-menu");

surchargeEnable.addEventListener("change", () => {
  if (surchargeEnable.checked) {
    surchargeMenu.style.display = "block";
  } else {
    surchargeMenu.style.display = "none";
  }
});
