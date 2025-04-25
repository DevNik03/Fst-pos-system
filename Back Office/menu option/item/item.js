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

const itemOverlay = document.querySelector("#item-overlay");
const itemPopup = document.querySelector("#item-popup");
const itemForm = document.querySelector("#item-form");
const itemPopupAdd = document.querySelector("#item-open");
const itemPopupClose = document.querySelector("#item-close");

function mainPopupEnable() {
  itemPopup.style.visibility = "visible";
  itemPopup.style.opacity = 1;

  itemOverlay.style.visibility = "visible";
  itemOverlay.style.opacity = 1;

  itemForm.scrollTop = 0;

  //default rate container scrolls to top when form opens
  document.querySelector("#default-rate-container").scrollTop = 0;

  menuTableDisable();
  newRateCount();
  modifierTableDisable();
}

function mainPopupDisable() {
  itemPopup.style.visibility = "hidden";
  itemPopup.style.opacity = 0;

  itemOverlay.style.visibility = "hidden";
  itemOverlay.style.opacity = 0;

  itemForm.reset();

  //clearing menu table
  menuTableClear();

  // clearing rate table
  rateTableClear();

  //clearing modifier table
  modifierTableClear();

  //make default rate as active and deactivate new rate container
  defaultRateButton.classList.add("active-filter-btn");
  newRateButton.classList.remove("active-filter-btn");

  defaultRateContainer.classList.remove("hide");
  newRateContainer.classList.add("hide");

  //disabling all advance config options when the popup opens
  advanceOptions.forEach((option) => {
    option.classList.add("hide");
  });

  // unchecking the advanced comfig checkbox as it is outside the form
  advanceConfigCheck.checked = false;

  //hide ask name container
  askItemContainer.classList.add("hide");

  //hide sold by weight container
  soldByWeight.classList.add("hide");

  //modifier container should be visible initially
  modifierContainer.classList.remove("hide");

  //hiding min and max price
  minPriceOptions.forEach((option) => option.classList.add("hide"));
  maxPriceOptions.forEach((option) => option.classList.add("hide"));
  mandatoryPrices.forEach((price) => price.classList.remove("hide"));

  // making auto apply same discount to the modifer container visible initially
  applySameDiscContainers.forEach((container) => {
    container.classList.remove("hide");
  });
}

itemPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

itemPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

itemOverlay.addEventListener("click", () => {
  mainPopupDisable();
});

//enable advance configuration
const advanceConfigCheck = document.querySelector("#advance-config");
const advanceOptions = document.querySelectorAll(".advance-option");
advanceConfigCheck.addEventListener("change", () => {
  if (advanceConfigCheck.checked) {
    advanceOptions.forEach((option) => {
      option.classList.remove("hide");
    });

    //scrolling the order type table to top
    document.querySelector("#order-type-table").scrollTop = 0;
  } else {
    advanceOptions.forEach((option) => {
      option.classList.add("hide");
    });
  }
});

//open item check and disabling ask item container

const openItemCheckbox = document.querySelector("#open-item");
const askItemContainer = document.querySelector("#ask-name-container");

openItemCheckbox.addEventListener("change", () => {
  if (openItemCheckbox.checked) {
    askItemContainer.classList.remove("hide");
  } else {
    askItemContainer.classList.add("hide");
  }
});

// ask quantity check and disabling  sold by weight container
const askQuantityCheck = document.querySelector("#ask-quantity");
const soldByWeight = document.querySelector("#sold-by-weight-container");

askQuantityCheck.addEventListener("change", () => {
  if (askQuantityCheck.checked) {
    soldByWeight.classList.remove("hide");
  } else {
    soldByWeight.classList.add("hide");
  }
});

//disabling the menu table if no menu has been added

function menuTableDisable() {
  const menuTableContainer = document.querySelector("#menu-container");
  const rowLength = document.querySelectorAll("#menu-table tbody tr").length;

  if (rowLength === 0) {
    menuTableContainer.style.display = "none";
  } else {
    menuTableContainer.style.display = "";
  }
}

menuTableDisable();

//clearing menu table
function menuTableClear() {
  const menuTable = document.querySelector("#menu-table tbody");
  menuTable.innerHTML = "";
}

// switching between default and new rate

const defaultRateButton = document.querySelector("#default-rate-button");
const newRateButton = document.querySelector("#new-rate-button");
const defaultRateContainer = document.querySelector("#default-rate-container");
const newRateContainer = document.querySelector("#new-rate-container");

defaultRateButton.addEventListener("click", () => {
  defaultRateButton.classList.add("active-filter-btn");
  newRateButton.classList.remove("active-filter-btn");

  defaultRateContainer.classList.remove("hide");
  newRateContainer.classList.add("hide");
});

newRateButton.addEventListener("click", () => {
  newRateButton.classList.add("active-filter-btn");
  defaultRateButton.classList.remove("active-filter-btn");

  newRateContainer.classList.remove("hide");
  defaultRateContainer.classList.add("hide");
});

// function to count the number of rates in the rate table

function newRateCount() {
  const tableRowCount = document.querySelectorAll(
    "#new-rate-table tbody tr"
  ).length;
  const rateDisplay = document.querySelector("#total-rates");
  rateDisplay.textContent = tableRowCount;
}

newRateCount();

// clearing rate table
function rateTableClear() {
  const rateTable = document.querySelector("#new-rate-table tbody");
  rateTable.innerHTML = "";
}

// adding order types in table

orderTypes = ["Dine In", "Take Away", "Room Service", "Delivery", "No Charge"];
orderTypeTable = document.querySelector("#order-type-table");

orderTypes.forEach((type) => {
  const list = document.createElement("li");
  list.setAttribute("class", "popup-list");
  let id = type.trim();

  list.innerHTML = `
    <input id="${id}" class="checkbox-input" type="checkbox" />
    <label for="${id}">${type.trim()}</label>
  `;

  orderTypeTable.appendChild(list);
});

//disabling add modifier container if checkbox is checked
const modiferCheckbox = document.querySelector("#item-as-modifier");
const modifierContainer = document.querySelector("#modifier-container");

modiferCheckbox.addEventListener("change", () => {
  if (modiferCheckbox.checked) {
    modifierContainer.classList.add("hide");
  } else {
    modifierContainer.classList.remove("hide");
  }
});

//disabling modifier table if no records are present
function modifierTableDisable() {
  const modifierContainer = document.querySelector("#modifier-table-container");
  const rowLength = document.querySelectorAll(
    "#modifier-table tbody tr"
  ).length;

  if (rowLength === 0) {
    modifierContainer.classList.add("hide");
  } else {
    modifierContainer.classList.remove("hide");
  }
}

modifierTableDisable();

//clearing modifier table
function modifierTableClear() {
  const modifierTable = document.querySelector("#modifier-table tbody");
  modifierTable.innerHTML = "";
}

//---------------------- new rate popup-----------------------------

const rateOverlay = document.querySelector("#rate-overlay");
const ratePopup = document.querySelector("#rate-popup");
const rateForm = document.querySelector("#rate-form");
const ratePopupAdd = document.querySelector("#add-new-rate-button");
const ratePopupClose = document.querySelector("#rate-close");

function ratePopupEnable() {
  ratePopup.style.visibility = "visible";
  ratePopup.style.opacity = 1;

  rateOverlay.style.visibility = "visible";
  rateOverlay.style.opacity = 1;

  rateForm.scrollTop = 0;
}

function ratePopupDisable() {
  ratePopup.style.visibility = "hidden";
  ratePopup.style.opacity = 0;

  rateOverlay.style.visibility = "hidden";
  rateOverlay.style.opacity = 0;

  rateForm.reset();

  //hiding min and max price
  minPriceOptions.forEach((option) => option.classList.add("hide"));
  maxPriceOptions.forEach((option) => option.classList.add("hide"));
  mandatoryPrices.forEach((price) => price.classList.remove("hide"));

  // making auto apply same discount to the modifer container visible initially
  applySameDiscContainers.forEach((container) => {
    container.classList.remove("hide");
  });
}

ratePopupAdd.addEventListener("click", () => {
  ratePopupEnable();
});

ratePopupClose.addEventListener("click", () => {
  ratePopupDisable();
});

rateOverlay.addEventListener("click", () => {
  ratePopupDisable();
});

//open price checkbox

const openPriceCheckBoxes = document.querySelectorAll(".open-price-check");
const minPriceOptions = document.querySelectorAll(".min-price-container");
const maxPriceOptions = document.querySelectorAll(".max-price-container");
const mandatoryPrices = document.querySelectorAll(".mandatory-price");

openPriceCheckBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      minPriceOptions.forEach((option) => option.classList.remove("hide"));
      maxPriceOptions.forEach((option) => option.classList.remove("hide"));
      mandatoryPrices.forEach((price) => price.classList.add("hide"));
    } else {
      minPriceOptions.forEach((option) => option.classList.add("hide"));
      maxPriceOptions.forEach((option) => option.classList.add("hide"));
      mandatoryPrices.forEach((price) => price.classList.remove("hide"));
    }
  });
});

//can apply discount checkbox

const canApplyDiscCheckboxes = document.querySelectorAll(
  ".can-apply-disc-check"
);
const applySameDiscContainers = document.querySelectorAll(
  ".apply-same-disc-container"
);

canApplyDiscCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    applySameDiscContainers.forEach((container) => {
      if (checkbox.checked) {
        container.classList.remove("hide");
      } else {
        container.classList.add("hide");
      }
    });
  });
});

//---------------------- Menu popup-----------------------------

const menuOverlay = document.querySelector("#menu-overlay");
const menuPopup = document.querySelector("#menu-popup");
const menuForm = document.querySelector("#menu-form");
const menuPopupAdd = document.querySelector("#add-menu-button");
const menuPopupClose = document.querySelector("#menu-close");

function menuPopupEnable() {
  menuPopup.style.visibility = "visible";
  menuPopup.style.opacity = 1;

  menuOverlay.style.visibility = "visible";
  menuOverlay.style.opacity = 1;

  menuForm.scrollTop = 0;
}

function menuPopupDisable() {
  menuPopup.style.visibility = "hidden";
  menuPopup.style.opacity = 0;

  menuOverlay.style.visibility = "hidden";
  menuOverlay.style.opacity = 0;

  menuForm.reset();
}

menuPopupAdd.addEventListener("click", () => {
  menuPopupEnable();
});

menuPopupClose.addEventListener("click", () => {
  menuPopupDisable();
});

menuOverlay.addEventListener("click", () => {
  menuPopupDisable();
});

//---------------------- Modifier popup-----------------------------

const modifierOverlay = document.querySelector("#modifier-overlay");
const modifierPopup = document.querySelector("#modifier-popup");
const modifierForm = document.querySelector("#modifier-form");
const modifierPopupAdd = document.querySelector("#add-modifier-button");
const modifierPopupClose = document.querySelector("#modifier-close");

function modifierPopupEnable() {
  modifierPopup.style.visibility = "visible";
  modifierPopup.style.opacity = 1;

  modifierOverlay.style.visibility = "visible";
  modifierOverlay.style.opacity = 1;

  modifierForm.scrollTop = 0;
}

function modifierPopupDisable() {
  modifierPopup.style.visibility = "hidden";
  modifierPopup.style.opacity = 0;

  modifierOverlay.style.visibility = "hidden";
  modifierOverlay.style.opacity = 0;

  modifierForm.reset();
}

modifierPopupAdd.addEventListener("click", () => {
  modifierPopupEnable();
});

modifierPopupClose.addEventListener("click", () => {
  modifierPopupDisable();
});

modifierOverlay.addEventListener("click", () => {
  modifierPopupDisable();
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#item-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#item-table tbody tr");

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
  const table = document.querySelector("#item-table");
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
  const tableRows = document.querySelectorAll("#item-table tbody tr");

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
    "#item-table tr input[type='checkbox']"
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
    "#item-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#item-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to main table-----------------------------

//----------------------------- item form submit -----------------------------

const itemSubmit = document.querySelector("#item-submit-button");

itemSubmit.addEventListener("click", () => {
  // Taking inputs

  const Name = document.querySelector("#item-name").value.trim();
  const itemCategory = document.querySelector("#item-category").value.trim();
  const menuTableRow = document.querySelectorAll("#menu-table tbody tr").length;
  const itemPrice = document.querySelector("#item-price").value.trim();
  const itemTaxGroup = document.querySelector("#item-tax-group").value.trim();
  // Validation

  if (Name === "") {
    alert("Please Enter Item Name");
    return;
  }

  if (itemCategory === "" || itemCategory === "default") {
    alert("Please Select an Item Category");
    return;
  }

  if (menuTableRow === 0) {
    alert("Please Add a Menu Path");
    return;
  }

  if (itemPrice === "") {
    alert("Please Enter a Price");
    return;
  }

  let taxGroupName;
  if (itemTaxGroup === "" || itemTaxGroup === "default") {
    taxGroupName = "";
  } else {
    taxGroupName = itemTaxGroup;
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#item-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === Name.toLowerCase()
  );

  if (isDuplicate) {
    alert("Item already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#item-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${Name}</td>
    <td>${itemCategory}</td>
    <td>${itemPrice}</td>
    <td>${taxGroupName}</td>
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

//----------------------------- menu table-----------------------------

const menuSubmit = document.querySelector("#menu-submit-button");

menuSubmit.addEventListener("click", () => {
  // Taking inputs

  const menuName = document.querySelector("#menu-name").value.trim();
  const menuGroup = document.querySelector("#menu-group-name").value.trim();
  const menuSubgroup = document
    .querySelector("#menu-subgroup-name")
    .value.trim();
  const itemGroup = document.querySelector("#item-group-name").value.trim();

  // Validation

  let menuPath = [];

  if (menuName === "" || menuName === "default") {
    alert("Please Select a Menu ");
    return;
  } else {
    menuPath.push(menuName);
  }

  if (menuGroup === "" || menuGroup === "default") {
    alert("Please Select a Menu Group");
    return;
  } else {
    menuPath.push(menuGroup);
  }

  if (menuSubgroup === "" || menuSubgroup === "default") {
    alert("Please Select a Menu Subgroup");
    return;
  } else {
    menuPath.push(menuSubgroup);
  }

  if (itemGroup !== "" && itemGroup !== "default") {
    menuPath.push(itemGroup);
  }

  // Populating the data
  const tableBody = document.querySelector("#menu-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${menuPath.join(" / ")}</td>

    <td class = "popup-action-btns">
      <button class="edit-btn action-buttons" type = "button" title="Edit">
        <span class="material-symbols-outlined ">edit</span>
      </button>
      <button class="delete-btn action-buttons" type = "button" title="Delete">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </td>
  `;
  tableBody.appendChild(row);

  menuPopupDisable();
  menuTableDisable();
});

// Event delegation for deleting
document.querySelector("#menu-container").addEventListener("click", (event) => {
  if (event.target.closest(".delete-btn")) {
    event.target.closest("tr").remove();
  }
  menuTableDisable();
});

//----------------------------- rate form submit -----------------------------

const rateSubmit = document.querySelector("#rate-submit-button");

rateSubmit.addEventListener("click", () => {
  // Taking inputs

  const rateName = document.querySelector("#rate-name").value.trim();
  const openPriceCheckbox = document.querySelector("#rate-item-open-price");
  const itemPrice = document.querySelector("#rate-item-price").value.trim();
  const minPrice = document.querySelector("#rate-item-min-price").value.trim();
  const maxPrice = document.querySelector("#rate-item-max-price").value.trim();

  // Validation

  if (rateName === "" || rateName === "default") {
    alert("Please Select a Rate");
    return;
  }

  if (openPriceCheckbox.checked) {
    if (minPrice === "") {
      alert("please Enter Minimum Price");
      return;
    }

    if (maxPrice === "") {
      alert("please Enter Maximum Price");
      return;
    }
  } else {
    if (itemPrice === "") {
      alert("please Enter Item Price");
      return;
    }
  }

  //checking for duplicates
  const existingValues = document.querySelectorAll(
    "#new-rate-table tbody tr td:nth-child(1)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === rateName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Rate already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#new-rate-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${rateName}</td>

    <td class = "popup-action-btns">
      <button class="edit-btn action-buttons" type = "button"  title="Edit">
        <span class="material-symbols-outlined ">edit</span>
      </button>
      <button class="delete-btn action-buttons" type = "button" title="Delete">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </td>
  `;
  tableBody.appendChild(row);

  ratePopupDisable();
  newRateCount();
});

// Event delegation for deleting
document
  .querySelector("#new-rate-container")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      event.target.closest("tr").remove();
    }

    newRateCount();
  });

//----------------------------- modifier form submit -----------------------------

const modifierSubmit = document.querySelector("#modifier-submit-button");

modifierSubmit.addEventListener("click", () => {
  // Taking inputs

  const modifierName = document
    .querySelector("#modifier-group-name")
    .value.trim();
  const minModifier = document
    .querySelector("#min-modifier-to-order")
    .value.trim();
  const maxModifier = document
    .querySelector("#max-modifier-to-order")
    .value.trim();

  // Validation

  if (modifierName === "" || modifierName === "default") {
    alert("Please Select a Modifier");
    return;
  }

  if (minModifier === "") {
    alert("Please Enter Minimum Modifiers To Order");
    return;
  }

  if (maxModifier === "") {
    alert("Please Enter Maximum Modifiers To Order");
    return;
  }

  //checking for duplicates
  const existingValues = document.querySelectorAll(
    "#modifier-table tbody tr td:nth-child(1)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) =>
      cell.textContent.trim().toLowerCase() === modifierName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Modifier Group already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#modifier-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${modifierName}</td>

    <td class = "popup-action-btns">
      <button class="edit-btn action-buttons" type = "button"  title="Edit">
        <span class="material-symbols-outlined ">edit</span>
      </button>
      <button class="delete-btn action-buttons" type = "button" title="Delete">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </td>
  `;
  tableBody.appendChild(row);

  modifierPopupDisable();
  modifierTableDisable();
});

// Event delegation for deleting
document
  .querySelector("#modifier-table-container")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      event.target.closest("tr").remove();
    }
    modifierTableDisable();
  });

//-----------------------------delete function for all delete buttons-----------------------------

document
  .querySelector("#item-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#item-table tbody input[type='checkbox']:checked"
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
  const rowLength = document.querySelectorAll("#item-table tbody tr").length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
