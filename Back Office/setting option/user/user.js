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
const popup = document.querySelector(".user-popup");
const overlay = document.querySelector(".popup-overlay");
const waiterForm = document.querySelector("#user-popup-form");
const scrollableArea = document.querySelector(".popup-main");

popupEnableButton.addEventListener("click", (event) => {
  event.preventDefault();
  popup.style.display = "grid";
  overlay.style.display = "flex";
  scrollableArea.scrollTop = 0;
});

popupCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  popup.style.display = "none";
  overlay.style.display = "none";

  waiterForm.reset(); // Reset the form when the popup is closed
  passwordInput.setAttribute("type", "password");
  privilegeTableDefault();
});

// password icon
const showPasswordButton = document.querySelector("#user-password-btn");
const passwordInput = document.querySelector("#user-password");
const passwordVisible = document.querySelector("#password-visible");
const passwordHidden = document.querySelector("#password-hidden");

showPasswordButton.addEventListener("click", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
    passwordVisible.style.display = "inline";
    passwordHidden.style.display = "none";
  } else {
    passwordInput.setAttribute("type", "password");
    passwordVisible.style.display = "none";
    passwordHidden.style.display = "inline";
  }
});

// user language

const userLanguage = document.querySelector("#user-language");
const languages = [
  "English",
  "Mandarin Chinese",
  "Hindi",
  "Spanish",
  "French",
  "Arabic",
  "Bengali",
  "Russian",
  "Portuguese",
  "Urdu",
  "Indonesian",
  "German",
  "Japanese",
  "Swahili",
  "Marathi",
  "Telugu",
  "Turkish",
  "Korean",
  "Tamil",
  "Vietnamese",
];

languages.forEach((language) => {
  const languageOption = document.createElement("option");

  languageOption.value = language.toLowerCase();
  languageOption.innerText = language;

  userLanguage.appendChild(languageOption);
});

// for waiter name

const waiterName = document.querySelector("#waiter-name");
const waiters = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

waiters.forEach((waiter) => {
  const waiterOption = document.createElement("option");
  waiterOption.value = waiter.toLowerCase();
  waiterOption.innerText = waiter;

  waiterName.appendChild(waiterOption);
});

const roles = ["admin", "waiter", "cashier"];
const userRoleSelect = document.querySelector("#user-role");

roles.forEach((role) => {
  const option = document.createElement("option");
  option.value = role.trim();
  option.textContent = role;

  userRoleSelect.appendChild(option);
});

// Privilege options

// Buttons
const privilegeButton = document.querySelector("#privilege-button");
const reportButton = document.querySelector("#report-button");
const outletButton = document.querySelector("#outlet-button");
const discountButton = document.querySelector("#discount-button");
const orderButton = document.querySelector("#order-button");

// Containers
const privilegeContainer = document.querySelector("#privilege-option");
const reportContainer = document.querySelector("#reports-option");
const outletContainer = document.querySelector("#outlets-option"); // Fixed typo
const discountContainer = document.querySelector("#discount-option");
const orderContainer = document.querySelector("#order-summary-columns");

function privilegeTableDefault() {
  privilegeContainer.style.display = "grid";
  reportContainer.style.display = "none";
  outletContainer.style.display = "none"; // Fixed typo
  discountContainer.style.display = "none";
  orderContainer.style.display = "none";

  privilegeButton.classList.add("active-option");
  reportButton.classList.remove("active-option");
  outletButton.classList.remove("active-option");
  discountButton.classList.remove("active-option");
  orderButton.classList.remove("active-option");
}

privilegeButton.addEventListener("click", (event) => {
  event.preventDefault();

  privilegeContainer.style.display = "grid";
  reportContainer.style.display = "none";
  outletContainer.style.display = "none"; // Fixed typo
  discountContainer.style.display = "none";
  orderContainer.style.display = "none";

  privilegeButton.classList.add("active-option");
  reportButton.classList.remove("active-option");
  outletButton.classList.remove("active-option");
  discountButton.classList.remove("active-option");
  orderButton.classList.remove("active-option");
});

reportButton.addEventListener("click", (event) => {
  event.preventDefault();

  privilegeContainer.style.display = "none";
  reportContainer.style.display = "grid";
  outletContainer.style.display = "none"; // Fixed typo
  discountContainer.style.display = "none";
  orderContainer.style.display = "none";

  privilegeButton.classList.remove("active-option");
  reportButton.classList.add("active-option");
  outletButton.classList.remove("active-option");
  discountButton.classList.remove("active-option");
  orderButton.classList.remove("active-option");
});

outletButton.addEventListener("click", (event) => {
  // Fixed event listener target
  event.preventDefault();

  privilegeContainer.style.display = "none";
  reportContainer.style.display = "none";
  outletContainer.style.display = "grid"; // Fixed typo
  discountContainer.style.display = "none";
  orderContainer.style.display = "none";

  privilegeButton.classList.remove("active-option");
  reportButton.classList.remove("active-option");
  outletButton.classList.add("active-option");
  discountButton.classList.remove("active-option");
  orderButton.classList.remove("active-option");
});

discountButton.addEventListener("click", (event) => {
  // Fixed event listener target
  event.preventDefault();

  privilegeContainer.style.display = "none";
  reportContainer.style.display = "none";
  outletContainer.style.display = "none"; // Fixed typo
  discountContainer.style.display = "grid";
  orderContainer.style.display = "none";

  privilegeButton.classList.remove("active-option");
  reportButton.classList.remove("active-option");
  outletButton.classList.remove("active-option");
  discountButton.classList.add("active-option");
  orderButton.classList.remove("active-option");
});

orderButton.addEventListener("click", (event) => {
  // Fixed event listener target
  event.preventDefault();

  privilegeContainer.style.display = "none";
  reportContainer.style.display = "none";
  outletContainer.style.display = "none"; // Fixed typo
  discountContainer.style.display = "none";
  orderContainer.style.display = "grid";

  privilegeButton.classList.remove("active-option");
  reportButton.classList.remove("active-option");
  outletButton.classList.remove("active-option");
  discountButton.classList.remove("active-option");
  orderButton.classList.add("active-option");
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
  $("#user-table").DataTable({
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
    "#user-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#user-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#user-table tbody tr");
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

const searchBar = document.querySelector("#user-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#user-table tbody tr");
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

const submitButton = document.querySelector("#user-submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const Name = document.querySelector("#user-name").value.trim();
  const userName = document.querySelector("#user-username").value.trim();
  const password = document.querySelector("#user-password").value.trim();
  const language = document.querySelector("#user-language").value.trim();
  const userRole = document.querySelector("#user-role").value.trim();

  // Validation
  if (Name === "") {
    alert("Enter Name");
    return;
  }

  if (userName === "") {
    alert("Enter UserName");
    return;
  }

  if (password === "") {
    alert("Enter Password");
    return;
  }

  if (language === "" || language === "default") {
    alert("Select a Language");
    return;
  }

  if (userRole === "" || userRole === "default") {
    alert("Select a User Role");
    return;
  }
  // Check for duplicates
  let newValue = userName.toLowerCase();
  let existingValues = document.querySelectorAll(
    "#user-table tbody tr td:nth-child(2)"
  );

  for (let value of existingValues) {
    if (value.textContent.toLowerCase().trim() === newValue) {
      alert("User Already Exists!");
      return; // Stop execution on duplicate
    }
  }

  // Populating table
  const tableBody = document.querySelector("#user-table tbody");
  let row = document.createElement("tr");
  row.innerHTML = `
  <td><input type="checkbox" class="record-checkbox" /></td>
  <td>${Name}</td>
  <td>${userName}</td>
  <td>${language}</td>
  <td>${userRole}</td>
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
  .querySelector("#user-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
