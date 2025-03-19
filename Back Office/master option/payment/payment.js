document.addEventListener("DOMContentLoaded", () => {
  // enabled options
  const selectOptions = document.getElementById("select-options");
  const percentageOptions = document.querySelectorAll(".percentage-option");
  const amountOptions = document.querySelectorAll(".amount-option");

  selectOptions.addEventListener("change", (event) => {
    const selectedValue = event.target.value;

    // Hide all options initially
    percentageOptions.forEach((div) => div.classList.add("hidden"));
    amountOptions.forEach((div) => div.classList.add("hidden"));

    // Show relevant options based on the selected value
    if (selectedValue === "Percentage") {
      percentageOptions.forEach((div) => div.classList.remove("hidden"));
    } else if (selectedValue === "Amount") {
      amountOptions.forEach((div) => div.classList.remove("hidden"));
    }
  });
});

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

// add payment popup close button

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popup = document.querySelector(".payment-popup");
const overlay = document.querySelector(".popup-overlay");
const paymentForm = document.querySelector("#payment-form");
const scrollableArea = document.querySelector(".popup-main");

function popupEnable() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
  scrollableArea.scrollTop = 0;
}

function popupDisable() {
  popup.style.display = "none";
  overlay.style.display = "none";
  paymentForm.reset();

  cashOptions.forEach((div) => {
    div.classList.add("hidden");
  });

  bankOptions.forEach((div) => {
    div.classList.add("hidden");
  });

  thirdPartyOption.forEach((div) => {
    div.classList.add("hidden");
  });

  viewPointOption.forEach((div) => {
    div.classList.add("hidden");
  });

  guestListOption.forEach((div) => {
    div.classList.add("hidden");
  });
}

popupEnableButton.addEventListener("click", () => {
  popupEnable();
});

popupCloseButton.addEventListener("click", () => {
  popupDisable();
});

// for payment type

const PaymentType = document.querySelector("#paymentType");
const cashOptions = document.querySelectorAll(".cash-option");
const bankOptions = document.querySelectorAll(".bank-option");
const thirdPartyOption = document.querySelectorAll(".third-party-option");

PaymentType.addEventListener("change", () => {
  const selectedOption = PaymentType.value;

  if (selectedOption === "Cash") {
    cashOptions.forEach((div) => {
      div.classList.remove("hidden");
    });

    bankOptions.forEach((div) => {
      div.classList.add("hidden");
    });

    thirdPartyOption.forEach((div) => {
      div.classList.add("hidden");
    });
  } else if (selectedOption === "Bank") {
    bankOptions.forEach((div) => {
      div.classList.remove("hidden");
    });

    cashOptions.forEach((div) => {
      div.classList.add("hidden");
    });

    thirdPartyOption.forEach((div) => {
      div.classList.add("hidden");
    });
  } else if (selectedOption === "third-party") {
    thirdPartyOption.forEach((div) => {
      div.classList.remove("hidden");
    });

    cashOptions.forEach((div) => {
      div.classList.add("hidden");
    });

    bankOptions.forEach((div) => {
      div.classList.add("hidden");
    });
  } else {
    cashOptions.forEach((div) => {
      div.classList.add("hidden");
    });

    bankOptions.forEach((div) => {
      div.classList.add("hidden");
    });

    thirdPartyOption.forEach((div) => {
      div.classList.add("hidden");
    });
  }
});

// for select PMS
const selectPMS = document.querySelector("#select-pms");
const guestListOption = document.querySelectorAll(".guestline-select");
const viewPointOption = document.querySelectorAll(".viewpoint-option");

selectPMS.addEventListener("change", () => {
  const selectedOptionPMS = selectPMS.value;

  if (selectedOptionPMS === "Guestline") {
    guestListOption.forEach((div) => {
      div.classList.remove("hidden");
    });

    viewPointOption.forEach((div) => {
      div.classList.add("hidden");
    });
  } else if (selectedOptionPMS === "ViewPointPMS") {
    viewPointOption.forEach((div) => {
      div.classList.remove("hidden");
    });

    guestListOption.forEach((div) => {
      div.classList.add("hidden");
    });
  } else {
    viewPointOption.forEach((div) => {
      div.classList.add("hidden");
    });

    guestListOption.forEach((div) => {
      div.classList.add("hidden");
    });
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
  $("#payment-table").DataTable({
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
    "#payment-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#payment-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#payment-table tbody tr");
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

const searchBar = document.querySelector("#payment-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#payment-table tbody tr");
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

// Payment Submit Button
const submitButton = document.querySelector("#payment-submit");

submitButton.addEventListener("click", () => {
  const shortCode = document.querySelector("#payment-shortcode").value.trim();
  const paymentMethod = document.querySelector("#pay-method").value.trim();
  const paymentType = document.querySelector("#paymentType").value.trim();
  const cardProcessing = document.querySelector("#pay-card-processing");

  // Validation
  if (!shortCode) {
    alert("Please enter a shortcode.");
    return;
  }

  if (!paymentMethod) {
    alert("Please enter a payment method.");
    return;
  }

  if (paymentType === "" || paymentType === "default") {
    alert("Please select a valid payment type.");
    return;
  }

  // Check if ShortCode already exists to prevent duplicates
  const existingShortCodes = document.querySelectorAll(
    "#payment-table tbody tr td:nth-child(2)"
  );
  for (let cell of existingShortCodes) {
    if (cell.textContent.trim() === shortCode) {
      alert("Duplicate short codes are not allowed.");
      return;
    }
  }

  // Determine if card processing is enabled
  let cp = cardProcessing.checked ? "Yes" : "No";

  // Select table body correctly
  const tableBody = document.querySelector("#payment-table tbody");
  if (!tableBody) {
    alert("Error: Payment table not found.");
    return;
  }

  // Create new row
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox" class="record-checkbox" /></td>
    <td>${shortCode}</td>
    <td>${paymentMethod}</td>
    <td>${paymentType}</td>
    <td>${cp}</td>
    <td>
      <button class="action-buttons edit-btn" title="Edit">
        <span class="material-symbols-outlined"> edit </span>
      </button>
      <button class="action-buttons delete-btn" title="Delete">
        <span class="material-symbols-outlined"> delete </span>
      </button>
    </td>`;

  // Append row to table
  tableBody.appendChild(row);

  popupDisable();
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#payment-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
