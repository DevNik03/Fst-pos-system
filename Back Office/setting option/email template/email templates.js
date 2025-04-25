//----------------------------- header-----------------------------------
//-----------------------------user option-----------------------------

const userbutton = document.querySelector(".username-button");
const userOptions = document.querySelector(".user-options");
const userOptionsOverlay = document.querySelector("#user-option-overlay");

userbutton.addEventListener("click", () => {
  userOptions.style.opacity = 1;
  userOptions.style.visibility = "visible";
  userOptionsOverlay.style.visibility = "visible";
});

userOptionsOverlay.addEventListener("click", () => {
  userOptions.style.opacity = 0;
  userOptions.style.visibility = "hidden";
  userOptionsOverlay.style.visibility = "hidden";
});

//----------------------------- Select warning popup elements-----------------------------
const warningPopup = document.querySelector(".warning-popup");
const warningOverlay = document.querySelector("#warning-overlay");
const warningMessage = document.querySelector("#warning-message");
const warningFooter = document.querySelector(".warning-popup-foot");

// Function to show the warning popup
function warningPopupEnable(actionType) {
  warningPopup.style.opacity = 1;
  warningPopup.style.visibility = "visible";
  warningOverlay.style.opacity = 1;
  warningOverlay.style.visibility = "visible";

  // Set message based on action type
  if (actionType === "logout") {
    warningMessage.textContent = "Are you sure you want to logout?";
    warningFooter.innerHTML = `
      <button id="logout-confirm" class="warning-popup-buttons warning-confirm">Yes</button>
      <button id="logout-denied" class="warning-popup-buttons warning-denied">No</button>
    `;
  } else if (actionType === "delete") {
    warningMessage.textContent = "Are you sure you want to delete?";
    warningFooter.innerHTML = `
      <button id="delete-confirm" class="warning-popup-buttons warning-confirm">Yes</button>
      <button id="delete-denied" class="warning-popup-buttons warning-denied">No</button>
    `;
  }
}

// Logout button event listener
document.querySelector(".main-logout-button").addEventListener("click", () => {
  warningPopupEnable("logout");
});

function closeWarning() {
  warningPopup.style.opacity = 0;
  warningPopup.style.visibility = "hidden";
  warningOverlay.style.opacity = 0;
  warningOverlay.style.visibility = "hidden";
}

// Use event delegation to close popup when clicking "No"
document
  .querySelector(".warning-popup-foot")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("warning-denied")) {
      closeWarning();
    }
  });

// Close popup when clicking outside of it
warningOverlay.addEventListener("click", () => {
  closeWarning();
});

//-----------------------------navbar-----------------------------

//----------------------------- Select buttons-----------------------------
const masterButton = document.querySelector("#master-button");
const menuButton = document.querySelector("#menu-button");
const settingButton = document.querySelector("#setting-button");

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

// -----------------------------main-----------------------------

//----------------------------- titlebar-----------------------------
// opening SMS popup

const smsOverlay = document.querySelector("#sms-template-overlay");
const smsPopup = document.querySelector("#sms-template-popup");
const smsForm = document.querySelector("#sms-template-form");
const smsPopupAdd = document.querySelector("#sms-template-open");
const smsPopupClose = document.querySelector("#sms-template-close");

function smsPopupEnable() {
  smsPopup.style.visibility = "visible";
  smsPopup.style.opacity = 1;

  smsOverlay.style.visibility = "visible";
  smsOverlay.style.opacity = 1;

  smsForm.scrollTop = 0;
}

function smsPopupDisable() {
  smsPopup.style.visibility = "hidden";
  smsPopup.style.opacity = 0;

  smsOverlay.style.visibility = "hidden";
  smsOverlay.style.opacity = 0;

  smsForm.reset();

  //clearing the tag container
  smsTagContainer.innerHTML = "";
}

smsPopupAdd.addEventListener("click", () => {
  smsPopupEnable();
});

smsPopupClose.addEventListener("click", () => {
  smsPopupDisable();
});

// opening Email popup

const emailOverlay = document.querySelector("#email-template-overlay");
const emailPopup = document.querySelector("#email-template-popup");
const emailForm = document.querySelector("#email-template-form");
const emailPopupAdd = document.querySelector("#email-template-open");
const emailPopupClose = document.querySelector("#email-template-close");

function emailPopupEnable() {
  emailPopup.style.visibility = "visible";
  emailPopup.style.opacity = 1;

  emailOverlay.style.visibility = "visible";
  emailOverlay.style.opacity = 1;

  emailForm.scrollTop = 0;
}

function emailPopupDisable() {
  emailPopup.style.visibility = "hidden";
  emailPopup.style.opacity = 0;

  emailOverlay.style.visibility = "hidden";
  emailOverlay.style.opacity = 0;

  emailForm.reset();

  //clearing the tag container
  emailTagContainer.innerHTML = "";
}

emailPopupAdd.addEventListener("click", () => {
  emailPopupEnable();
});

emailPopupClose.addEventListener("click", () => {
  emailPopupDisable();
});

// for template categories select

const templateCategories = [
  "Reciept Template",
  "email",
  "LPO",
  "INVOICE",
  "INDENT",
];

const templateCategorySelects = document.querySelectorAll(".template-select");

templateCategories.forEach((category) => {
  templateCategorySelects.forEach((select) => {
    const option = document.createElement("option");
    option.value = category.trim();
    option.textContent = category.trim();

    select.appendChild(option);
  });
});

// for notification select

const notifications = [
  "On Order Placement",
  "On Order Settlement",
  "Promotional Notification",
  "On Reciept Printing",
  "On Discpatch",
  "On Order void",
  "On New Order Generation",
  "On Day Close",
  "On Indent Notification Email",
  "On Purchase Order Vendor Email",
];

const notificationSelects = document.querySelectorAll(".notification-select");

notifications.forEach((notification) => {
  notificationSelects.forEach((select) => {
    const option = document.createElement("option");
    option.value = notification.trim();
    option.textContent = notification.trim();

    select.appendChild(option);
  });
});

//now adding tags based on selected value and also adding them to the text

const tagData = {
  "On Order Placement": [
    "{date}",
    "{time}",
    "{guestname}",
    "{outletname}",
    "{companyname}",
    "{username}",
    "{waitername}",
    "{order_amount}",
  ],
  "On Order Settlement": [
    "{date}",
    "{time}",
    "{guestname}",
    "{orderno}",
    "{outletname}",
    "{companyname}",
    "{username}",
    "{payment}",
    "{recieptno}",
  ],
  "Promotional Notification": ["{companyname}"],
  "On Reciept Printing": [
    "{date}",
    "{time}",
    "{guestname}",
    "{orderno}",
    "{outletname}",
    "{companyname}",
    "{username}",
    "{waitername}",
  ],
  "On Discpatch": [
    "{date}",
    "{time}",
    "{guestname}",
    "{orderno}",
    "{outletname}",
    "{companyname}",
    "{expected_delivery_time}",
    "{total_amount}",
    "{due_amount}",
    "{driver_name}",
    "{driver_contactno}",
  ],
  "On Order void": [
    "{time}",
    "{username}",
    "{orderno}",
    "{recieptno}",
    "{outletname}",
    "{reason}",
    "{order_amount}",
    "{orderdate}",
  ],
  "On New Order Generation": [
    "{time}",
    "{username}",
    "{orderno}",
    "{ordertype}",
  ],
  "On Day Close": [
    "{date}",
    "{time}",
    "{total_orders}",
    "{total_dinein}",
    "{total_takeaway}",
    "{total_roomservice}",
    "{total_delivery}",
    "{total_voided}",
  ],
  "On Indent Notification Email": [
    "{voucher_no}",
    "{outlet_name}",
    "{to_outlet_name}",
  ],
  "On Purchase Order Vendor Email": [
    "{vendor_name}",
    "{voucher_no}",
    "{account_name}",
    "{vendor_reg_no}",
    "{vendor_guest_registration_no}",
  ],
};

//-----------------------for sms tags-------------------------------
const smsNotificationType = document.querySelector("#sms-notification");
const smsTagContainer = document.querySelector("#sms-tag-container");
const smsMessageBody = document.querySelector("#sms-message-body");

// Function to render tags based on selected message type
function renderSMSTags(type) {
  smsTagContainer.innerHTML = ""; // Clear existing tags
  const tags = tagData[type]; // Get the tags for the selected type

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagElement.classList.add("tag");
    tagElement.addEventListener("click", () => {
      // Insert tag into input where the cursor is
      const cursorPosition = smsMessageBody.selectionStart;
      const currentValue = smsMessageBody.value;

      smsMessageBody.value =
        currentValue.slice(0, cursorPosition) +
        " " +
        tag +
        " " +
        currentValue.slice(cursorPosition);

      // Move cursor to immediately after the inserted tag (with space)
      const newCursorPosition = cursorPosition + tag.length + 2; // Adjust for tag and spaces
      smsMessageBody.setSelectionRange(newCursorPosition, newCursorPosition);
      smsMessageBody.focus(); // Keep the input focused
    });
    smsTagContainer.appendChild(tagElement);
  });
}

// Update tags when message type changes
smsNotificationType.addEventListener("change", () => {
  renderSMSTags(smsNotificationType.value);
});

//-----------------------for email tags-------------------------------
const emailNotificationType = document.querySelector("#email-notification");
const emailTagContainer = document.querySelector("#email-tag-container");
const emailMessageBody = document.querySelector("#email-message-body");

// Function to render tags based on selected message type
function renderEmailTags(type) {
  emailTagContainer.innerHTML = ""; // Clear existing tags
  const tags = tagData[type]; // Get the tags for the selected type

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagElement.classList.add("tag");

    tagElement.addEventListener("click", () => {
      // Insert tag using TinyMCE API
      const editor = tinymce.get("email-message-body"); // Get the TinyMCE instance by the <textarea>'s ID
      if (editor) {
        editor.focus(); // Make sure editor is focused
        const content = ` ${tag} `; // Add space around the tag for separation

        // Insert the tag at the current cursor position
        editor.execCommand("mceInsertContent", false, content);

        // Move the cursor after the inserted tag
        editor.selection.collapse(false); // Collapse selection and place cursor at the end
      }
    });

    emailTagContainer.appendChild(tagElement);
  });
}

// Update tags when message type changes
emailNotificationType.addEventListener("change", () => {
  renderEmailTags(emailNotificationType.value);
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#template-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#template-table tbody tr");

  let matchFound = false;

  tableRows.forEach((row) => {
    let isMatch = false;
    const tableDatas = row.querySelectorAll("td");

    tableDatas.forEach((data) => {
      if (data.textContent.toLowerCase().trim().includes(searchValue)) {
        isMatch = true;
      }
    });

    if (isMatch) {
      row.style.display = "";
      matchFound = true; // Set matchFound to true if any row is visible
    } else {
      row.style.display = "none";
    }
  });

  // Show "No Records Found" message only if no matches were found
  noRecordsMessage.style.display = matchFound ? "none" : "flex";

  if (searchValue === "") {
    noRecordsMessage.style.display = "none";
  }
}
//----------------------------- import export menu-----------------------------

const importExportOverlay = document.querySelector("#import-export-overlay");
const importExportMenu = document.querySelector(".import-export-menu");
const importExportButton = document.querySelector("#import-export-add");

importExportButton.addEventListener("click", () => {
  importExportMenu.style.right = "0px";
  importExportOverlay.style.visibility = "visible";
});

importExportOverlay.addEventListener("click", () => {
  importExportMenu.style.right = "-300px";
  importExportOverlay.style.visibility = "hidden";
});

//-----------------------------main container-----------------------------
//----------------------------- rotate icon-----------------------------
const sortDataElements = document.querySelectorAll(".sort-icon"); // Select all sort-data elements

sortDataElements.forEach((sortData) => {
  sortData.addEventListener("click", () => {
    const icon = sortData.querySelector(".rotate-icon");
    if (icon) {
      icon.classList.toggle("rotate-180");
    }
  });
});

// -----------------------------table sorting-----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#template-table");
  const headers = table.querySelectorAll("th");

  headers.forEach((header, columnIndex) => {
    header.addEventListener("click", () => {
      sortTable(table, columnIndex);
    });
  });

  function sortTable(table, columnIndex) {
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const isAscending = table.dataset.sortOrder === "asc";

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent.trim().toLowerCase();
      const cellB = rowB.children[columnIndex].textContent.trim().toLowerCase();

      return isAscending
        ? cellA.localeCompare(cellB, undefined, { numeric: true })
        : cellB.localeCompare(cellA, undefined, { numeric: true });
    });

    table.dataset.sortOrder = isAscending ? "desc" : "asc"; // Toggle sort order

    tbody.innerHTML = "";
    rows.forEach((row) => tbody.appendChild(row)); // Append sorted rows back to the table
  }
});

//-----------------------------delete all checkbox-----------------------------

const selectAllCheckbox = document.querySelector("#select-all-checkbox");

selectAllCheckbox.addEventListener("change", () => {
  const tableRows = document.querySelectorAll("#template-table tbody tr");

  tableRows.forEach((row) => {
    const checkbox = row.querySelector("input[type='checkbox']");
    if (checkbox) {
      checkbox.checked = selectAllCheckbox.checked;
    }
  });
  deleteAllEnable();
  noDataDisplay();
});

//----------------------------- delete all button display-----------------------------

function deleteAllEnable() {
  const deleteAllButton = document.querySelector(".delete-all-button");
  const allCheckboxes = document.querySelectorAll(
    "#template-table tr input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        deleteAllButton.style.visibility = "visible";
        deleteAllButton.style.opacity = 1;
      } else {
        deleteAllButton.style.visibility = "hidden";
        deleteAllButton.style.opacity = 0;
      }
    });
  });
}

deleteAllEnable();
//-----------------------------clicking of confirm delete button-----------------------------
const deleteAllButton = document.querySelector(".delete-all-button");
deleteAllButton.addEventListener("click", () => {
  warningPopupEnable("delete");
  document.querySelector("#delete-confirm").addEventListener("click", () => {
    deleteRecords();
    closeWarning();
  });
});

//-----------------------------delete records-----------------------------
function deleteRecords() {
  const checkedBoxes = document.querySelectorAll(
    "#template-table tbody input[type='checkbox']:checked"
  );

  checkedBoxes.forEach((checkbox) => {
    const row = checkbox.closest("tr"); // Get the closest <tr>
    if (row) {
      row.remove();
      deleteAllButton.style.visibility = "hidden";
      deleteAllButton.style.opacity = 0;

      selectAllCheckbox.checked = false;
    }
  });
  noDataDisplay();
  recordCount();
}

function noDataDisplay() {
  const rows = document.querySelectorAll("#template-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const smsTemplateSubmit = document.querySelector("#sms-template-submit-button");

smsTemplateSubmit.addEventListener("click", () => {
  // Taking inputs

  const templateName = document
    .querySelector("#sms-template-name")
    .value.trim();
  const templateCategory = document
    .querySelector("#sms-template-options")
    .value.trim();
  const notificationType = document
    .querySelector("#sms-notification")
    .value.trim();
  const messageBody = document.querySelector("#sms-message-body").value.trim();
  // Validation

  if (templateName === "") {
    alert("Please Enter a Template Name");
    return;
  }

  if (templateCategory === "" || templateCategory === "default") {
    alert("Please Select a Template Category");
    return;
  }

  if (notificationType === "" || notificationType === "default") {
    alert("Please Select a Notification Type");
    return;
  }

  if (messageBody === "") {
    alert("Please Write a Message Before Submitting");
    return;
  }

  let Type = "SMS";

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#template-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) =>
      cell.textContent.trim().toLowerCase() === templateName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Template Already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#template-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${templateName}</td>
    <td>${Type}</td>
    <td>${templateCategory}</td>
    <td>${notificationType}</td>

   
    <td>
      <button class="active-button action-buttons" title="Status">
        <span class="material-symbols-outlined">radio_button_checked</span>
      </button>
      <button class="edit-btn action-buttons" title="Edit">
        <span class="material-symbols-outlined medium-icon">edit</span>
      </button>
      <button class="delete-btn action-buttons" title="Delete">
        <span class="material-symbols-outlined medium-icon">delete</span>
      </button>
    </td>
  `;
  tableBody.appendChild(row);

  smsPopupDisable();
  deleteAllEnable();
  recordCount();
  noDataDisplay();
});

//----------------------------- adding records to table-----------------------------
const emailTemplateSubmit = document.querySelector(
  "#email-template-submit-button"
);
emailTemplateSubmit.addEventListener("click", () => {
  // Taking inputs
  const templateName = document
    .querySelector("#email-template-name")
    .value.trim();
  const templateCategory = document
    .querySelector("#email-template-options")
    .value.trim();
  const notificationType = document
    .querySelector("#email-notification")
    .value.trim();

  // Get content from TinyMCE using the API
  const messageBody = tinymce.get("email-message-body").getContent().trim();

  // Validation
  if (templateName === "") {
    alert("Please Enter a Template Name");
    return;
  }

  if (templateCategory === "" || templateCategory === "default") {
    alert("Please Select a Template Category");
    return;
  }

  if (notificationType === "" || notificationType === "default") {
    alert("Please Select a Notification Type");
    return;
  }

  if (messageBody === "" || messageBody === "<p></p>") {
    alert("Please Write a Message Before Submitting");
    return;
  }

  let Type = "Email";

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#template-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) =>
      cell.textContent.trim().toLowerCase() === templateName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Template Already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#template-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${templateName}</td>
    <td>${Type}</td>
    <td>${templateCategory}</td>
    <td>${notificationType}</td>
    <td>
      <button class="active-button action-buttons" title="Status">
        <span class="material-symbols-outlined">radio_button_checked</span>
      </button>
      <button class="edit-btn action-buttons" title="Edit">
        <span class="material-symbols-outlined medium-icon">edit</span>
      </button>
      <button class="delete-btn action-buttons" title="Delete">
        <span class="material-symbols-outlined medium-icon">delete</span>
      </button>
    </td>
  `;
  tableBody.appendChild(row);

  emailPopupDisable();
  deleteAllEnable();
  recordCount();
  noDataDisplay();
});

//-----------------------------delete function for all delete buttons-----------------------------

document
  .querySelector("#template-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#template-table tbody input[type='checkbox']:checked"
      ).length;

      if (checkedBoxes === 0) {
        alert("Select the record you want to delete");
      } else {
        deleteRecords();
      }
      mainSearch();
    }
  });

//-----------------------------buffer-----------------------------

function recordCount() {
  const rowLength = document.querySelectorAll(
    "#template-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
