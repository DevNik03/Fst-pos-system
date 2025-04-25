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
// opening main popup

const smsProviderOverlay = document.querySelector("#sms-providers-overlay");
const smsProviderPopup = document.querySelector("#sms-providers-popup");
const smsProviderForm = document.querySelector("#sms-providers-form");
const smsProviderPopupAdd = document.querySelector("#sms-providers-open");
const smsProviderPopupClose = document.querySelector("#sms-providers-close");

function mainPopupEnable() {
  smsProviderPopup.style.visibility = "visible";
  smsProviderPopup.style.opacity = 1;

  smsProviderOverlay.style.visibility = "visible";
  smsProviderOverlay.style.opacity = 1;

  smsProviderForm.scrollTop = 0;
}

function mainPopupDisable() {
  smsProviderPopup.style.visibility = "hidden";
  smsProviderPopup.style.opacity = 0;

  smsProviderOverlay.style.visibility = "hidden";
  smsProviderOverlay.style.opacity = 0;

  smsProviderForm.reset();

  //closing all sms provider containers
  smsProviderContainers.forEach((container) => {
    container.classList.add("hide");
  });
}

smsProviderPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

smsProviderPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

//populating sms provider select
const smsProviders = [
  "SpringEdge",
  "CuteSMS",
  "ExpertTexting",
  "MsgClub",
  "PointSMS",
  "Nimbus",
  "Way2SMS",
];

const smsProviderSelect = document.querySelector("#sms-provider-name");
smsProviders.forEach((provider) => {
  const option = document.createElement("option");
  option.value = provider.trim();
  option.textContent = provider.trim();

  smsProviderSelect.appendChild(option);
});

//opening containers based on selected value
const smsProviderContainers = document.querySelectorAll(".flexible-container");
//taken from above
smsProviderSelect.addEventListener("change", () => {
  const selectedValue = smsProviderSelect.value.trim();

  smsProviderContainers.forEach((container) => {
    container.classList.add("hide");
    if (container.id === selectedValue) {
      container.classList.remove("hide");
    }
  });
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#sms-providers-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#sms-providers-table tbody tr");

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
  const table = document.querySelector("#sms-providers-table");
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
  const tableRows = document.querySelectorAll("#sms-providers-table tbody tr");

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
    "#sms-providers-table tr input[type='checkbox']"
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
    "#sms-providers-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#sms-providers-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const smsProviderSubmit = document.querySelector(
  "#sms-providers-submit-button"
);

smsProviderSubmit.addEventListener("click", () => {
  // Taking inputs
  const displayName = document.querySelector("#sms-display-name").value.trim();
  const smsProvider = document.querySelector("#sms-provider-name").value.trim();

  //springEdge inputs
  const springEdgeAPI = document.querySelector("#springEdge-api").value.trim();
  const springEdgeSenderID = document
    .querySelector("#springEdge-sender-id")
    .value.trim();

  //cuteSMS inputs
  const cuteSMSUsername = document
    .querySelector("#cuteSMS-username")
    .value.trim();
  const cuteSMSPassword = document
    .querySelector("#cuteSMS-password")
    .value.trim();
  const cuteSMSSenderID = document
    .querySelector("#cuteSMS-sender-id")
    .value.trim();

  //expertTexting inputs
  const expertTextingAPI = document
    .querySelector("#expertTexting-api")
    .value.trim();
  const expertTextingUsername = document
    .querySelector("#expertTexting-username")
    .value.trim();
  const expertTextingPassword = document
    .querySelector("#expertTexting-password")
    .value.trim();

  //msgClub inputs
  const msgClubAPI = document.querySelector("#MsgClub-api").value.trim();
  const msgClubSenderID = document
    .querySelector("#MsgClub-sender-id")
    .value.trim();

  //pointSMS inputs
  const pointSMSUsername = document
    .querySelector("#pointSMS-username")
    .value.trim();
  const pointSMSPassword = document
    .querySelector("#pointSMS-password")
    .value.trim();
  const pointSMSSenderID = document
    .querySelector("#pointSMS-sender-id")
    .value.trim();

  //nimbus inputs
  const nimbusUsername = document
    .querySelector("#nimbus-username")
    .value.trim();
  const nimbusPassword = document
    .querySelector("#nimbus-password")
    .value.trim();
  const nimbusSenderID = document
    .querySelector("#nimbus-sender-id")
    .value.trim();

  //way2SMS inputs
  const way2SMSAPI = document.querySelector("#way2SMS-api").value.trim();
  const way2SMSPassword = document
    .querySelector("#way2SMS-password")
    .value.trim();
  const way2SMSSenderID = document
    .querySelector("#way2SMS-sender-id")
    .value.trim();

  // Validation

  if (displayName === "") {
    alert("Please Enter a Display Name");
    return;
  }

  if (smsProvider === "" || smsProvider === "default") {
    alert("Please Select a SMS Provider");
    return;
  }

  //springEdge
  if (smsProvider === "SpringEdge") {
    if (springEdgeAPI === "") {
      alert("Please Enter the API Key");
      return;
    }

    if (springEdgeSenderID === "") {
      alert("Please Enter the Sender ID");
      return;
    }
  }

  //cuteSMS
  if (smsProvider === "CuteSMS") {
    if (cuteSMSUsername === "") {
      alert("Please Enter a Username");
      return;
    }

    if (cuteSMSPassword === "") {
      alert("Please Enter a Password");
      return;
    }

    if (cuteSMSSenderID === "") {
      alert("Please Enter the Sender ID");
      return;
    }
  }

  //ExpertTexting
  if (smsProvider === "ExpertTexting") {
    if (expertTextingAPI === "") {
      alert("Please Enter the API Key");
      return;
    }

    if (expertTextingUsername === "") {
      alert("Please Enter a Username");
      return;
    }

    if (expertTextingPassword === "") {
      alert("Please Enter a Password");
      return;
    }
  }

  //MsgClub
  if (smsProvider === "MsgClub") {
    if (msgClubAPI === "") {
      alert("Please Enter the API Key");
      return;
    }

    if (msgClubSenderID === "") {
      alert("Please Enter the Sender ID");
      return;
    }
  }

  //PointSMS
  if (smsProvider === "PointSMS") {
    if (pointSMSUsername === "") {
      alert("Please Enter a Username");
      return;
    }

    if (pointSMSPassword === "") {
      alert("Please Enter a Password");
      return;
    }

    if (pointSMSSenderID === "") {
      alert("Please Enter the Sender ID");
      return;
    }
  }

  //Nimbus
  if (smsProvider === "Nimbus") {
    if (nimbusUsername === "") {
      alert("Please Enter a Username");
      return;
    }

    if (nimbusPassword === "") {
      alert("Please Enter a Password");
      return;
    }

    if (nimbusSenderID === "") {
      alert("Please Enter the Sender ID");
      return;
    }
  }

  //Way2SMS
  if (smsProvider === "Way2SMS") {
    if (way2SMSAPI === "") {
      alert("Please Enter the API Key");
      return;
    }

    if (way2SMSPassword === "") {
      alert("Please Enter a Password");
      return;
    }

    if (way2SMSSenderID === "") {
      alert("Please Enter the Sender ID");
      return;
    }
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#sms-providers-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) =>
      cell.textContent.trim().toLowerCase() === displayName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Display Name Already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#sms-providers-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${displayName}</td>
    <td>${smsProvider}</td>
   
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

  mainPopupDisable();
  deleteAllEnable();
  recordCount();
  noDataDisplay();
});

//-----------------------------delete function for all delete buttons-----------------------------

document
  .querySelector("#sms-providers-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#sms-providers-table tbody input[type='checkbox']:checked"
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
    "#sms-providers-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
