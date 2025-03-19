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

// email sms switch

const emailContainer = document.querySelector("#email-container");
const smsContainer = document.querySelector("#sms-container");
const emailButton = document.querySelector("#email-button");
const smsButton = document.querySelector("#sms-button");

emailButton.addEventListener("click", () => {
  emailButton.classList.add("active-heading-btns");
  emailContainer.style.display = "grid";
  smsButton.classList.remove("active-heading-btns");
  smsContainer.style.display = "none";
});

smsButton.addEventListener("click", () => {
  smsButton.classList.add("active-heading-btns");
  smsContainer.style.display = "grid";
  emailButton.classList.remove("active-heading-btns");
  emailContainer.style.display = "none";
});

// reload page
const emailReload = document.querySelector("#email-refresh-button");
emailReload.addEventListener("click", () => {
  location.reload();
});

// email popup

const emailPopup = document.querySelector("#email-popup");
const overlay = document.querySelector("#email-popup-overlay");
const emailForm = document.querySelector("#email-popup-form");
const emailCloseButton = document.querySelector("#close-email-popup");
const emailPopupEnableButton = document.querySelector("#add-email-button");

function emailOpen() {
  emailPopup.style.display = "grid";
  overlay.style.display = "flex";
}

function emailClose() {
  emailPopup.style.display = "none";
  overlay.style.display = "none";
  emailForm.reset();
}

emailPopupEnableButton.addEventListener("click", () => {
  emailOpen();
});

emailCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  emailClose();
});

// Initialize Quill Editor with custom toolbar
var quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: [
      // Multiple fonts
      [{ font: ["serif", "monospace", "arial", "verdana", "courier"] }],
      // Size options
      [{ size: ["small", "normal", "large", "huge"] }],
      // Text formatting options
      ["bold", "italic", "underline", "strike"],
      // Color and background
      [{ color: [] }, { background: [] }],
      // Alignments
      [{ align: [] }],
      // Undo/Redo
      ["undo", "redo"],
      // Lists
      [{ list: "ordered" }, { list: "bullet" }],
      // Indentation
      [{ indent: "-1" }, { indent: "+1" }],
      // Subscript and Superscript
      ["subscript", "superscript"],
      // Embedding and media
      ["blockquote", "code-block"],
      ["image", "video"],
    ],
  },
  placeholder: "Type here...",
});

// email import export menu

const emailImportMenu = document.querySelector("#email-import-menu");
const emailImportMenuButton = document.querySelector("#email-imp-exp-button");
const importExportMenuOverlay = document.querySelector(
  ".import-export-overlay"
);

emailImportMenuButton.addEventListener("click", () => {
  emailImportMenu.style.display = "flex";
  importExportMenuOverlay.style.display = "flex";
});

importExportMenuOverlay.addEventListener("click", () => {
  emailImportMenu.style.display = "none";
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
  $("#email-table").DataTable({
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

// Select elements
const emailDeleteAllCheckbox = document.querySelector(
  "#email-delete-record-checkbox"
);
const deleteRecordBtn = document.querySelector("#delete-email-button");
const rowCheckboxes = document.querySelectorAll(
  "#email-table tbody input[type='checkbox']"
);
const tbody = document.querySelector("#email-table tbody");

// Function to toggle delete button visibility
function toggleDeleteButton() {
  const anyChecked = [...rowCheckboxes].some((checkbox) => checkbox.checked);
  deleteRecordBtn.style.display = anyChecked ? "flex" : "none";
}

// Add event listener for row checkboxes
rowCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", toggleDeleteButton);
});

// Add event listener to "Delete All" checkbox
emailDeleteAllCheckbox.addEventListener("change", function () {
  rowCheckboxes.forEach((checkbox) => {
    checkbox.checked = emailDeleteAllCheckbox.checked;
  });
  toggleDeleteButton();
});

// Delete selected rows
deleteRecordBtn.addEventListener("click", () => {
  rowCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.closest("tr").remove();
    }
  });

  checkEmptyTable(); // Check if the table is empty
  toggleDeleteButton(); // Hide delete button if no rows are left
});

// Function to check if the table is empty
function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#email-table tbody tr");
  const noDataMessage = document.querySelector("#no-data");

  noDataMessage.style.display = tableRows.length === 0 ? "block" : "none";
}

// Run on page load
document.addEventListener("DOMContentLoaded", function () {
  checkEmptyTable();
});

// searchbar

document.addEventListener("DOMContentLoaded", function () {
  checkEmptyTable();
});

const searchBar = document.querySelector("#email-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#email-table tbody tr");
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

// email submit

const emailSubmitButton = document.querySelector("#email-submit-button");

emailSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const emailTitle = document.querySelector("#email-titles").value.trim();
  const emailAddress = document.querySelector("#email-add").value.trim();
  const emailDisplay = document.querySelector("#Email-display-name").value;
  let status = "Pending";

  // Validation
  if (emailTitle === "") {
    alert("Enter Email Title!");
    return;
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailPattern.test(email);
  }

  if (emailAddress.trim() === "") {
    alert("Enter Email Address!");
  } else if (!isValidEmail(emailAddress)) {
    alert("Enter a valid Email Address!");
    return;
  }

  if (emailDisplay === "") {
    alert("Enter Display Name!");
    return;
  }

  // Check for duplicates
  let newValue = emailAddress.toLowerCase();
  let existingValues = document.querySelectorAll(
    "#email-table tbody tr td:nth-child(3)"
  );

  for (let value of existingValues) {
    if (newValue === value.textContent.trim().toLowerCase()) {
      alert("Email Address Already Exists!");
      return;
    }
  }

  // Populate the table
  const tableBody = document.querySelector("#email-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox" class="record-checkbox" /></td>
    <td>${emailTitle}</td>
    <td>${emailAddress}</td>
    <td>${emailDisplay}</td>
    <td>${status}</td>
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

  emailClose();
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#email-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });

//-------------------------sms--------------------

//sms refresh

const smsReload = document.querySelector("#sms-refresh-button");
smsReload.addEventListener("click", () => {
  location.reload();
});

// sms popup

const smsPopup = document.querySelector("#sms-popup");
const smsOverlay = document.querySelector("#sms-popup-overlay");
const smsPopupCloseButton = document.querySelector("#close-sms-popup");
const smsForm = document.querySelector("#sms-popup-form");
const smsPopupEnable = document.querySelector("#add-sms-button");

function smsOpen() {
  smsPopup.style.display = "grid";
  smsOverlay.style.display = "flex";
}

function smsClose() {
  smsPopup.style.display = "none";
  smsOverlay.style.display = "none";
  smsForm.reset();
}

smsPopupEnable.addEventListener("click", () => {
  smsOpen();
});

smsPopupCloseButton.addEventListener("click", () => {
  smsClose();
});

const providerNames = [
  "SpringEdge",
  "CuteSMS",
  "ExpertTexting",
  "MsgClub",
  "pointSMS",
];

providerNames.forEach((name) => {
  const smsProvider = document.querySelector("#sms-provider");
  const providerOptions = document.createElement("option");
  providerOptions.value = name.toLowerCase();
  providerOptions.innerText = name;

  smsProvider.appendChild(providerOptions);
});

// sms import export

const smsImportMenu = document.querySelector("#sms-import-export");
const smsImportMenuOverlay = document.querySelector(
  "#sms-import-export-overlay"
);
const smsImportMenuButton = document.querySelector("#sms-imp-exp-button");

smsImportMenuButton.addEventListener("click", () => {
  smsImportMenu.style.display = "flex";
  smsImportMenuOverlay.style.display = "flex";
});

smsImportMenuOverlay.addEventListener("click", () => {
  smsImportMenu.style.display = "none";
  smsImportMenuOverlay.style.display = "none";
});

$(document).ready(function () {
  $("#sms-table").DataTable({
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

// Select elements
const smsDeleteAllCheckbox = document.querySelector(
  "#sms-delete-record-checkbox"
);
const smsDeleteRecordBtn = document.querySelector("#delete-sms-button");
const smsRowCheckboxes = document.querySelectorAll(".sms-row-checkbox");
const smsTableBody = document.querySelector("#sms-table tbody");
const smsNoDataMessage = document.querySelector("#sms-no-data");
const smsNoRecordsMessage = document.querySelector("#sms-no-records");

// Function to toggle delete button visibility
function toggleSmsDeleteButton() {
  const anyChecked = [...smsRowCheckboxes].some((checkbox) => checkbox.checked);
  smsDeleteRecordBtn.style.display = anyChecked ? "flex" : "none";
}

// Add event listener for row checkboxes
smsRowCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", toggleSmsDeleteButton);
});

// "Select All" checkbox functionality
smsDeleteAllCheckbox.addEventListener("change", function () {
  smsRowCheckboxes.forEach((checkbox) => {
    checkbox.checked = smsDeleteAllCheckbox.checked;
  });
  toggleSmsDeleteButton();
});

// Delete selected rows
smsDeleteRecordBtn.addEventListener("click", () => {
  smsRowCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.closest("tr").remove();
    }
  });

  checkSmsEmptyTable(); // Check if the table is empty after deletion
  toggleSmsDeleteButton(); // Hide delete button if no rows are left
});

// Function to check if the SMS table is empty
function checkSmsEmptyTable() {
  const tableRows = document.querySelectorAll("#sms-table tbody tr");

  if (tableRows.length === 0) {
    smsNoDataMessage.style.display = "block";
    smsNoRecordsMessage.style.display = "block";
  } else {
    smsNoDataMessage.style.display = "none";
    smsNoRecordsMessage.style.display = "none";
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", function () {
  checkSmsEmptyTable();
});

// Searchbar for SMS table
const smsSearchBar = document.querySelector("#sms-search");

smsSearchBar.addEventListener("input", () => {
  const searchValue = smsSearchBar.value.trim().toLowerCase(); // Fixed reference
  const tableRows = document.querySelectorAll("#sms-table tbody tr");
  let hasVisibleRows = false;

  tableRows.forEach((row) => {
    const rowText = row.textContent.trim().toLowerCase();
    if (rowText.includes(searchValue)) {
      row.style.display = "";
      hasVisibleRows = true;
    } else {
      row.style.display = "none";
    }
  });

  // Handle "No data" message correctly
  const noRecordsMessage = document.querySelector("#sms-no-records");
  noRecordsMessage.style.display = hasVisibleRows ? "none" : "flex";
});

// SMS Submit
const smsSubmitButton = document.querySelector("#sms-submit-button");
smsSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const displayName = document.querySelector("#sms-displayname").value.trim();
  const provider = document.querySelector("#sms-provider").value.trim();

  // Validation
  if (displayName === "") {
    alert("Enter Display Name!");
    return;
  }

  if (provider === "" || provider === "default") {
    alert("Select a Provider!");
    return;
  }

  // Check for duplicates
  let newValue = displayName.toLowerCase();
  let existingValues = document.querySelectorAll(
    "#sms-table tbody tr td:nth-child(2)"
  );

  for (let value of existingValues) {
    if (newValue === value.textContent.trim().toLowerCase()) {
      alert("Display Name Already Exists!");
      return;
    }
  }

  // Populate table
  const tableBody = document.querySelector("#sms-table tbody");
  let row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox" class="record-checkbox" /></td>
    <td>${displayName}</td>
    <td>${provider}</td>
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

  smsClose();
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#sms-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
