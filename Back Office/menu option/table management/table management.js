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
// opening floor popup

const floorOverlay = document.querySelector("#floors-overlay");
const floorPopup = document.querySelector("#floors-popup");
const floorForm = document.querySelector("#floors-form");
const floorPopupAdd = document.querySelector("#add-floor-button");
const floorPopupClose = document.querySelector("#floors-close");

function floorPopupEnable() {
  floorPopup.style.visibility = "visible";
  floorPopup.style.opacity = 1;

  floorOverlay.style.visibility = "visible";
  floorOverlay.style.opacity = 1;

  floorForm.scrollTop = 0;
}

function floorPopupDisable() {
  floorPopup.style.visibility = "hidden";
  floorPopup.style.opacity = 0;

  floorOverlay.style.visibility = "hidden";
  floorOverlay.style.opacity = 0;

  floorForm.reset();
}

floorPopupAdd.addEventListener("click", () => {
  floorPopupEnable();
});

floorPopupClose.addEventListener("click", () => {
  floorPopupDisable();
});

// opening table popup

const tableOverlay = document.querySelector("#tables-overlay");
const tablePopup = document.querySelector("#tables-popup");
const tableForm = document.querySelector("#tables-form");
const tablePopupAdd = document.querySelector("#add-table-button");
const tablePopupClose = document.querySelector("#tables-close");

function tablePopupEnable() {
  tablePopup.style.visibility = "visible";
  tablePopup.style.opacity = 1;

  tableOverlay.style.visibility = "visible";
  tableOverlay.style.opacity = 1;

  tableForm.scrollTop = 0;
}

function tablePopupDisable() {
  tablePopup.style.visibility = "hidden";
  tablePopup.style.opacity = 0;

  tableOverlay.style.visibility = "hidden";
  tableOverlay.style.opacity = 0;

  tableForm.reset();
}

tablePopupAdd.addEventListener("click", () => {
  tablePopupEnable();
});

tablePopupClose.addEventListener("click", () => {
  tablePopupDisable();
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#template-category-search");
const mainContainers = document.querySelectorAll(".main-container");

mainSearchBar.addEventListener("input", mainSearch);

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();

  mainContainers.forEach((container) => {
    const tableRows = container.querySelectorAll(".main-table tbody tr");
    const noRecordsMessage = container.querySelector(".no-records");

    let matchFound = false;

    tableRows.forEach((row) => {
      const rowText = row.textContent.toLowerCase().trim();
      const isMatch = rowText.includes(searchValue);

      row.style.display = isMatch ? "" : "none";
      if (isMatch) matchFound = true;
    });

    // Show or hide "No Records Found" for the current container
    noRecordsMessage.style.display =
      matchFound || searchValue === "" ? "none" : "flex";
  });
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

//populating tables
const restaurantData = {
  outlets: [
    {
      outletName: "Downtown Deli",
      floors: [
        {
          floorName: "Main Dining Hall",
          tables: ["Table A1", "Table A2", "Table A3"],
        },
        {
          floorName: "Upper Mezzanine",
          tables: ["Table B1", "Table B2"],
        },
      ],
    },
    {
      outletName: "Seaside Grill",
      floors: [
        {
          floorName: "Ocean View Terrace",
          tables: ["Table T1", "Table T2"],
        },
        {
          floorName: "Indoor Lounge",
          tables: ["Table L1", "Table L2", "Table L3"],
        },
        {
          floorName: "Rooftop Deck",
          tables: ["Table R1", "Table R2"],
        },
      ],
    },
    {
      outletName: "Mountain Retreat",
      floors: [
        {
          floorName: "Ground Level",
          tables: ["Table G1", "Table G2", "Table G3", "Table G4"],
        },
        {
          floorName: "Balcony Seating",
          tables: ["Table B1", "Table B2"],
        },
      ],
    },
  ],
};

// DOM Elements
const outletTable = document.querySelector("#outlets-table tbody");
const floorTable = document.querySelector("#floors-table tbody");
const tableTable = document.querySelector("#tables-table tbody");

const outletContainer = document.querySelector("#outlets-container");
const floorContainer = document.querySelector("#floors-container");
const tableContainer = document.querySelector("#tables-container");

const breadcrumbHeader = document.querySelector(".breadcrumb");

const addFloorButton = document.querySelector("#add-floor-button");
const addTableButton = document.querySelector("#add-table-button");

let selectedOutlet = "";
let selectedFloor = "";

// Populate outlet table dynamically
restaurantData.outlets.forEach((outlet) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${outlet.outletName.trim()}</td>`;
  outletTable.appendChild(row);

  // Add click event listener for each outlet row
  row.addEventListener("click", () => {
    selectedOutlet = outlet.outletName; // Save selected outlet name
    selectedFloor = ""; // Reset floor selection

    updateBreadcrumb("floor"); // Update breadcrumb

    // Clear and populate the floor table dynamically
    floorTable.innerHTML = ""; // Clear previous floors
    outlet.floors.forEach((floor) => {
      const floorRow = document.createElement("tr");
      floorRow.innerHTML = `
        <td><input type="checkbox" class="row-checkbox" /></td>
        <td class="floor-name-cell">${floor.floorName.trim()}</td>
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
      floorTable.appendChild(floorRow);

      // Add click event listener only to the floor name <td> cell
      floorRow
        .querySelector(".floor-name-cell")
        .addEventListener("click", () => {
          selectedFloor = floor.floorName; // Save selected floor name
          updateBreadcrumb("table"); // Update breadcrumb for table navigation

          // Clear and populate the table dynamically for the selected floor
          tableTable.innerHTML = ""; // Clear previous tables
          floor.tables.forEach((table) => {
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
            <td><input type="checkbox" class="row-checkbox" /></td>
            <td class="table-name-cell">${table.trim()}</td>
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
            tableTable.appendChild(tableRow);

            // Add click event listener only to the table name <td> cell
            tableRow
              .querySelector(".table-name-cell")
              .addEventListener("click", () => {
                outletContainer.classList.add("hide");
                floorContainer.classList.add("hide");
                tableContainer.classList.remove("hide");

                addFloorButton.classList.add("hide");
                addTableButton.classList.remove("hide");
              });
          });

          outletContainer.classList.add("hide");
          floorContainer.classList.add("hide");
          tableContainer.classList.remove("hide");

          addFloorButton.classList.add("hide");
          addTableButton.classList.remove("hide");
        });
    });

    outletContainer.classList.add("hide");
    floorContainer.classList.remove("hide");
    tableContainer.classList.add("hide");

    addFloorButton.classList.remove("hide");
    addTableButton.classList.add("hide");
  });
});

// Function to rebuild the breadcrumb dynamically
function updateBreadcrumb(level) {
  breadcrumbHeader.innerHTML = ""; // Reset breadcrumb

  const outletSpan = document.createElement("span");
  outletSpan.textContent = selectedOutlet || "Select Outlet";
  outletSpan.classList.add("outlet-span");
  breadcrumbHeader.appendChild(outletSpan);

  if (level === "floor" || level === "table") {
    const floorSpan = document.createElement("span");
    floorSpan.textContent = selectedFloor || "Select Floor";
    floorSpan.classList.add("floor-span");
    breadcrumbHeader.appendChild(floorSpan);
  }

  if (level === "table") {
    const tableSpan = document.createElement("span");
    tableSpan.textContent = "Table List";
    breadcrumbHeader.appendChild(tableSpan);
  }
}

// Breadcrumb navigation using event delegation
breadcrumbHeader.addEventListener("click", (e) => {
  const span = e.target;
  if (span.tagName === "SPAN") {
    if (span.classList.contains("outlet-span")) {
      selectedOutlet = "";
      updateBreadcrumb("outlet");

      outletContainer.classList.remove("hide");
      floorContainer.classList.add("hide");
      tableContainer.classList.add("hide");

      addFloorButton.classList.add("hide");
      addTableButton.classList.add("hide");
    } else if (span.classList.contains("floor-span")) {
      selectedFloor = "";
      updateBreadcrumb("floor");

      outletContainer.classList.add("hide");
      floorContainer.classList.remove("hide");
      tableContainer.classList.add("hide");

      addFloorButton.classList.remove("hide");
      addTableButton.classList.add("hide");
    }
  }
});

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
  const tables = document.querySelectorAll(".main-table"); // Corrected to loop through all tables

  tables.forEach((table) => {
    const headers = table.querySelectorAll("th"); // Find headers for each table

    headers.forEach((header, columnIndex) => {
      header.addEventListener("click", () => {
        sortTable(table, columnIndex); // Sort the table when header is clicked
      });
    });
  });

  function sortTable(table, columnIndex) {
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr")); // Convert rows to an array for sorting
    const isAscending = table.dataset.sortOrder === "asc";

    // Sorting based on text content in each cell of the selected column
    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent.trim().toLowerCase();
      const cellB = rowB.children[columnIndex].textContent.trim().toLowerCase();

      return isAscending
        ? cellA.localeCompare(cellB, undefined, { numeric: true })
        : cellB.localeCompare(cellA, undefined, { numeric: true });
    });

    table.dataset.sortOrder = isAscending ? "desc" : "asc"; // Toggle sort order

    tbody.innerHTML = ""; // Clear table body
    rows.forEach((row) => tbody.appendChild(row)); // Append sorted rows back to the table
  }
});

//-----------------------------Select All Checkbox-----------------------------
const selectAllCheckboxes = document.querySelectorAll(".select-all-checkbox");

selectAllCheckboxes.forEach((selectAllCheckbox) => {
  selectAllCheckbox.addEventListener("change", () => {
    const container = selectAllCheckbox.closest(".main-container");
    const table = container.querySelector(".main-table");
    const tableRows = table.querySelectorAll("tbody tr");

    tableRows.forEach((row) => {
      const rowCheckbox = row.querySelector("input[type='checkbox']");
      if (rowCheckbox) {
        rowCheckbox.checked = selectAllCheckbox.checked;
      }
    });

    deleteAllEnable(container); // Only for the specific container
    noDataDisplay(container); // Handle "No data" display for this container
  });
});

//----------------------------- Delete All Button Display -----------------------------

function deleteAllEnable(container) {
  const checkboxes = container.querySelectorAll(
    ".main-table tbody input[type='checkbox']"
  );
  const anyChecked = Array.from(checkboxes).some((box) => box.checked);

  if (deleteAllButton) {
    deleteAllButton.style.visibility = anyChecked ? "visible" : "hidden";
    deleteAllButton.style.opacity = anyChecked ? 1 : 0;
  }
}

//----------------------------- Confirm Delete Button -----------------------------
const deleteAllButton = document.querySelector(".delete-all-button");
deleteAllButton.addEventListener("click", () => {
  warningPopupEnable("delete");
  document.querySelector("#delete-confirm").addEventListener("click", () => {
    deleteRecords(container);
    closeWarning();
  });
});

//----------------------------- Delete Records Function -----------------------------
function deleteRecords(container) {
  const table = container.querySelector(".main-table");
  const checkedBoxes = table.querySelectorAll(
    "tbody input[type='checkbox']:checked"
  );

  checkedBoxes.forEach((checkbox) => {
    const row = checkbox.closest("tr");
    if (row) row.remove();
  });

  deleteAllEnable(container); // Update Delete All Button for this container

  // Uncheck the "Select All" checkbox in this table
  const selectAllCheckbox = container.querySelector(".select-all-checkbox");
  if (selectAllCheckbox) {
    selectAllCheckbox.checked = false;
  }

  noDataDisplay(container); // Handle "No data" display for this container
  recordCount(container); // Update record count for this container
}

//----------------------------- No Data Display -----------------------------
function noDataDisplay(container) {
  const rows = container.querySelectorAll(".main-table tbody tr");
  const noDataMessage = container.querySelector("#no-data");

  if (rows.length === 0 && noDataMessage) {
    noDataMessage.style.display = "flex";
  } else if (noDataMessage) {
    noDataMessage.style.display = "none";
  }
}

//----------------------------- Delete Button in Each Row -----------------------------
document.querySelectorAll(".main-table tbody").forEach((table) => {
  table.addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const container = event.target.closest(".main-container");
      const checkedBoxes = container.querySelectorAll(
        ".main-table tbody input[type='checkbox']:checked"
      ).length;

      if (checkedBoxes === 0) {
        alert("Select the record you want to delete");
      } else {
        deleteRecords(container); // Delete records in the correct container
      }
      mainSearch();
    }
  });
});

//----------------------------- Record Count -----------------------------
function recordCount(container) {
  const rowLength = container.querySelectorAll(".main-table tbody tr").length;
  const recordCountDisplay = container.querySelector("#record-count");
  if (recordCountDisplay) {
    recordCountDisplay.textContent = rowLength;
  }
}

//----------------------------- adding records to table-----------------------------

//---------------------------floor submit button---------------------------------------

const floorSubmit = document.querySelector("#floors-submit-button");

floorSubmit.addEventListener("click", () => {
  // Taking inputs

  const floorName = document.querySelector("#floors-name").value.trim();
  const outletName = document.querySelector("#floors-outlet").value.trim();

  // Validation

  if (floorName === "") {
    alert("Please Enter a Name");
    return;
  }

  if (outletName === "" || outletName === "default") {
    alert("Please Select an Outlet");
    return;
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#floors-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === floorName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Template Already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#floors-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${floorName}</td>
   
    <td>
      <button class="active-button action-buttons" title="Status">
        <span class="material-symbols-outlined small-icon">radio_button_checked</span>
      </button>
      <button class="edit-btn action-buttons" title="Edit">
        <span class="material-symbols-outlined small-icon">edit</span>
      </button>
      <button class="delete-btn action-buttons" title="Delete">
        <span class="material-symbols-outlined small-icon">delete</span>
      </button>
    </td>
  `;
  tableBody.appendChild(row);

  floorPopupDisable();
  deleteAllEnable();
  recordCount();
  noDataDisplay();
});

//---------------------------floor submit button---------------------------------------

const tableSubmit = document.querySelector("#tables-submit-button");

tableSubmit.addEventListener("click", () => {
  // Taking inputs

  const tableName = document.querySelector("#table-name").value.trim();
  const tableShortCode = document
    .querySelector("#table-shortcode")
    .value.trim();
  const tableCapacity = document.querySelector("#table-capacity").value.trim();
  const tableFloor = document.querySelector("#table-floors").value.trim();

  // Validation

  if (tableName === "") {
    alert("Please Enter a Name");
    return;
  }

  if (tableShortCode === "") {
    alert("Please Enter a Short Code");
    return;
  }

  if (tableCapacity === "") {
    alert("Please Enter the Capacity");
    return;
  }

  if (tableFloor === "" || tableFloor === "default") {
    alert("Please Select a Floor");
    return;
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#tables-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === tableName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Template Already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#tables-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${tableName}</td>
   
    <td>
      <button class="active-button action-buttons" title="Status">
        <span class="material-symbols-outlined small-icon">radio_button_checked</span>
      </button>
      <button class="edit-btn action-buttons" title="Edit">
        <span class="material-symbols-outlined small-icon">edit</span>
      </button>
      <button class="delete-btn action-buttons" title="Delete">
        <span class="material-symbols-outlined small-icon">delete</span>
      </button>
    </td>
  `;
  tableBody.appendChild(row);

  tablePopupDisable();
  deleteAllEnable();
  recordCount();
  noDataDisplay();
});
