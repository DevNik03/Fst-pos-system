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

const outletOverlay = document.querySelector("#outlet-overlay");
const outletPopup = document.querySelector("#outlet-popup");
const outletForm = document.querySelector("#outlet-form");
const outletPopupAdd = document.querySelector("#outlet-open");
const outletPopupClose = document.querySelector("#outlet-close");

function mainPopupEnable() {
  outletPopup.style.visibility = "visible";
  outletPopup.style.opacity = 1;

  outletOverlay.style.visibility = "visible";
  outletOverlay.style.opacity = 1;

  outletForm.scrollTop = 0;

  //all containers scroll to top
  scrollTop();
}

function mainPopupDisable() {
  outletPopup.style.visibility = "hidden";
  outletPopup.style.opacity = 0;

  outletOverlay.style.visibility = "hidden";
  outletOverlay.style.opacity = 0;

  outletForm.reset();

  //opening general settings by default when the popup opens
  generalSettingButton.classList.add("active-filter-button");
  orderTypeSettingButton.classList.remove("active-filter-button");
  otherSettingButton.classList.remove("active-filter-button");
  iloyaltySettingButton.classList.remove("active-filter-button");

  generalSettingContainer.style.display = "flex";
  orderTypeSettingContainer.style.display = "none";
  otherSettingContainer.style.display = "none";
  iloyaltySettingContainer.style.display = "none";

  // disabling dinein container
  dineinConatinerActive.classList.add("disabled-div");
  // disabling takeaway container
  takeAwayConatinerActive.classList.add("disabled-div");
  // disabling delivery container
  deliveryConatinerActive.classList.add("disabled-div");

  //disabling iloyalty checkbox initially
  iloyaltySettingButton.classList.add("hide");
  iloyaltySettingContainer.classList.add("hide");
}

outletPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

outletPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

//-------------------------------------------------------------------------------------------------------------------

//making the containers scroll to top when opened

function scrollTop() {
  const scrollableContainers = document.querySelectorAll(".popup-container");
  scrollableContainers.forEach((container) => {
    container.scrollTop = 0;
  });
}

// switching between different settings

//buttons
const generalSettingButton = document.querySelector("#general-setting-button");
const orderTypeSettingButton = document.querySelector(
  "#order-type-setting-button"
);
const otherSettingButton = document.querySelector("#other-setting-button");
const iloyaltySettingButton = document.querySelector(
  "#iloyalty-setting-button"
);

//containers
const generalSettingContainer = document.querySelector(
  "#general-settings-container"
);
const orderTypeSettingContainer = document.querySelector(
  "#order-type-settings-container"
);
const otherSettingContainer = document.querySelector(
  "#other-settings-container"
);
const iloyaltySettingContainer = document.querySelector("#iloyalty-container");

generalSettingButton.addEventListener("click", () => {
  generalSettingButton.classList.add("active-filter-button");
  orderTypeSettingButton.classList.remove("active-filter-button");
  otherSettingButton.classList.remove("active-filter-button");
  iloyaltySettingButton.classList.remove("active-filter-button");

  generalSettingContainer.style.display = "flex";
  orderTypeSettingContainer.style.display = "none";
  otherSettingContainer.style.display = "none";
  iloyaltySettingContainer.style.display = "none";

  scrollTop();
});

orderTypeSettingButton.addEventListener("click", () => {
  generalSettingButton.classList.remove("active-filter-button");
  orderTypeSettingButton.classList.add("active-filter-button");
  otherSettingButton.classList.remove("active-filter-button");
  iloyaltySettingButton.classList.remove("active-filter-button");

  generalSettingContainer.style.display = "none";
  orderTypeSettingContainer.style.display = "grid";
  otherSettingContainer.style.display = "none";
  iloyaltySettingContainer.style.display = "none";

  scrollTop();
});

otherSettingButton.addEventListener("click", () => {
  generalSettingButton.classList.remove("active-filter-button");
  orderTypeSettingButton.classList.remove("active-filter-button");
  otherSettingButton.classList.add("active-filter-button");
  iloyaltySettingButton.classList.remove("active-filter-button");

  generalSettingContainer.style.display = "none";
  orderTypeSettingContainer.style.display = "none";
  otherSettingContainer.style.display = "flex";
  iloyaltySettingContainer.style.display = "none";

  scrollTop();
});

iloyaltySettingButton.addEventListener("click", () => {
  generalSettingButton.classList.remove("active-filter-button");
  orderTypeSettingButton.classList.remove("active-filter-button");
  otherSettingButton.classList.remove("active-filter-button");
  iloyaltySettingButton.classList.add("active-filter-button");

  generalSettingContainer.style.display = "none";
  orderTypeSettingContainer.style.display = "none";
  otherSettingContainer.style.display = "none";
  iloyaltySettingContainer.style.display = "flex";

  scrollTop();
});

//switching in order type setting

//buttons
const dineInButton = document.querySelector("#dinein-button");
const takeAwayButton = document.querySelector("#takwAway-button");
const deliveryButton = document.querySelector("#delivery-button");
const noChargeButton = document.querySelector("#no-charge-button");
const onlineOrdringButton = document.querySelector("#online-ordering-button");

//containers

const dineInContainer = document.querySelector("#dinein-container");
const takeAwayConatiner = document.querySelector("#takeaway-container");
const noChargeContainer = document.querySelector("#nocharge-container");
const deliveryContainer = document.querySelector("#delivery-container");
const onlineOrderingContainer = document.querySelector(
  "#online-ordering-container"
);

dineInButton.addEventListener("click", () => {
  dineInButton.classList.add("popup-sidebar-active-btn");
  takeAwayButton.classList.remove("popup-sidebar-active-btn");
  deliveryButton.classList.remove("popup-sidebar-active-btn");
  noChargeButton.classList.remove("popup-sidebar-active-btn");
  onlineOrdringButton.classList.remove("popup-sidebar-active-btn");

  dineInContainer.style.display = "flex";
  takeAwayConatiner.style.display = "none";
  deliveryContainer.style.display = "none";
  noChargeContainer.style.display = "none";
  onlineOrderingContainer.style.display = "none";

  scrollTop();
});

takeAwayButton.addEventListener("click", () => {
  dineInButton.classList.remove("popup-sidebar-active-btn");
  takeAwayButton.classList.add("popup-sidebar-active-btn");
  deliveryButton.classList.remove("popup-sidebar-active-btn");
  noChargeButton.classList.remove("popup-sidebar-active-btn");
  onlineOrdringButton.classList.remove("popup-sidebar-active-btn");

  dineInContainer.style.display = "none";
  takeAwayConatiner.style.display = "flex";
  deliveryContainer.style.display = "none";
  noChargeContainer.style.display = "none";
  onlineOrderingContainer.style.display = "none";

  scrollTop();
});

deliveryButton.addEventListener("click", () => {
  dineInButton.classList.remove("popup-sidebar-active-btn");
  takeAwayButton.classList.remove("popup-sidebar-active-btn");
  deliveryButton.classList.add("popup-sidebar-active-btn");
  noChargeButton.classList.remove("popup-sidebar-active-btn");
  onlineOrdringButton.classList.remove("popup-sidebar-active-btn");

  dineInContainer.style.display = "none";
  takeAwayConatiner.style.display = "none";
  deliveryContainer.style.display = "flex";
  noChargeContainer.style.display = "none";
  onlineOrderingContainer.style.display = "none";

  scrollTop();
});

noChargeButton.addEventListener("click", () => {
  dineInButton.classList.remove("popup-sidebar-active-btn");
  takeAwayButton.classList.remove("popup-sidebar-active-btn");
  deliveryButton.classList.remove("popup-sidebar-active-btn");
  noChargeButton.classList.add("popup-sidebar-active-btn");
  onlineOrdringButton.classList.remove("popup-sidebar-active-btn");

  dineInContainer.style.display = "none";
  takeAwayConatiner.style.display = "none";
  deliveryContainer.style.display = "none";
  noChargeContainer.style.display = "flex";
  onlineOrderingContainer.style.display = "none";

  scrollTop();
});

onlineOrdringButton.addEventListener("click", () => {
  dineInButton.classList.remove("popup-sidebar-active-btn");
  takeAwayButton.classList.remove("popup-sidebar-active-btn");
  deliveryButton.classList.remove("popup-sidebar-active-btn");
  noChargeButton.classList.remove("popup-sidebar-active-btn");
  onlineOrdringButton.classList.add("popup-sidebar-active-btn");

  dineInContainer.style.display = "none";
  takeAwayConatiner.style.display = "none";
  deliveryContainer.style.display = "none";
  noChargeContainer.style.display = "none";
  onlineOrderingContainer.style.display = "flex";

  scrollTop();
});

//activating and deactivating dinein container

const dineinConatinerActive = document.querySelector(
  "#dinein-container-active"
);
const activeDineinCheckbox = document.querySelector("#activate-dinein");

activeDineinCheckbox.addEventListener("change", () => {
  if (activeDineinCheckbox.checked) {
    dineinConatinerActive.classList.remove("disabled-div");
  } else {
    dineinConatinerActive.classList.add("disabled-div");
  }
});

//activating and deactivating takeaway container

const takeAwayConatinerActive = document.querySelector(
  "#takeaway-container-active"
);
const activetakeAwayCheckbox = document.querySelector("#activate-takeAway");

activetakeAwayCheckbox.addEventListener("change", () => {
  if (activetakeAwayCheckbox.checked) {
    takeAwayConatinerActive.classList.remove("disabled-div");
  } else {
    takeAwayConatinerActive.classList.add("disabled-div");
  }
});

//activating and deactivating delivery container

const deliveryConatinerActive = document.querySelector(
  "#delivery-container-active"
);
const deliveryCheckbox = document.querySelector("#activate-delivery");

deliveryCheckbox.addEventListener("change", () => {
  if (deliveryCheckbox.checked) {
    deliveryConatinerActive.classList.remove("disabled-div");
  } else {
    deliveryConatinerActive.classList.add("disabled-div");
  }
});

//activating and deactivating nocharge container

const nochargeConatinerActive = document.querySelector(
  "#nocharge-container-active"
);
const nochargeCheckbox = document.querySelector("#activate-nocharge");

nochargeCheckbox.addEventListener("change", () => {
  if (nochargeCheckbox.checked) {
    nochargeConatinerActive.classList.remove("disabled-div");
  } else {
    nochargeConatinerActive.classList.add("disabled-div");
  }
});

//activating and deactivating iloyalty container using iloyalty checkbox

const iLoyaltyCheckbox = document.querySelector("#activate-iloyalty");

iLoyaltyCheckbox.addEventListener("change", () => {
  if (iLoyaltyCheckbox.checked) {
    iloyaltySettingButton.classList.remove("hide");
    iloyaltySettingContainer.classList.remove("hide");
  } else {
    iloyaltySettingButton.classList.add("hide");
    iloyaltySettingContainer.classList.add("hide");
  }
});

//-------------adding data in the cash table--------------
const cashOptions = ["Cash", "Talabat Cash", "Paytm"];
const cashTables = document.querySelectorAll(".cash-table");

cashTables.forEach((table) => {
  cashOptions.forEach((option) => {
    let id = option.trim().replace(/\s+/g, "-"); // Replace spaces with hyphens for valid IDs

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <input
          id="${id}"
          class="checkbox-input"
          type="checkbox" />
      </td>
      <td>
        <label for="${id}">${option}</label>
      </td>
    `;

    table.appendChild(row);
  });
});

//-------------adding data in the bank table--------------

const bankOptions = [
  "Cheque",
  "Credit Card",
  "Talabat",
  "VISA",
  "MASTER CARD",
  "UPI",
];
const bankTables = document.querySelectorAll(".bank-table");

bankTables.forEach((table) => {
  bankOptions.forEach((option) => {
    let id = option.trim().replace(/\s+/g, "-"); // Replace spaces with hyphens for valid IDs

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <input
          id="${id}"
          class="checkbox-input"
          type="checkbox" />
      </td>
      <td>
        <label for="${id}">${option}</label>
      </td>
    `;

    table.appendChild(row);
  });
});

//adding data in the general settings table
const fields = [
  "Guest Name",
  "Phone",
  "Mobile No.",
  "Email",
  "Address",
  "Pincode",
  "City",
  "State",
  "Country",
  "Table Notification",
  "Remark",
  "Waiter",
  "Business Source",
  "Reference No.",
  "Pax",
  "Guest Registration#",
];

const generalSettingTables = document.querySelectorAll(
  ".general-settings-table"
);

generalSettingTables.forEach((table) => {
  fields.forEach((field) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${field.trim()}</td>
     <td>
      <input class="checkbox-input" type="checkbox" />
     </td>
     <td>
        <input class="checkbox-input" type="checkbox" />
     </td>
    `;

    table.appendChild(row);
  });
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#outlet-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#outlet-table tbody tr");

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
  const table = document.querySelector("#outlet-table");
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
  const tableRows = document.querySelectorAll("#outlet-table tbody tr");

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
    "#outlet-table tr input[type='checkbox']"
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
    "#outlet-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#outlet-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const outletSubmit = document.querySelector("#outlet-submit-button");

outletSubmit.addEventListener("click", () => {
  // Taking inputs
  const outletName = document.querySelector("#outlet-name").value.trim();
  const enableInventory = document.querySelector("#enable-inventory");
  const outletMenu = document.querySelector("#outlet-menu").value.trim();

  // Validation

  if (outletName === "") {
    alert("Please Enter Outlet Name");
    return;
  }

  let inventoryStatus;
  if (enableInventory.checked) {
    inventoryStatus = "Inventory Enabled";
  } else {
    inventoryStatus = "Inventory Disabled";
  }

  let menu;
  if (outletMenu === "" || outletMenu === "default") {
    menu = "-";
  } else {
    menu = outletMenu;
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#outlet-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === outletName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Outlet already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#outlet-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${outletName}</td>
    <td>OUTLET - [${inventoryStatus}]</td>
     <td>${menu}</td>

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
  .querySelector("#outlet-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#outlet-table tbody input[type='checkbox']:checked"
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
  const rowLength = document.querySelectorAll("#outlet-table tbody tr").length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();

//---------------------exporting data to excel file---------------------------------------

function exportTableToExcel() {
  const table = document.getElementById("outlet-table");

  // Convert table to a worksheet
  let ws = XLSX.utils.table_to_sheet(table);

  // Generate a unique sheet name using a timestamp
  let uniqueSheetName =
    "Sheet_" + new Date().toISOString().replace(/[:.]/g, "-");

  // Create a new workbook and append the worksheet
  let wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, uniqueSheetName);

  // Generate a unique filename
  let uniqueFileName = "Outlet-data_" + Date.now() + ".xlsx";

  // Save the file
  XLSX.writeFile(wb, uniqueFileName);
}

// Call this function when the user clicks the "Export" button
document.getElementById("export-button").addEventListener("click", function () {
  exportTableToExcel();
});
