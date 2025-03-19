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

// add popup close button

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popupSaveButton = document.querySelector(".popup-save-btn");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".popup-overlay");
const form = document.querySelector("#currency-form");
const scrollableArea = document.querySelector(".popup-main");

function openPopup() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
  scrollableArea.scrollTop = 0;
}

function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  form.reset();
}

popupEnableButton.addEventListener("click", () => {
  openPopup();
});

popupCloseButton.addEventListener("click", () => {
  closePopup();
});

// Country data
const currencyData = {
  Afghanistan: { code: "AFN", symbol: "؋", name: "Afghani", subunit: "Pul" },
  Albania: { code: "ALL", symbol: "L", name: "Lek", subunit: "Qindarkë" },
  Algeria: {
    code: "DZD",
    symbol: "د.ج",
    name: "Algerian Dinar",
    subunit: "Santeem",
  },
  Andorra: { code: "EUR", symbol: "€", name: "Euro", subunit: "Cent" },
  Angola: { code: "AOA", symbol: "Kz", name: "Kwanza", subunit: "Cêntimo" },
  Argentina: {
    code: "ARS",
    symbol: "$",
    name: "Argentine Peso",
    subunit: "Centavo",
  },
  Australia: {
    code: "AUD",
    symbol: "$",
    name: "Australian Dollar",
    subunit: "Cent",
  },
  Bangladesh: { code: "BDT", symbol: "৳", name: "Taka", subunit: "Paisa" },
  Brazil: {
    code: "BRL",
    symbol: "R$",
    name: "Brazilian Real",
    subunit: "Centavo",
  },
  Canada: {
    code: "CAD",
    symbol: "$",
    name: "Canadian Dollar",
    subunit: "Cent",
  },
  China: { code: "CNY", symbol: "¥", name: "Yuan", subunit: "Fen" },
  "United States": {
    code: "USD",
    symbol: "$",
    name: "United States Dollar",
    subunit: "Cents",
  },
  India: { code: "INR", symbol: "₹", name: "Indian Rupee", subunit: "Paisa" },
  Japan: { code: "JPY", symbol: "¥", name: "Japanese Yen", subunit: "Sen" },
  Mexico: {
    code: "MXN",
    symbol: "$",
    name: "Mexican Peso",
    subunit: "Centavo",
  },
  Nigeria: { code: "NGN", symbol: "₦", name: "Naira", subunit: "Kobo" },
  Pakistan: {
    code: "PKR",
    symbol: "₨",
    name: "Pakistani Rupee",
    subunit: "Paisa",
  },
  "United Kingdom": {
    code: "GBP",
    symbol: "£",
    name: "Pound Sterling",
    subunit: "Pence",
  },
};

// Populate the country dropdown
const countrySelect = document.querySelector("#country");
Object.keys(currencyData).forEach((country) => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

// Selecting input fields
const cnameInput = document.querySelector("#currency-name");
const signInput = document.querySelector("#sign");
const currencyName = document.querySelector("#main-currency-name");
const subCurrencyInput = document.querySelector("#subcurrency-name");
const currencySymbol = document.querySelector("#country-symbol");

// Event listener for country selection
countrySelect.addEventListener("change", function () {
  const selectedCountry = this.value; // Use `this.value` instead of `this`

  if (currencyData[selectedCountry]) {
    cnameInput.value = currencyData[selectedCountry].name;
    signInput.value = currencyData[selectedCountry].symbol;
    currencyName.value = currencyData[selectedCountry].name;
    subCurrencyInput.value = currencyData[selectedCountry].subunit;
    currencySymbol.textContent = currencyData[selectedCountry].symbol; // Update currency symbol in UI

    document.querySelector("#conversion-rate").value = 1;
    document.querySelector("#conversion-rate-fixed").value = 1;
  }

  if (countrySelect.value === "" || countrySelect.value === "default") {
    form.reset();
  }
});

// for import export menu

const importExportMenuButton = document.querySelector(".options-button");
const importExportMenu = document.querySelector(".import-export-options");
const importExportMenuOverlay = document.querySelector(
  ".import-export-overlay"
);

importExportMenuButton.addEventListener("click", () => {
  importExportMenu.style.display = "flex";
  importExportMenuOverlay.style.display = "flex";
});

importExportMenuOverlay.addEventListener("click", () => {
  importExportMenu.style.display = "none";
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
  $("#currency-table").DataTable({
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

// delete record button

const checkbox = document.querySelectorAll("#delete-record-checkbox");
const deleteRecordBtn = document.querySelector(".delete-records-button");

checkbox.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      deleteRecordBtn.style.display = "flex";
    } else {
      deleteRecordBtn.style.display = "none";
    }
  });
});

// Select the "Delete All" checkbox
const deleteAllCheckbox = document.querySelector("#delete-record-checkbox");

// Add event listener to toggle all checkboxes
deleteAllCheckbox.addEventListener("change", function () {
  const allCheckboxes = document.querySelectorAll(
    "#currency-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#currency-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#currency-table tbody tr");
  const noDataMessage = document.querySelector("#no-data");

  if (tableRows.length === 0) {
    noDataMessage.style.display = "block"; // Show message if no rows
  } else {
    noDataMessage.style.display = "none"; // Hide message if rows are present
  }
}
document.addEventListener("DOMContentLoaded", function () {
  checkEmptyTable();
});

// searchbar

const searchBar = document.querySelector("#currency-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#currency-table tbody tr");
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

// Account Submit Button

const submitButton = document.querySelector("#currency-submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const countryName = document.querySelector("#country").value.trim();
  const currencyName = document.querySelector("#currency-name").value.trim();
  const symbol = document.querySelector("#sign").value.trim();
  const exchangeRate = document.querySelector("#conversion-rate").value.trim(); // Get the value

  // Validation Checks
  if (countryName === "" || countryName === "default") {
    alert("Please Select a Country");
    return;
  }
  if (currencyName === "") {
    alert("Please Enter Currency Name");
    return;
  }
  if (symbol === "") {
    alert("Please Enter Currency Symbol");
    return;
  }
  if (exchangeRate === "" || isNaN(exchangeRate)) {
    alert("Please Enter a Valid Exchange Rate");
    return;
  }

  // Get Current Date
  const now = new Date();
  const formattedDate = now.toISOString().split("T")[0]; // Format as YYYY-MM-DD

  // Create the table row to append to the table
  const tableBody = document.querySelector("#currency-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox" class="record-checkbox" /></td>
    <td>${countryName}</td>
    <td>${currencyName}</td>
    <td>${formattedDate}</td>
    <td>${symbol}</td>
    <td>1.00 ${symbol} = ${exchangeRate} ₹</td>
    <td>
      <button class="action-buttons edit-btn" title="Edit">
        <span class="material-symbols-outlined"> edit </span>
      </button>
      <button class="action-buttons delete-btn" title="Delete">
        <span class="material-symbols-outlined"> delete </span>
      </button>
    </td>`;

  // Append row to the table
  tableBody.appendChild(row);

  // Close popup (assuming you have a function named closePopup)
  closePopup();
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#currency-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
