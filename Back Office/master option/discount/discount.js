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

// nav menu change
const masterButton = document.querySelector(".master-btn");
const menuButton = document.querySelector(".menu-btn");
const settingButton = document.querySelector(".settings-btn");

// Helper function to reset button background colors
function resetButtonStyles() {
  masterButton.style.backgroundColor = "";
  menuButton.style.backgroundColor = "";
  settingButton.style.backgroundColor = "";
}

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
const popup = document.querySelector(".discount-popup");
const overlay = document.querySelector(".popup-overlay");
const form = document.querySelector("#discount-form");
const scrollableArea = document.querySelector(".popup-main");

function popupEnable() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
  scrollableArea.scrollTop = 0;
}

function popupDisable() {
  popup.style.display = "none";
  overlay.style.display = "none";
  form.reset();
  itemSection.style.display = "none";
  orderSection.style.display = "none";
  percentageSections.forEach((section) => (section.style.display = "none"));
  amountSections.forEach((section) => (section.style.display = "none"));
  taxExemptedContainer.classList.remove("hidden");
}

popupEnableButton.addEventListener("click", () => {
  popupEnable();
});

popupCloseButton.addEventListener("click", () => {
  popupDisable();
});

// for apply on order or item

const applyOnSelect = document.querySelector("#apply-disc-on");
const orderSection = document.querySelector(".order");
const itemSection = document.querySelector(".item");
const taxExemptedContainer = document.querySelector("#tax-exempted-container");
applyOnSelect.addEventListener("change", () => {
  if (applyOnSelect.value === "Order") {
    orderSection.style.display = "flex";
    itemSection.style.display = "none";
    taxExemptedContainer.classList.add("hidden");
  } else if (["Item", "Bulk Item"].includes(applyOnSelect.value)) {
    orderSection.style.display = "none";
    itemSection.style.display = "flex";
    taxExemptedContainer.classList.remove("hidden");
  } else if (applyOnSelect.value === "" || applyOnSelect.value === "default") {
    itemSection.style.display = "none";
    orderSection.style.display = "none";
    taxExemptedContainer.classList.remove("hidden");
  }
});

// for discount type

const discountTypeSelect = document.querySelector("#discount-type");
const percentageSections = document.querySelectorAll(".percentage");
const amountSections = document.querySelectorAll(".amount");

discountTypeSelect.addEventListener("change", () => {
  if (discountTypeSelect.value === "Percentage") {
    percentageSections.forEach((section) => (section.style.display = "flex"));
    amountSections.forEach((section) => (section.style.display = "none"));
  } else if (discountTypeSelect.value === "Amount") {
    percentageSections.forEach((section) => (section.style.display = "none"));
    amountSections.forEach((section) => (section.style.display = "flex"));
  } else {
    percentageSections.forEach((section) => (section.style.display = "none"));
    amountSections.forEach((section) => (section.style.display = "none"));
  }
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
  $("#discount-table").DataTable({
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
    "#discount-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#discount-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#discount-table tbody tr");
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

const searchBar = document.querySelector("#discount-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#discount-table tbody tr");
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

// for outlet list

const peopleNames = [
  "Alice Johnson",
  "Michael Smith",
  "Emily Davis",
  "James Wilson",
  "Sophia Martinez",
  "Daniel Brown",
  "Olivia Taylor",
  "William Anderson",
  "Ava Thomas",
  "Ethan White",
  "Isabella Harris",
  "Benjamin Clark",
  "Mia Lewis",
  "Alexander Walker",
  "Charlotte Hall",
  "Liam Young",
  "Emma King",
  "Noah Wright",
  "Amelia Scott",
  "Lucas Green",
];

const userTableBody = document.querySelector("#user-table tbody");

peopleNames.forEach((name) => {
  const row = document.createElement("tr");

  const checkboxTD = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", name.toLowerCase().trim());
  checkbox.setAttribute("class", "checkbox-input");
  checkbox.classList.add("sel-all");

  checkboxTD.appendChild(checkbox);

  const labelTD = document.createElement("td");
  const label = document.createElement("label");
  label.setAttribute("for", name.toLowerCase().trim());
  label.innerText = name;

  labelTD.appendChild(label);

  row.appendChild(checkboxTD);
  row.append(labelTD);

  userTableBody.appendChild(row);
});

// selec all checkbox
const selectAllCheckbox = document.querySelector("#select-all-users");
selectAllCheckbox.addEventListener("change", () => {
  const checkboxes = document.querySelectorAll(".sel-all");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked;
  });
});

// Discount submit
document
  .querySelector("#discount-submit")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const discountName = document.querySelector("#discount-name").value.trim();
    const applyOn = document.querySelector("#apply-disc-on").value.trim();
    const discountType = document.querySelector("#discount-type").value.trim();
    const tableBody = document.querySelector("#discount-table tbody");

    // Validation
    if (discountName === "") {
      alert("Enter a discount name.");
      return;
    }

    if (applyOn === "default" || applyOn === "") {
      alert("Enter a valid 'Apply On' value.");
      return;
    }

    if (discountType === "default" || discountType === "") {
      alert("Enter a valid discount type.");
      return;
    }

    // If discount type is "Percentage"
    let discountValue = "";
    if (discountType === "Percentage") {
      const discountPercentage = document
        .querySelector("#discount-percentage")
        .value.trim();
      if (discountPercentage === "") {
        alert("Enter a valid discount percentage.");
        return;
      }
      discountValue = `${discountPercentage}%`;
    }

    // If discount type is "Amount"
    if (discountType === "Amount") {
      const discountAmount = document
        .querySelector("#discount-amount")
        .value.trim();
      if (discountAmount === "") {
        alert("Enter a valid discount amount.");
        return;
      }
      discountValue = `$${discountAmount}`;
    }

    // Check for duplicates
    const existingDiscounts = document.querySelectorAll(
      "#discount-table tbody tr td:nth-child(2)"
    );
    for (let discount of existingDiscounts) {
      if (
        discount.textContent.trim().toLowerCase() === discountName.toLowerCase()
      ) {
        alert("This discount name already exists!");
        return; // Stop execution if duplicate found
      }
    }

    // Create new row
    let row = document.createElement("tr");
    row.innerHTML = `
    <td><input type="checkbox" class="record-checkbox" /></td>
    <td>${discountName}</td>
    <td>${applyOn}</td>
    <td>${discountType}</td>
    <td>${discountValue}</td>
    <td><button class="action-buttons edit-btn" title="Edit">
        <span class="material-symbols-outlined"> edit </span>
      </button>
      <button class="action-buttons delete-btn" title="Delete">
        <span class="material-symbols-outlined"> delete </span>
      </button></td>`;

    // Append the row to the table body
    tableBody.appendChild(row);

    popupDisable();
  });

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#discount-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
