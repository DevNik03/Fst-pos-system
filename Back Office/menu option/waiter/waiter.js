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

//scrollbar from bottom
const bottomScroll = document.querySelector(".nav-menu-options");
document.addEventListener("DOMContentLoaded", () => {
  bottomScroll.scrollTop = bottomScroll.scrollHeight;
});

// add payment popup close button

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popup = document.querySelector(".waiter-popup");
const overlay = document.querySelector(".popup-overlay");
const waiterForm = document.querySelector("#waiter-form");
const scrollableArea = document.querySelector(".popup-main");

function popupEnable() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
  scrollableArea.scrollTop = 0;
}

function popupDisable() {
  popup.style.display = "none";
  overlay.style.display = "none";
  waiterForm.reset();
}

popupEnableButton.addEventListener("click", () => {
  popupEnable();
});

popupCloseButton.addEventListener("click", () => {
  popupDisable();
});

//populating outlets
const restaurants = [
  "The Gourmet Kitchen",
  "Spice Symphony",
  "Sushi Haven",
  "Burger Barn",
  "La Petite France",
];

const outletSelect = document.querySelector("#waiter-outlet");
restaurants.forEach((outlet) => {
  const option = document.createElement("option");
  option.value = outlet.toLowerCase().trim();
  option.textContent = outlet;

  outletSelect.appendChild(option);
});

// populating commission plan

const commissionPlans = [
  "Fixed Percentage",
  "Tiered Commission",
  "Flat Fee",
  "Revenue Share",
  "Performance-Based",
];

const commissionSelect = document.querySelector("#waiter-commission");

commissionPlans.forEach((plan) => {
  const option = document.createElement("option");
  option.value = plan.toLowerCase().trim();
  option.textContent = plan;

  commissionSelect.appendChild(option);
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
  $("#waiter-table").DataTable({
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
    "#waiter-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#waiter-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#waiter-table tbody tr");
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

const searchBar = document.querySelector("#waiter-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#waiter-table tbody tr");
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

// waiter submit

const submitButton = document.querySelector("#waiter-submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const waiterName = document.querySelector("#waiter-name").value.trim();
  const role = document.querySelector("#waiter-role").value.trim();
  const outlet = document.querySelector("#waiter-outlet").value.trim();
  const commissionPlan = document
    .querySelector("#waiter-commission")
    .value.trim();

  // Validation
  if (waiterName === "") {
    alert("Enter waiter name");
    return;
  }

  if (role === "" || role === "default") {
    alert("Select a role");
    return;
  }

  if (outlet === "" || outlet === "default") {
    alert("Select an outlet");
    return;
  }

  let commissionValue =
    commissionPlan === "" || commissionPlan === "default"
      ? "Not Specified"
      : commissionPlan;

  // Check for duplicates
  let newValue = waiterName.toLowerCase();
  let existingValues = document.querySelectorAll(
    "#waiter-table tbody tr td:nth-child(2)"
  );

  for (let value of existingValues) {
    if (value.textContent.toLowerCase().trim() === newValue) {
      alert("Waiter Already Exists!");
      return; // Stop execution on duplicate
    }
  }

  // Populating table
  const tableBody = document.querySelector("#waiter-table tbody");
  let row = document.createElement("tr");
  row.innerHTML = `
  <td><input type="checkbox" class="record-checkbox" /></td>
  <td>${waiterName}</td>
  <td>${role}</td>
  <td>${outlet}</td>
  <td>${commissionValue}</td>
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
  .querySelector("#waiter-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
