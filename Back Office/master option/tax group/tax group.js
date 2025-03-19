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
const popup = document.querySelector(".tax-group-popup");
const overlay = document.querySelector(".popup-overlay");
const rtaxGroupForm = document.querySelector("#taxgroup-form");

function popupEnable() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
}

function popupDisable() {
  popup.style.display = "none";
  overlay.style.display = "none";
  rtaxGroupForm.reset();
}

popupEnableButton.addEventListener("click", () => {
  popupEnable();
});

popupCloseButton.addEventListener("click", () => {
  popupDisable();
});

const addTaxOverlay = document.querySelector("#add-tax-overlay");
const addTaxPopup = document.querySelector(".add-tax-popup");
const addTaxForm = document.querySelector("#add-tax-form");
const addTaxEnable = document.querySelector("#add-tax-button");
const addTaxClose = document.querySelector("#add-tax-close");
const scrollableArea = document.querySelector("#add-tax-main");

function addtaxPopEnable() {
  addTaxOverlay.style.display = "flex";
  addTaxPopup.style.display = "grid";
  scrollableArea.scrollTop = 0;
}

function addtaxDisable() {
  addTaxOverlay.style.display = "none";
  addTaxPopup.style.display = "none";
  addTaxForm.reset();
  document.querySelector(".percentage").style.display = "none";
  document.querySelector(".amount").style.display = "none";
}

addTaxEnable.addEventListener("click", (event) => {
  event.preventDefault();
  addtaxPopEnable();
});

addTaxClose.addEventListener("click", (event) => {
  event.preventDefault();
  addtaxDisable();
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

// Select the "Delete All" checkbox
const deleteAllCheckbox = document.querySelector("#delete-record-checkbox");

// Add event listener to toggle all checkboxes
deleteAllCheckbox.addEventListener("change", function () {
  const allCheckboxes = document.querySelectorAll(
    "#tax-group-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#tax-group-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
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
  $("#tax-group-table").DataTable({
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

const searchBar = document.querySelector("#tax-group-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#tax-group-table tbody tr");
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
  const tableRows = document.querySelectorAll("#tax-group-table tbody tr");
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

//populating tax select
const taxes = [
  "Sales Tax",
  "Income Tax",
  "Property Tax",
  "Value Added Tax (VAT)",
  "Excise Tax",
];

const selectTax = document.querySelector("#select-tax");
taxes.forEach((tax) => {
  const option = document.createElement("option");
  option.value = tax.toLowerCase().trim();
  option.textContent = tax;

  selectTax.appendChild(option);
});

//percentage amount change

const selectType = document.querySelector("#tax-type");
selectType.addEventListener("change", () => {
  if (selectType.value === "percentage") {
    document.querySelector(".percentage").style.display = "flex";
    document.querySelector(".amount").style.display = "none";
  } else if (selectType.value === "amount") {
    document.querySelector(".percentage").style.display = "none";
    document.querySelector(".amount").style.display = "flex";
  } else {
    document.querySelector(".percentage").style.display = "none";
    document.querySelector(".amount").style.display = "none";
  }
});

//add tax submit

document.querySelector("#add-tax-submit").addEventListener("click", () => {
  const taxName = document.querySelector("#select-tax").value;
  const taxType = document.querySelector("#tax-type").value;
  const addtaxTable = document.querySelector(".add-tax-table tbody"); // Select tbody

  if (taxName === "default" || taxType === "default") {
    alert("Enter a valid tax name and type.");
    return; // Stop execution if input is invalid
  }

  let row = document.createElement("tr"); // Declare row outside if conditions

  if (taxType === "percentage") {
    let taxRate = document.querySelector("#tax-rate").value.trim();
    row.innerHTML = `<td id="first-col">${taxName}, ${taxRate}%</td>
                     <td> 
      <button class="action-buttons edit-btn" title="Edit">
        <span class="material-symbols-outlined "> edit </span>
      </button>
      <button class="action-buttons delete-btn" title="Delete">
        <span class="material-symbols-outlined "> delete </span>
      </button>
    </td>`;
    addtaxTable.appendChild(row);
  } else if (taxType === "amount") {
    let taxAmount = document.querySelector("#tax-amount").value.trim();
    row.innerHTML = `<td id="first-col">${taxName}, $${taxAmount}</td>
      <td> 
        <button class="action-buttons edit-btn" title="Edit">
        <span class="material-symbols-outlined"> edit </span>
      </button>
      <button class="action-buttons delete-btn" title="Delete">
        <span class="material-symbols-outlined"> delete </span>
      </button>
    </td>`;
    addtaxTable.appendChild(row);
  }

  addtaxDisable();
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector(".add-tax-table tbody") // Corrected selector
  .addEventListener("click", function (event) {
    event.preventDefault();
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });

// Main form submit
const mainSubmit = document.querySelector("#main-submit-button");

mainSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const taxName = document.querySelector("#tax-name").value.trim();
  const tableBody = document.querySelector("#tax-group-table tbody");

  if (taxName === "") {
    alert("Enter a value for Tax Name.");
    return;
  }

  // Get all tax values as an array (from td content)
  let taxValues = [];
  const taxRows = document.querySelectorAll(".add-tax-table tbody tr");
  taxRows.forEach((row) => {
    let taxCell = row.querySelector("#first-col");
    taxValues.push(taxCell ? taxCell.textContent.trim() : "");
  });

  // Create a new row and insert collected tax values
  let row = document.createElement("tr");
  row.innerHTML = `
    <td></td>
    <td>${taxName}</td>
    <td>${taxValues.join(", ")}</td> <!-- Join values with comma -->
    <td><button class="action-button">Action</button></td>
  `;

  tableBody.appendChild(row);
});
