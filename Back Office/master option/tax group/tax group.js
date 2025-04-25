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

const taxGroupOverlay = document.querySelector("#tax-group-overlay");
const taxGroupPopup = document.querySelector("#tax-group-popup");
const taxGroupForm = document.querySelector("#tax-group-form");
const taxGroupPopupAdd = document.querySelector("#tax-group-open");
const taxGroupPopupClose = document.querySelector("#tax-group-close");

function mainPopupEnable() {
  taxGroupPopup.style.visibility = "visible";
  taxGroupPopup.style.opacity = 1;

  taxGroupOverlay.style.visibility = "visible";
  taxGroupOverlay.style.opacity = 1;

  taxGroupForm.scrollTop = 0;

  //hiding the table if there are no rows in the table
  taxTableHide();
}

function mainPopupDisable() {
  taxGroupPopup.style.visibility = "hidden";
  taxGroupPopup.style.opacity = 0;

  taxGroupOverlay.style.visibility = "hidden";
  taxGroupOverlay.style.opacity = 0;

  taxGroupForm.reset();

  //clearing the table if close button is clicked
  clearTable();
}

taxGroupPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

taxGroupPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

taxGroupOverlay.addEventListener("click", () => {
  mainPopupDisable();
});

//hiding add tax table
const addTaxTable = document.querySelector("#tax-table");

function taxTableHide() {
  const addTaxLength = document.querySelectorAll("#tax-table tbody tr").length;

  if (addTaxLength === 0) {
    addTaxTable.style.display = "none";
  } else {
    addTaxTable.style.display = "";
  }
}

taxTableHide();

//clearing the data within the table
function clearTable() {
  document.querySelector("#tax-table tbody").innerHTML = "";
}

//deleting records form tax table

addTaxTable.addEventListener("click", (event) => {
  if (event.target.closest(".delete-btn")) {
    const row = event.target.closest("tr");
    if (row) {
      row.remove();
      taxTableHide();
    }
  }
});

//----------------------------- add tax popup-----------------------------

const taxOverlay = document.querySelector("#tax-overlay");
const taxPopup = document.querySelector("#tax-popup");
const taxForm = document.querySelector("#tax-form");
const taxPopupAdd = document.querySelector("#open-add-tax");
const taxPopupClose = document.querySelector("#tax-close");

function taxPopupEnable() {
  taxPopup.style.visibility = "visible";
  taxPopup.style.opacity = 1;

  taxOverlay.style.visibility = "visible";
  taxOverlay.style.opacity = 1;

  taxForm.scrollTop = 0;
}

function taxPopupDisable() {
  taxPopup.style.visibility = "hidden";
  taxPopup.style.opacity = 0;

  taxOverlay.style.visibility = "hidden";
  taxOverlay.style.opacity = 0;

  taxForm.reset();

  document.querySelector("#tax-rate-container").classList.add("hide");
  document.querySelector("#tax-amount-container").classList.add("hide");
}

taxPopupAdd.addEventListener("click", () => {
  taxPopupEnable();
});

taxPopupClose.addEventListener("click", () => {
  taxPopupDisable();
});

taxOverlay.addEventListener("click", () => {
  taxPopupDisable();
});

//tax select

const taxSelect = document.querySelector("#tax-type");
taxSelect.addEventListener("change", () => {
  const taxValue = taxSelect.value.trim();
  if (taxValue === "Percentage") {
    document.querySelector("#tax-rate-container").classList.remove("hide");
    document.querySelector("#tax-amount-container").classList.add("hide");
  } else if (taxValue === "Amount") {
    document.querySelector("#tax-rate-container").classList.add("hide");
    document.querySelector("#tax-amount-container").classList.remove("hide");
  } else {
    document.querySelector("#tax-rate-container").classList.add("hide");
    document.querySelector("#tax-amount-container").classList.add("hide");
  }
});

//populating tax type
taxes = ["GST", "IGST", "SGST", "Service Tax"];

const taxNameSelect = document.querySelector("#tax-name");
taxes.forEach((tax) => {
  const option = document.createElement("option");
  option.value = tax;
  option.textContent = tax;

  taxNameSelect.appendChild(option);
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#tax-group-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#tax-group-table tbody tr");

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
  const table = document.querySelector("#tax-group-table");
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
  const tableRows = document.querySelectorAll("#tax-group-table tbody tr");

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
    "#tax-group-table tr input[type='checkbox']"
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
    "#tax-group-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#tax-group-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const taxGroupSubmit = document.querySelector("#tax-group-submit-button");

taxGroupSubmit.addEventListener("click", () => {
  // Taking inputs
  const taxGroupName = document.querySelector("#tax-group-name").value.trim();

  // Validation
  if (taxGroupName === "") {
    alert("Please Enter Tax group Name");
    return;
  }

  //check if rows are present in the table
  const rowLength = document.querySelectorAll("#tax-table tbody tr").length;
  if (rowLength === 0) {
    alert("Please Add Atleast One Tax");
    return;
  }

  //getting values from the tax table
  let taxNameList = [];
  const taxNames = document.querySelectorAll(
    "#tax-table tbody tr td:nth-child(1)"
  );

  taxNames.forEach((name) => {
    const cleanText = name.textContent.split("(")[0].trim();
    taxNameList.push(cleanText);
  });

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#tax-group-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) =>
      cell.textContent.trim().toLowerCase() === taxGroupName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Tax Group already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#tax-group-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${taxGroupName}</td>
    <td>${taxNameList}</td>
  
     
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

  taxTableHide();
});

//-----------------------------tax submit-----------------------------

const taxSubmit = document.querySelector("#tax-submit-button");
taxSubmit.addEventListener("click", () => {
  //taking input
  const taxName = document.querySelector("#tax-name").value.trim();
  const taxType = document.querySelector("#tax-type").value.trim();
  const taxRate = document.querySelector("#tax-rate").value.trim();
  const taxAmount = document.querySelector("#tax-amount").value.trim();
  //validation

  if (taxName === "" || taxName === "default") {
    alert("Please Select a Tax");
    return;
  }

  if (taxType === "" || taxType === "default") {
    alert("Please Select a Tax Type");
    return;
  } else if (taxType === "Percentage") {
    if (taxRate === "") {
      alert("Please Enter Tax Rate");
      return;
    }
  } else {
    if (taxAmount === "") {
      alert("Please Enter Tax Amount");
      return;
    }
  }

  //populating the table
  const tbody = document.querySelector("#tax-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
    ${taxName} (${taxType === "Percentage" ? taxRate + "%" : "₹" + taxAmount})
  </td>

    <td>
      <button class="edit-btn action-buttons" title="Edit" type ="button">
        <span class="material-symbols-outlined ">edit</span>
      </button>
      <button class="delete-btn action-buttons" title="Delete" type ="button">
        <span class="material-symbols-outlined ">delete</span>
      </button>
    </td>
 `;

  tbody.appendChild(row);

  taxPopupDisable();

  taxTableHide();
});

//-----------------------------delete function for all delete buttons-----------------------------

document
  .querySelector("#tax-group-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#tax-group-table tbody input[type='checkbox']:checked"
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
    "#tax-group-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
