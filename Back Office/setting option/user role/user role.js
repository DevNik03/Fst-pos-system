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

const userRoleOverlay = document.querySelector("#user-role-overlay");
const userRolePopup = document.querySelector("#user-role-popup");
const userRoleForm = document.querySelector("#user-role-form");
const userRolePopupAdd = document.querySelector("#user-role-open");
const userRolePopupClose = document.querySelector("#user-role-close");

function mainPopupEnable() {
  userRolePopup.style.visibility = "visible";
  userRolePopup.style.opacity = 1;

  userRoleOverlay.style.visibility = "visible";
  userRoleOverlay.style.opacity = 1;

  userRoleForm.scrollTop = 0;

  //to reset the searchbar
  privilegeSearching();
  reportSearching();
  orderSummarySearching();
}

function mainPopupDisable() {
  userRolePopup.style.visibility = "hidden";
  userRolePopup.style.opacity = 0;

  userRoleOverlay.style.visibility = "hidden";
  userRoleOverlay.style.opacity = 0;

  userRoleForm.reset();

  //opening privilege container by default when the popup opens
  privilegeButton.classList.add("active-filter-btn");
  reportsButton.classList.remove("active-filter-btn");
  orderSummaryButton.classList.remove("active-filter-btn");

  privilegeContainer.style.display = "grid";
  reportsContainer.style.display = "none";
  orderSummaryContainer.style.display = "none";
}

userRolePopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

userRolePopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

//switching between privileges,reports and order summary

//buttons
const privilegeButton = document.querySelector("#privilege-button");
const reportsButton = document.querySelector("#reports-button");
const orderSummaryButton = document.querySelector("#order-summary-button");

//conatainers
const privilegeContainer = document.querySelector("#privilege-container");
const reportsContainer = document.querySelector("#reports-container");
const orderSummaryContainer = document.querySelector(
  "#order-summary-container"
);

privilegeButton.addEventListener("click", () => {
  privilegeButton.classList.add("active-filter-btn");
  reportsButton.classList.remove("active-filter-btn");
  orderSummaryButton.classList.remove("active-filter-btn");

  privilegeContainer.style.display = "grid";
  reportsContainer.style.display = "none";
  orderSummaryContainer.style.display = "none";
});

reportsButton.addEventListener("click", () => {
  privilegeButton.classList.remove("active-filter-btn");
  reportsButton.classList.add("active-filter-btn");
  orderSummaryButton.classList.remove("active-filter-btn");

  privilegeContainer.style.display = "none";
  reportsContainer.style.display = "grid";
  orderSummaryContainer.style.display = "none";
});

orderSummaryButton.addEventListener("click", () => {
  privilegeButton.classList.remove("active-filter-btn");
  reportsButton.classList.remove("active-filter-btn");
  orderSummaryButton.classList.add("active-filter-btn");

  privilegeContainer.style.display = "none";
  reportsContainer.style.display = "none";
  orderSummaryContainer.style.display = "grid";
});

// privilege search

const privilegeSearch = document.querySelector("#Privilege-search");

privilegeSearch.addEventListener("input", () => {
  privilegeSearching();
});

function privilegeSearching() {
  const searchValue = privilegeSearch.value.trim().toLowerCase();
  const container = document.querySelector("#privilege-container");
  const categories = container.querySelectorAll(".categories");
  let anyMatchFound = false; // Track if any privilege is found

  categories.forEach((category) => {
    const heading = category.querySelector(".popup-heading"); // Get category heading
    const lists = category.querySelectorAll("li");
    let categoryHasMatch = false; // Track if this category has at least one match

    lists.forEach((list) => {
      const label = list.querySelector("label"); // Get the label inside <li>

      if (label.textContent.trim().toLowerCase().includes(searchValue)) {
        list.style.display = "flex"; // Show matching privilege
        categoryHasMatch = true;
      } else {
        list.style.display = "none"; // Hide non-matching privilege
      }
    });

    // Show category and heading if at least one privilege matches
    if (categoryHasMatch) {
      category.style.display = "flex"; // Make sure category is visible
      heading.style.display = "flex"; // Ensure heading is visible
      anyMatchFound = true;
    } else {
      category.style.display = "none"; // Hide entire category
    }
  });

  // Handle "No Privilege Found" message visibility
  const noPrivilegeMsg = document.querySelector("#no-privilege-found");
  noPrivilegeMsg.style.display = anyMatchFound ? "none" : "flex";
}

// reports search

const reportSearch = document.querySelector("#reports-search");

reportSearch.addEventListener("input", () => {
  reportSearching();
});

function reportSearching() {
  const searchValue = reportSearch.value.trim().toLowerCase();
  const container = document.querySelector("#reports-container");
  const categories = container.querySelectorAll(".categories");
  let anyMatchFound = false;

  categories.forEach((category) => {
    const heading = category.querySelector(".popup-heading"); // Get category heading
    const lists = category.querySelectorAll("li");
    let categoryHasMatch = false; // Track if this category has at least one match

    lists.forEach((list) => {
      const label = list.querySelector("label"); // Get the label inside <li>

      if (label.textContent.trim().toLowerCase().includes(searchValue)) {
        list.style.display = "flex"; // Show matching value
        categoryHasMatch = true;
      } else {
        list.style.display = "none"; // Hide non-matching value
      }
    });

    // Show category and heading if at least one value matches
    if (categoryHasMatch) {
      category.style.display = "flex"; // Make sure category is visible
      heading.style.display = "flex"; // Ensure heading is visible
      anyMatchFound = true;
    } else {
      category.style.display = "none"; // Hide entire category
    }
  });

  // Handle "Not Found" message visibility
  const noPrivilegeMsg = document.querySelector("#no-reports-found");
  noPrivilegeMsg.style.display = anyMatchFound ? "none" : "flex";
}

// order summary search

const ordrSummarySearch = document.querySelector("#order-summary-search");

ordrSummarySearch.addEventListener("input", () => {
  orderSummarySearching();
});

function orderSummarySearching() {
  const searchValue = ordrSummarySearch.value.trim().toLowerCase();
  const container = document.querySelector("#order-summary-container");
  const categories = container.querySelectorAll(".categories");
  let anyMatchFound = false;

  categories.forEach((category) => {
    const heading = category.querySelector(".popup-heading"); // Get category heading
    const lists = category.querySelectorAll("li");
    let categoryHasMatch = false; // Track if this category has at least one match

    lists.forEach((list) => {
      const label = list.querySelector("label"); // Get the label inside <li>

      if (label.textContent.trim().toLowerCase().includes(searchValue)) {
        list.style.display = "flex"; // Show matching value
        categoryHasMatch = true;
      } else {
        list.style.display = "none"; // Hide non-matching value
      }
    });

    // Show category and heading if at least one value matches
    if (categoryHasMatch) {
      category.style.display = "flex"; // Make sure category is visible
      heading.style.display = "flex"; // Ensure heading is visible
      anyMatchFound = true;
    } else {
      category.style.display = "none"; // Hide entire category
    }
  });

  // Handle "Not Found" message visibility
  const noPrivilegeMsg = document.querySelector("#no-order-found");
  noPrivilegeMsg.style.display = anyMatchFound ? "none" : "flex";
}

//-------------------------------------------------------------------------------------------

//select all list items when heading checkbox is checked

const selectAllHeadings = document.querySelectorAll(".select-all");

selectAllHeadings.forEach(function (headingCheckbox) {
  headingCheckbox.addEventListener("change", function () {
    const container = this.closest(".categories"); // Find the parent container
    const checkboxes = container.querySelectorAll("ul input[type='checkbox']"); // Get all checkboxes in the list

    checkboxes.forEach((checkbox) => {
      checkbox.checked = this.checked; // Set all checkboxes based on "Select All"
    });
  });
});

//-----populating a little data----------------------------------------------

//back office privilege

const backOfficePrivileges = [
  "Menu",
  "Menu Group",
  "Menu Subgroup",
  "Item",
  "Item Group",
];

const backOfficeList = document.querySelector("#back-office-list");

backOfficePrivileges.forEach((privilege) => {
  let id = privilege.trim().toLowerCase();

  const list = document.createElement("li");
  list.setAttribute("class", "popup-list");

  list.innerHTML = `
    <input id = "${id}" class = "checkbox-input" type="checkbox" />
    <label for = "${id}">${privilege}</label>
    `;

  backOfficeList.appendChild(list);
});

// configuration privilege

const configurationPrivileges = [
  "Access To Back Office",
  "Access To Front Office",
  "Access Inventory",
];

const configurationList = document.querySelector("#configuration-list");

configurationPrivileges.forEach((privilege) => {
  let id = privilege.trim().toLowerCase();

  const list = document.createElement("li");
  list.setAttribute("class", "popup-list");

  list.innerHTML = `
      <input id = "${id}" class = "checkbox-input" type="checkbox" />
      <label for = "${id}">${privilege}</label>
      `;

  configurationList.appendChild(list);
});

//front operation privilege

const frontOperationPrivileges = [
  "Access To Back Office",
  "Access To Front Office",
  "Access Inventory",
];

const frontOperationList = document.querySelector("#front-operation-list");

frontOperationPrivileges.forEach((privilege) => {
  let id = privilege.trim().toLowerCase();

  const list = document.createElement("li");
  list.setAttribute("class", "popup-list");

  list.innerHTML = `
        <input id = "${id}" class = "checkbox-input" type="checkbox" />
        <label for = "${id}">${privilege}</label>
        `;

  frontOperationList.appendChild(list);
});

//front office privileges

const frontOfficePrivileges = [
  "MDashboard",
  "Dine In",
  "Take Away",
  "Order Summary",
  "Reports",
];

const frontOfficeList = document.querySelector("#front-office-list");

frontOfficePrivileges.forEach((privilege) => {
  let id = privilege.trim().toLowerCase();

  const list = document.createElement("li");
  list.setAttribute("class", "popup-list");

  list.innerHTML = `
      <input id = "${id}" class = "checkbox-input" type="checkbox" />
      <label for = "${id}">${privilege}</label>
      `;

  frontOfficeList.appendChild(list);
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#user-role-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#user-role-table tbody tr");

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
  const table = document.querySelector("#user-role-table");
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
  const tableRows = document.querySelectorAll("#user-role-table tbody tr");

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
    "#user-role-table tr input[type='checkbox']"
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
    "#user-role-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#user-role-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const userRoleSubmit = document.querySelector("#user-role-submit-button");

userRoleSubmit.addEventListener("click", () => {
  // Taking inputs
  const roleName = document.querySelector("#role-name").value.trim();

  const roleDescription = document
    .querySelector("#role-description")
    .value.trim();

  // Validation

  if (roleName === "") {
    alert("Please Enter a Name");
    return;
  }

  let description;
  if (roleDescription === "") {
    description = "";
  } else {
    description = roleDescription;
  }

  //checking if atleast one privilege is checked

  const container = document.querySelector("#privilege-container");
  const checked = container.querySelectorAll(
    "input[type = 'checkbox']:checked"
  ).length;

  if (checked === 0) {
    alert("Please Select Atleast One Privilege");
    return;
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#user-role-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === roleName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Role Already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#user-role-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${roleName}</td>
    <td>${description}</td>
    
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
  .querySelector("#user-role-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#user-role-table tbody input[type='checkbox']:checked"
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
    "#user-role-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
