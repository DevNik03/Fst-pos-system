//loader

const loadingScreen = document.querySelector(".loading-screen");
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  if (loadingScreen) {
    loadingScreen.remove(); // This removes it from the DOM completely
  }
});

// Select buttons
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

// add payment popup close button

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popup = document.querySelector(".tax-option-popup");
const overlay = document.querySelector(".popup-overlay");
const Form = document.querySelector("#tax-form");
const scrollableArea = document.querySelector(".popup-main");

function openPopup() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
  scrollableArea.scrollTop = 0;
}

function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  Form.reset();
}

popupEnableButton.addEventListener("click", () => {
  openPopup();
});

popupCloseButton.addEventListener("click", () => {
  closePopup();
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
  $("#tax-table").DataTable({
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

// searchbar
const searchBar = document.querySelector("#tax-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#tax-table tbody tr");
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

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#tax-table tbody tr");
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

// Function to submit form and add data to table
function submitForm() {
  let taxNameInput = document.querySelector("#tax-name");
  let taxName = taxNameInput.value.trim();
  const tableBody = document.querySelector("#tax-table tbody");

  // Validation: Check if tax name is empty
  if (taxName === "") {
    taxNameInput.style.border = "1px solid red";
    return;
  } else {
    taxNameInput.style.border = ""; // Reset border if valid input
  }

  // Prevent duplicate entries
  if (
    document.querySelector(
      `#tax-table tbody label[for="${taxName.toLowerCase()}"]`
    )
  ) {
    alert("This tax name already exists!");
    return;
  }

  // Create a new row and append it to the table
  let row = document.createElement("tr");
  row.innerHTML = `
    <td><input id="${taxName.toLowerCase()}" type="checkbox"/></td>
    <td><label for="${taxName.toLowerCase()}">${taxName}</label></td>
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

  // Clear input field after adding the row
  taxNameInput.value = "";

  // Close the popup
  closePopup();
}

// Event listener for submit button
document.querySelector(".popup-save-btn").addEventListener("click", (event) => {
  event.preventDefault();
  submitForm();
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#tax-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });

// Select the "Delete All" checkbox
const deleteAllCheckbox = document.querySelector("#delete-record-checkbox");

// Add event listener to toggle all checkboxes
deleteAllCheckbox.addEventListener("change", function () {
  const allCheckboxes = document.querySelectorAll(
    "#tax-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#tax-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});
