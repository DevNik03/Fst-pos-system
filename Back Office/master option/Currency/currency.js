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

const currencyOverlay = document.querySelector("#currency-overlay");
const currencyPopup = document.querySelector("#currency-popup");
const currencyForm = document.querySelector("#currency-form");
const currencyPopupAdd = document.querySelector("#currency-open");
const currencyPopupClose = document.querySelector("#currency-close");

function mainPopupEnable() {
  currencyPopup.style.visibility = "visible";
  currencyPopup.style.opacity = 1;

  currencyOverlay.style.visibility = "visible";
  currencyOverlay.style.opacity = 1;

  currencyForm.scrollTop = 0;
}

function mainPopupDisable() {
  currencyPopup.style.visibility = "hidden";
  currencyPopup.style.opacity = 0;

  currencyOverlay.style.visibility = "hidden";
  currencyOverlay.style.opacity = 0;

  currencyForm.reset();

  // symbol container is on the left initially
  symbolHolders.forEach((holder) => {
    holder.classList.add("left");
    holder.classList.remove("right");
  });
}

currencyPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

currencyPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

currencyOverlay.addEventListener("click", () => {
  mainPopupDisable();
});

// sign placement

const placementSelect = document.querySelector("#sign-placement");
const symbolHolders = document.querySelectorAll(".currency-symbol");

placementSelect.addEventListener("change", () => {
  const selectedValue = placementSelect.value.trim();

  if (selectedValue === "After Amount") {
    symbolHolders.forEach((holder) => {
      holder.classList.add("right");
      holder.classList.remove("left");
    });
  } else {
    symbolHolders.forEach((holder) => {
      holder.classList.add("left");
      holder.classList.remove("right");
    });
  }
});

//populating the country select
const countries = [
  {
    name: "India",
    currencyCode: "INR",
    currencySymbol: "₹",
    currencyName: "Rupee",
    subCurrencyName: "Paise",
  },
  {
    name: "Pakistan",
    currencyCode: "PKR",
    currencySymbol: "₨",
    currencyName: "Rupee",
    subCurrencyName: "Paisa",
  },
  {
    name: "United States",
    currencyCode: "USD",
    currencySymbol: "$",
    currencyName: "Dollar",
    subCurrencyName: "Cent",
  },
  {
    name: "United Kingdom",
    currencyCode: "GBP",
    currencySymbol: "£",
    currencyName: "Pound Sterling",
    subCurrencyName: "Penny",
  },
  {
    name: "Japan",
    currencyCode: "JPY",
    currencySymbol: "¥",
    currencyName: "Yen",
    subCurrencyName: "Sen",
  },
  {
    name: "China",
    currencyCode: "CNY",
    currencySymbol: "¥",
    currencyName: "Yuan",
    subCurrencyName: "Fen",
  },
  {
    name: "European Union",
    currencyCode: "EUR",
    currencySymbol: "€",
    currencyName: "Euro",
    subCurrencyName: "Cent",
  },
  {
    name: "Australia",
    currencyCode: "AUD",
    currencySymbol: "A$",
    currencyName: "Australian Dollar",
    subCurrencyName: "Cent",
  },
  {
    name: "Canada",
    currencyCode: "CAD",
    currencySymbol: "C$",
    currencyName: "Canadian Dollar",
    subCurrencyName: "Cent",
  },
  {
    name: "Russia",
    currencyCode: "RUB",
    currencySymbol: "₽",
    currencyName: "Ruble",
    subCurrencyName: "Kopek",
  },
];

const countrySelect = document.querySelector("#country-name");
const currencyShortCode = document.querySelector("#currency-short-code");
const currencySymbol = document.querySelector("#currency-sign");
const currencyName = document.querySelector("#currency-name");
const subCurrencyName = document.querySelector("#subcurrency-name");
const conversionSymbol = document.querySelector("#country-symbol");

countries.forEach((country) => {
  const option = document.createElement("option");
  option.value = country.name;
  option.textContent = country.name;

  countrySelect.appendChild(option);
});

//when u select a country all the respective fields should be automatically be filled

countrySelect.addEventListener("change", () => {
  const selectedValue = countrySelect.value.trim();
  const countryData = countries.find(
    (country) => country.name === selectedValue
  );

  if (countryData) {
    currencyShortCode.value = countryData.currencyCode;
    currencySymbol.value = countryData.currencySymbol;
    currencyName.value = countryData.currencyName;
    subCurrencyName.value = countryData.subCurrencyName;
    conversionSymbol.textContent = countryData.currencySymbol;
  } else {
    currencyShortCode.value = "";
    currencySymbol.value = "";
    currencyName.value = "";
    subCurrencyName.value = "";
    conversionSymbol.textContent = "";
  }
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#currency-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#currency-table tbody tr");

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
  const table = document.querySelector("#currency-table");
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
  const tableRows = document.querySelectorAll("#currency-table tbody tr");

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
    "#currency-table tr input[type='checkbox']"
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
    "#currency-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#currency-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const currencySubmit = document.querySelector("#currency-submit-button");

currencySubmit.addEventListener("click", () => {
  // Taking inputs
  const countryName = document.querySelector("#country-name").value.trim();

  const currencyShortCode = document
    .querySelector("#currency-short-code")
    .value.trim();

  const currencySymbol = document.querySelector("#currency-sign").value.trim();

  const signPlacement = document.querySelector("#sign-placement").value.trim();

  const currencyName = document.querySelector("#currency-name").value.trim();

  const subCurrencyName = document
    .querySelector("#subcurrency-name")
    .value.trim();

  const fromCurrency = document.querySelector("#from-currency").value.trim();

  const toCurrency = document.querySelector("#to-currency").value.trim();

  const decimalDigits = document
    .querySelector("#digits-after-decimal")
    .value.trim();

  // Validation
  if (countryName === "" || countryName === "default") {
    alert("Please Select a Country");
    return;
  }

  if (currencyShortCode === "") {
    alert("Please Enter Currency Short Code");
    return;
  }

  if (currencySymbol === "") {
    alert("Please Enter a Currency Sign");
    return;
  }

  if (currencyName === "") {
    alert("Please Enter Currency Name");
    return;
  }

  if (subCurrencyName === "") {
    alert("Please Enter Subcurrency Name");
    return;
  }

  //adding zeros

  // Convert input values to numbers before formatting
  let formattedFromCurrency = parseFloat(fromCurrency).toFixed(decimalDigits);
  let formattedToCurrency = parseFloat(toCurrency).toFixed(decimalDigits);

  //getting the date

  const now = new Date();
  const currentDate = now.toISOString().split("T")[0]; // Extract YYYY-MM-DD

  // Populating the data
  const tableBody = document.querySelector("#currency-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${countryName}</td>
    <td>${currencyShortCode}</td>
     <td>${currentDate}</td>
      <td>${currencySymbol}</td>
    <td>
    ${
      signPlacement === "Before Amount"
        ? `${currencySymbol} ${formattedFromCurrency} = ₹ ${formattedToCurrency}`
        : `${formattedFromCurrency} ${currencySymbol}  = ${formattedToCurrency} ₹ `
    }
      </td>
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
  .querySelector("#currency-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#currency-table tbody input[type='checkbox']:checked"
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
    "#currency-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
