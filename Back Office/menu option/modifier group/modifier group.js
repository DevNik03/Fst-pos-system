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

const modifierOverlay = document.querySelector("#modifier-overlay");
const modifierPopup = document.querySelector("#modifier-popup");
const modifierForm = document.querySelector("#modifier-form");
const modifierPopupAdd = document.querySelector("#modifier-open");
const modifierPopupClose = document.querySelector("#modifier-close");

function mainPopupEnable() {
  modifierPopup.style.visibility = "visible";
  modifierPopup.style.opacity = 1;

  modifierOverlay.style.visibility = "visible";
  modifierOverlay.style.opacity = 1;

  modifierForm.scrollTop = 0;
}

function mainPopupDisable() {
  modifierPopup.style.visibility = "hidden";
  modifierPopup.style.opacity = 0;

  modifierOverlay.style.visibility = "hidden";
  modifierOverlay.style.opacity = 0;

  modifierForm.reset();
}

modifierPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

modifierPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

modifierOverlay.addEventListener("click", () => {
  mainPopupDisable();
});

// add items popup

const itemsOverlay = document.querySelector("#items-overlay");
const itemsPopup = document.querySelector("#items-popup");
const itemsForm = document.querySelector("#items-form");
const itemsPopupAdd = document.querySelector("#add-item-button");
const itemsPopupClose = document.querySelector("#items-close");

function itemsPopupEnable() {
  itemsPopup.style.visibility = "visible";
  itemsPopup.style.opacity = 1;

  itemsOverlay.style.visibility = "visible";
  itemsOverlay.style.opacity = 1;

  itemsForm.scrollTop = 0;
}

function itemsPopupDisable() {
  itemsPopup.style.visibility = "hidden";
  itemsPopup.style.opacity = 0;

  itemsOverlay.style.visibility = "hidden";
  itemsOverlay.style.opacity = 0;

  itemsForm.reset();
}

itemsPopupAdd.addEventListener("click", () => {
  itemsPopupEnable();
});

itemsPopupClose.addEventListener("click", () => {
  itemsPopupDisable();
});

itemsOverlay.addEventListener("click", () => {
  itemsPopupDisable();
});

//hide item table

const itemsTable = document.querySelector("#items-table tbody");
const itemsTableContainer = document.querySelector("#items-container");
const choicesTable = document.querySelector("#choices-table tbody");
const choicesTableContainer = document.querySelector("#choices-container");

function itemTableVisible() {
  const itemLength = itemsTable.querySelectorAll("tr").length;
  if (itemLength === 0) {
    itemsTableContainer.classList.add("hide");
  } else {
    itemsTableContainer.classList.remove("hide");
  }
}

itemTableVisible();

// hide choice table

function choicesTableVisible() {
  const choiceLength = choicesTable.querySelectorAll("tr").length;
  if (choiceLength === 0) {
    choicesTableContainer.classList.add("hide");
  } else {
    choicesTableContainer.classList.remove("hide");
  }
}

choicesTableVisible();

//---------------------- choices popup-----------------------------

const choicesOverlay = document.querySelector("#choices-overlay");
const choicesPopup = document.querySelector("#choices-popup");
const choicesForm = document.querySelector("#choices-form");
const choicesPopupAdd = document.querySelector("#add-choice-button");
const choicesPopupClose = document.querySelector("#choices-close");

function choicesPopupEnable() {
  choicesPopup.style.visibility = "visible";
  choicesPopup.style.opacity = 1;

  choicesOverlay.style.visibility = "visible";
  choicesOverlay.style.opacity = 1;

  choicesForm.scrollTop = 0;
}

function choicesPopupDisable() {
  choicesPopup.style.visibility = "hidden";
  choicesPopup.style.opacity = 0;

  choicesOverlay.style.visibility = "hidden";
  choicesOverlay.style.opacity = 0;

  choicesForm.reset();
}

choicesPopupAdd.addEventListener("click", () => {
  choicesPopupEnable();
});

choicesPopupClose.addEventListener("click", () => {
  choicesPopupDisable();
});

choicesOverlay.addEventListener("click", () => {
  choicesPopupDisable();
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#modifier-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#modifier-table tbody tr");

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
  const table = document.querySelector("#modifier-table");
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
  const tableRows = document.querySelectorAll("#modifier-table tbody tr");

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
    "#modifier-table tr input[type='checkbox']"
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
    "#modifier-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#modifier-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const modifierSubmit = document.querySelector("#modifier-submit-button");

modifierSubmit.addEventListener("click", () => {
  // Taking inputs

  const Name = document.querySelector("#modifier-name").value.trim();

  // Validation

  if (Name === "") {
    alert("Please Enter Modifier Group Name");
    return;
  }

  const itemsLength = document.querySelectorAll("#items-table tbody tr").length;
  if (itemsLength === 0) {
    alert("Please Select Atleast One Item");
    return;
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#modifier-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === Name.toLowerCase()
  );

  if (isDuplicate) {
    alert("Modifier Group already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#modifier-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${Name}</td>
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

//--------------------------------items submit----------------------------------
const itemSubmit = document.querySelector("#items-submit-button");
itemSubmit.addEventListener("click", () => {
  //taking input

  const itemSelect = document.querySelector("#select-item").value.trim();

  //validation

  if (itemSelect === "" || itemSelect === "default") {
    alert("Please Select An Item");
    return;
  }

  //checking for duplicates

  //populating table

  const tbody = document.querySelector("#items-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${itemSelect}</td>
   
    <td>
      <button class="edit-btn action-buttons" title="Edit" type = "button">
        <span class="material-symbols-outlined medium-icon">edit</span>
      </button>
      <button class="del-btn action-buttons" title="Delete" type = "button">
        <span class="material-symbols-outlined medium-icon">delete</span>
      </button>
    </td>
  `;

  tbody.appendChild(row);

  itemsPopupDisable();
  itemTableVisible();
});

// Event delegation for deleting items from the Items table
document.querySelector("#items-table").addEventListener("click", (event) => {
  if (event.target.closest(".del-btn")) {
    event.target.closest("tr").remove();
    itemTableVisible();
  }
});
//--------------------------------choices submit----------------------------------

const choiceSubmit = document.querySelector("#choices-submit-button");
choiceSubmit.addEventListener("click", () => {
  //taking input

  const choiceName = document.querySelector("#choice-name").value.trim();
  const choiceShort = document.querySelector("#choice-short-name").value.trim();

  //validation

  if (choiceName === "") {
    alert("Please Enter Choice Name");
    return;
  }

  if (choiceShort === "") {
    alert("Please Enter Short Name");
    return;
  }

  //checking for duplicates

  //populating table

  const tbody = document.querySelector("#choices-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${choiceName}</td>
   
    <td>
      <button class="edit-btn action-buttons" title="Edit" type = "button">
        <span class="material-symbols-outlined medium-icon">edit</span>
      </button>
      <button class="del-btn action-buttons" title="Delete" type = "button">
        <span class="material-symbols-outlined medium-icon">delete</span>
      </button>
    </td>
  `;

  tbody.appendChild(row);

  choicesPopupDisable();
  choicesTableVisible();
});

// Event delegation for deleting choices from the Choices table
document.querySelector("#choices-table").addEventListener("click", (event) => {
  if (event.target.closest(".del-btn")) {
    event.target.closest("tr").remove();
    choicesTableVisible();
  }
});

//-----------------------------delete function for all delete buttons-----------------------------

document
  .querySelector("#modifier-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#modifier-table tbody input[type='checkbox']:checked"
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
    "#modifier-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
