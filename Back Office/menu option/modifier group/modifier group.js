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

// add modifier group popup

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popup = document.querySelector(".modifier-group-popup");
const overlay = document.querySelector(".popup-overlay");
const modifierGroupForm = document.querySelector("#modifier-group-form");

popupEnableButton.addEventListener("click", () => {
  popup.style.display = "grid";
  overlay.style.display = "flex";
});

popupCloseButton.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
  modifierGroupForm.reset();
});

// add item popup
const addModifierItemPopupButton = document.querySelector(
  "#add-modifier-items"
);

const addModifierPopup = document.querySelector(".add-items-popup");
const addModifierPopupOverlay = document.querySelector(".add-items-overlay");
const addModifierPopupCloseButton =
  document.querySelector("#close-items-popup");

const addItemForm = document.querySelector("#add-items-form");
const addItemScroll = document.querySelector("#add-item-scroll");

function popupEnable() {
  addModifierPopup.style.display = "grid";
  addModifierPopupOverlay.style.display = "flex";
  addItemScroll.scrollTop = 0;
}

function popupDisable() {
  addModifierPopup.style.display = "none";
  addModifierPopupOverlay.style.display = "none";
  addItemForm.reset();
  selectTimeContainer.style.display = "none";
}

addModifierItemPopupButton.addEventListener("click", (event) => {
  event.preventDefault();
  popupEnable();
});

addModifierPopupCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  popupDisable();
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
      containerEnable.classList.remove("disabled");
    }
  } else {
    selectTimeContainer.style.display = "none"; // Hide container if unchecked
    if (isContainerEnabled) {
      containerEnable.removeEventListener("click", enableSelectTime);
      isContainerEnabled = false;
      containerEnable.classList.add("disabled");
    }
  }
});

function enableSelectTime() {
  selectTimeContainer.style.display = "grid";
  selectTimeContainer.style.color = "black";
}

// add choice popup

const addChoicePopup = document.querySelector(".add-choice-popup");
const addChoicePopupOverlay = document.querySelector(".add-choice-overlay");
const addChoiceCloseButton = document.querySelector("#close-choice-popup");
const addChoicePopupEnableButton = document.querySelector(
  "#add-modifier-choices"
);

const addChoiceForm = document.querySelector("#add-choice-form");

addChoicePopupEnableButton.addEventListener("click", () => {
  addChoicePopup.style.display = "grid";
  addChoicePopupOverlay.style.display = "flex";
});

addChoiceCloseButton.addEventListener("click", () => {
  addChoicePopup.style.display = "none";
  addChoicePopupOverlay.style.display = "none";
  addChoiceForm.reset();
});

// for import export menu

const importExportMenuButton = document.querySelector(".options-button");
const importExportMenu = document.querySelector(".import-export-options");
const importExportMenuOverlay = document.querySelector(
  ".import-export-overlay "
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
  $("#modifier-group-table").DataTable({
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
    "#modifier-group-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#modifier-group-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#modifier-group-table tbody tr");
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

const searchBar = document.querySelector("#modifier-group-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#modifier-group-table tbody tr");
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

// menu group submmit

const submitButton = document.querySelector("#modifier-submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const modifierName = document.querySelector("#modifier-name").value.trim();

  //validation

  if (modifierName === "") {
    alert("Enter Menu Group Name");
    return;
  }

  // Checking for duplicates
  let newValue = modifierName.toLowerCase();
  let existingValues = document.querySelectorAll(
    "#modifier-group-table tbody tr td:nth-child(2)"
  );

  for (let value of existingValues) {
    if (value.textContent.trim().toLowerCase() === newValue) {
      alert("Modifier Already exists!");
      return;
    }
  }

  //populating the table

  const tableBody = document.querySelector("#modifier-group-table tbody");
  let row = document.createElement("tr");
  row.innerHTML = `
  <td><input type="checkbox" class="record-checkbox" /></td>
  <td>${modifierName}</td>
  <td>
        <button class="action-buttons edit-btn" title="Edit">
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <button class="action-buttons delete-btn" title="Delete">
          <span class="material-symbols-outlined"> delete </span>
        </button>
  </td>`;

  tableBody.appendChild(row);
  popupDisable();
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#modifier-group-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
