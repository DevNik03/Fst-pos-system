document.addEventListener("DOMContentLoaded", () => {
  // enabled options
  const selectOptions = document.getElementById("select-options");
  const percentageOptions = document.querySelectorAll(".percentage-option");
  const amountOptions = document.querySelectorAll(".amount-option");

  selectOptions.addEventListener("change", (event) => {
    const selectedValue = event.target.value;

    // Hide all options initially
    percentageOptions.forEach((div) => div.classList.add("hidden"));
    amountOptions.forEach((div) => div.classList.add("hidden"));

    // Show relevant options based on the selected value
    if (selectedValue === "Percentage") {
      percentageOptions.forEach((div) => div.classList.remove("hidden"));
    } else if (selectedValue === "Amount") {
      amountOptions.forEach((div) => div.classList.remove("hidden"));
    }
  });
});

//loader

const loadingScreen = document.querySelector(".loading-screen");
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  if (loadingScreen) {
    loadingScreen.remove(); // This removes it from the DOM completely
  }
});

/// Select buttons
const masterButton = document.querySelector(".master-btn");
const menuButton = document.querySelector(".menu-btn");
const settingButton = document.querySelector(".settings-btn");

// Add event listeners for buttons
masterButton.addEventListener("click", () => {
  document.querySelector(".nav-master-options").style.display = "flex";
  document.querySelector(".nav-menu-options").style.display = "none";
  document.querySelector(".nav-setting-options").style.display = "none";
  masterButton.classList.add("navbar-active-option");
  menuButton.classList.remove("navbar-active-option");
  settingButton.classList.remove("navbar-active-option");
});

menuButton.addEventListener("click", () => {
  document.querySelector(".nav-master-options").style.display = "none";
  document.querySelector(".nav-menu-options").style.display = "flex";
  document.querySelector(".nav-setting-options").style.display = "none";
  menuButton.classList.add("navbar-active-option");
  masterButton.classList.remove("navbar-active-option");
  settingButton.classList.remove("navbar-active-option");
});

settingButton.addEventListener("click", () => {
  document.querySelector(".nav-master-options").style.display = "none";
  document.querySelector(".nav-menu-options").style.display = "none";
  document.querySelector(".nav-setting-options").style.display = "flex";
  settingButton.classList.add("navbar-active-option");
  masterButton.classList.remove("navbar-active-option");
  menuButton.classList.remove("navbar-active-option");
});

// switching in menu management

const defaultMenu = document.querySelector(".menu-container-default");
const moreMenu = document.querySelector(".more-menu");
const defaultMenuButton = document.querySelector("#default-menu");
const moreMenuButton = document.querySelector("#more-menu");

defaultMenuButton.addEventListener("click", (event) => {
  event.preventDefault();
  defaultMenu.style.display = "flex";
  moreMenu.style.display = "none";
  defaultMenuButton.classList.add("active-button");
  moreMenuButton.classList.remove("active-button");
});

moreMenuButton.addEventListener("click", (event) => {
  event.preventDefault();
  moreMenu.style.display = "flex";
  defaultMenu.style.display = "none";
  moreMenuButton.classList.add("active-button");
  defaultMenuButton.classList.remove("active-button");
});

// switching in rate settings

const defaultRate = document.querySelector(".default-rate-container");
const moreRate = document.querySelector(".more-rates");
const defaultRateButton = document.querySelector("#default-rate");
const moreRateButton = document.querySelector("#more-rate");

defaultRateButton.addEventListener("click", () => {
  defaultRate.style.display = "flex";
  moreRate.style.display = "none";
  defaultRateButton.classList.add("active-button");
  moreRateButton.classList.remove("active-button");
});

moreRateButton.addEventListener("click", () => {
  moreRate.style.display = "flex";
  defaultRate.style.display = "none";
  moreRateButton.classList.add("active-button");
  defaultRateButton.classList.remove("active-button");
});

// add menu popup

const addMenuPopup = document.querySelector(".more-menu-popup");
const addMenuOverlay = document.querySelector(".more-menu-overlay");
const addMenuButton = document.querySelector(".add-button");
const addMenuCloseButton = document.querySelector(
  "#add-menu-popup-close-button"
);
const addMenuForm = document.querySelector("#more-menu-form");
const addMenuScroll = document.querySelector("#more-menu-scroll");

addMenuButton.addEventListener("click", (event) => {
  event.preventDefault();
  addMenuOverlay.style.display = "flex";
  addMenuPopup.style.display = "grid";
  addMenuScroll.scrollTop = 0;
});

addMenuCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  addMenuOverlay.style.display = "none";
  addMenuPopup.style.display = "none";
  addMenuForm.reset();
});

// add rate popup

const addRatePopup = document.querySelector(".add-rate-popup");
const addRateOverlay = document.querySelector(".add-rate-overlay");
const addRateCloseButton = document.querySelector(
  "#add-rate-popup-close-button"
);
const addRateEnableButton = document.querySelector("#add-new-rate-button");
const addRateForm = document.querySelector("#add-rate-form");
const addRateScroll = document.querySelector("#add-rate-scroll");

addRateEnableButton.addEventListener("click", (event) => {
  event.preventDefault();
  addRatePopup.style.display = "grid";
  addRateOverlay.style.display = "flex";
  addRateScroll.scrollTop = 0;
});

addRateCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  addRatePopup.style.display = "none";
  addRateOverlay.style.display = "none";
  addRateForm.reset();
});

// for add modifer popup

const addModifierPopup = document.querySelector(".add-modifier-popup");
const addModifierOverlay = document.querySelector(".add-modifier-overlay");
const addModifierCloseButton = document.querySelector(
  "#add-modifier-popup-close-button"
);

const addModifierEnableButton = document.querySelector(
  "#add-modifier-popup-button"
);
const addModiferForm = document.querySelector("#add-modifier-form");
const addModifierScroll = document.querySelector("#add-modifier-scroll");
addModifierEnableButton.addEventListener("click", (event) => {
  event.preventDefault();
  addModifierOverlay.style.display = "flex";
  addModifierPopup.style.display = "grid";
  addModifierScroll.scrollTop = 0;
});

addModifierCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  addModifierOverlay.style.display = "none";
  addModifierPopup.style.display = "none";
  addModiferForm.reset();
});

// for select active time

const activeTimeCheck = document.querySelector("#active-time");
const selectTimeContainer = document.querySelector(".select-time");
const containerEnable = document.querySelector(".p-button");

let isContainerEnabled = false;

activeTimeCheck.addEventListener("change", () => {
  if (activeTimeCheck.checked) {
    if (!isContainerEnabled) {
      containerEnable.addEventListener("click", enableSelectTime);
      isContainerEnabled = true; // Prevent multiple listeners
    }
  } else {
    selectTimeContainer.style.display = "none"; // Hide container if unchecked
    if (isContainerEnabled) {
      containerEnable.removeEventListener("click", enableSelectTime);
      isContainerEnabled = false;
    }
  }
});

function enableSelectTime() {
  selectTimeContainer.style.display = "grid";
  selectTimeContainer.style.color = "black";
}

// add payment popup close button

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popup = document.querySelector(".item-popup");
const overlay = document.querySelector(".popup-overlay");
const itemForm = document.querySelector("#item-form");
const scrollableArea = document.querySelector(".popup-main");

popupEnableButton.addEventListener("click", () => {
  popup.style.display = "grid";
  overlay.style.display = "flex";
  scrollableArea.scrollTop = 0;

  defaultMenu.style.display = "flex";
  moreMenu.style.display = "none";
  defaultMenuButton.classList.add("active-button");
  moreMenuButton.classList.remove("active-button");

  defaultRate.style.display = "flex";
  moreRate.style.display = "none";
  defaultRateButton.classList.add("active-button");
  moreRateButton.classList.remove("active-button");
});

popupCloseButton.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
  itemForm.reset();
});

// for import export menu

const importExportMenuButton = document.querySelector(".options-button");
const importExportMenu = document.querySelector(".import-export-options");
const importExportMenuOverlay = document.querySelector(
  ".import-export-overlay"
);

importExportMenuButton.addEventListener("click", () => {
  importExportMenu.style.display = "flex";
  importExportMenuOverlay.style.display = "flex";
});

importExportMenuOverlay.addEventListener("click", () => {
  importExportMenu.style.display = "none";
  importExportMenuOverlay.style.display = "none";
});

// rotate 180

const sortDataElements = document.querySelectorAll(".sort-data"); // Select all sort-data elements

sortDataElements.forEach((sortData) => {
  sortData.addEventListener("click", () => {
    // Toggle the rotate-180 class on the icon inside the clicked sortData
    const icon = sortData.querySelector(".rotate-icon");
    if (icon) {
      icon.classList.toggle("rotate-180");
    }
  });
});

$(document).ready(function () {
  $("#item-table").DataTable({
    paging: false, // Disable pagination (entries per page)
    searching: false, // Disable search bar
    info: false, // Disable "Showing 1 to X of Y entries" info text
    ordering: true, // Enable sorting
    order: [], // Prevent default sorting on page load
    language: {
      emptyTable: "", // Hide 'No data available in table'
      zeroRecords: "", // Hide 'No matching records found'
      infoEmpty: "", // Hide 'Showing 0 to 0 of 0 entries'
      infoFiltered: "", // Hide 'filtered from X total entries'
    },
  });
});

// delete record button

const checkbox = document.querySelectorAll("#delete-record-checkbox");
const deleteRecordBtn = document.querySelector(".delete-records-button");

checkbox.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      deleteRecordBtn.style.display = "flex";
    } else {
      deleteRecordBtn.style.display = "none";
    }
  });
});

// Select the "Delete All" checkbox
const deleteAllCheckbox = document.querySelector("#delete-record-checkbox");

// Add event listener to toggle all checkboxes
deleteAllCheckbox.addEventListener("change", function () {
  const allCheckboxes = document.querySelectorAll(
    "#item-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#item-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#item-table tbody tr");
  const noDataMessage = document.querySelector("#no-data");

  if (tableRows.length === 0) {
    noDataMessage.style.display = "block"; // Show message if no rows
  } else {
    noDataMessage.style.display = "none"; // Hide message if rows are present
  }
}
document.addEventListener("DOMContentLoaded", function () {
  checkEmptyTable();
});

// searchbar

const searchBar = document.querySelector("#item-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#item-table tbody tr");
  let hasVisibleRows = false;

  tableRows.forEach((row) => {
    let isMatch = false;
    row.querySelectorAll("td").forEach((data) => {
      if (data.textContent.trim().toLowerCase().includes(searchValue)) {
        isMatch = true;
      }
    });

    if (isMatch) {
      row.style.display = "";
      hasVisibleRows = true;
    } else {
      row.style.display = "none";
    }
  });

  // Handle "No data" message correctly
  const noDataMessage = document.querySelector("#no-records");
  noDataMessage.style.display = hasVisibleRows ? "none" : "flex";
});

//item submit

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("#item-submit");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const itemName = document.querySelector("#item-name").value.trim();
    const itemCategory = document.querySelector("#item-category").value.trim();
    const menu = document.querySelector("#select-menu").value.trim();
    const menuGroup = document.querySelector("#select-menu-group").value.trim();
    const menuSubgroup = document
      .querySelector("#select-menu-subgroup")
      .value.trim();
    const price = document.querySelector("#item-price").value.trim();
    const taxGroup = document.querySelector("#tax-group").value.trim();
    const kitchenPrinter = document
      .querySelector("#kitchen-printer")
      .value.trim();

    // Validation
    if (itemName === "") {
      alert("Please enter an item name.");
      return;
    }

    if (itemCategory === "" || itemCategory === "default") {
      alert("Please select an item category.");
      return;
    }

    if (menu === "" || menu === "default") {
      alert("Please select a menu.");
      return;
    }

    if (menuGroup === "" || menuGroup === "default") {
      alert("Please select a menu group.");
      return;
    }

    if (menuSubgroup === "" || menuSubgroup === "default") {
      alert("Please select a menu subgroup.");
      return;
    }

    if (price === "") {
      alert("Please enter a price.");
      return;
    }

    if (kitchenPrinter === "" || kitchenPrinter === "default") {
      alert("Please select a kitchen printer.");
      return;
    }

    let taxGroupValue =
      taxGroup === "" || taxGroup === "default" ? "Not Specified" : taxGroup;

    // Checking for duplicates
    let newValue = itemName.toLowerCase();
    let existingValues = document.querySelectorAll(
      "#item-table tbody tr td:nth-child(2)"
    );

    for (let value of existingValues) {
      if (value.textContent.trim().toLowerCase() === newValue) {
        alert("Duplicate item exists!");
        return;
      }
    }

    // Populating table
    const tableBody = document.querySelector("#item-table tbody");
    let row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox" class="record-checkbox" /></td>
      <td>${itemName}</td>
      <td>${itemCategory}</td>
      <td>${price}</td>
      <td>${taxGroupValue}</td>
      <td>
        <button class="action-buttons edit-btn" title="Edit">
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <button class="action-buttons delete-btn" title="Delete">
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#item-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
