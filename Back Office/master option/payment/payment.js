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

const paymentOverlay = document.querySelector("#payment-overlay");
const paymentPopup = document.querySelector("#payment-popup");
const paymentForm = document.querySelector("#payment-form");
const paymentPopupAdd = document.querySelector("#payment-open");
const paymentPopupClose = document.querySelector("#payment-close");

function mainPopupEnable() {
  paymentPopup.style.visibility = "visible";
  paymentPopup.style.opacity = 1;

  paymentOverlay.style.visibility = "visible";
  paymentOverlay.style.opacity = 1;

  paymentForm.scrollTop = 0;
}

function mainPopupDisable() {
  paymentPopup.style.visibility = "hidden";
  paymentPopup.style.opacity = 0;

  paymentOverlay.style.visibility = "hidden";
  paymentOverlay.style.opacity = 0;

  paymentForm.reset();

  //hiding payment select options initially
  bankOptions.forEach((option) => {
    option.classList.add("hide");
  });

  thirdPartyOptions.forEach((option) => {
    option.classList.add("hide");
  });

  // hiding pms select options

  guestLineOptions.forEach((option) => {
    option.classList.add("hide");
  });

  viewPointOptions.forEach((option) => {
    option.classList.add("hide");
  });

  // hiding active surcharge options
  activeSurchargeOptions.forEach((option) => {
    option.classList.add("hide");
  });

  //hide surcharge select options
  surchargeAmount.classList.add("hide");
  surchargePercentage.classList.add("hide");
}

paymentPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

paymentPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

paymentOverlay.addEventListener("click", () => {
  mainPopupDisable();
});

// payment type select

const paymentTypeSelect = document.querySelector("#payment-type");
const bankOptions = document.querySelectorAll(".bank-option");
const thirdPartyOptions = document.querySelectorAll(".third-party-option");
paymentTypeSelect.addEventListener("change", () => {
  const selectedValue = paymentTypeSelect.value.trim();

  if (selectedValue === "Bank") {
    bankOptions.forEach((option) => {
      option.classList.remove("hide");
    });

    thirdPartyOptions.forEach((option) => {
      option.classList.add("hide");
    });
  } else if (selectedValue === "3rd Party Postings") {
    bankOptions.forEach((option) => {
      option.classList.add("hide");
    });

    thirdPartyOptions.forEach((option) => {
      option.classList.remove("hide");
    });
  } else {
    bankOptions.forEach((option) => {
      option.classList.add("hide");
    });

    thirdPartyOptions.forEach((option) => {
      option.classList.add("hide");
    });
  }
});

//pms select options

const pmsSelect = document.querySelector("#select-pms");
const guestLineOptions = document.querySelectorAll(".guestline-option");
const viewPointOptions = document.querySelectorAll(".viewpoint-option");
pmsSelect.addEventListener("change", () => {
  const selectedValue = pmsSelect.value.trim();

  if (selectedValue === "GuestLine") {
    guestLineOptions.forEach((option) => {
      option.classList.remove("hide");
    });

    viewPointOptions.forEach((option) => {
      option.classList.add("hide");
    });
  } else if (selectedValue === "ViewPoint PMS") {
    guestLineOptions.forEach((option) => {
      option.classList.add("hide");
    });

    viewPointOptions.forEach((option) => {
      option.classList.remove("hide");
    });
  } else {
    guestLineOptions.forEach((option) => {
      option.classList.add("hide");
    });

    viewPointOptions.forEach((option) => {
      option.classList.add("hide");
    });
  }
});

//active surcharge option

const activeSurchargeCheckBox = document.querySelector("#active-surcharge");
const activeSurchargeOptions = document.querySelectorAll(
  ".active-surcharge-option"
);

activeSurchargeCheckBox.addEventListener("change", () => {
  if (activeSurchargeCheckBox.checked) {
    activeSurchargeOptions.forEach((option) => {
      option.classList.remove("hide");
    });
  } else {
    activeSurchargeOptions.forEach((option) => {
      option.classList.add("hide");
    });
  }
});

// surcharge type select options

const surchargeType = document.querySelector("#surcharge-type");
const surchargeAmount = document.querySelector(".surcharge-amount");
const surchargePercentage = document.querySelector(".surcharge-percentage");
surchargeType.addEventListener("change", () => {
  const selectedValue = surchargeType.value.trim();

  if (selectedValue === "Amount") {
    surchargeAmount.classList.remove("hide");
    surchargePercentage.classList.add("hide");
  } else if (selectedValue === "Percentage") {
    surchargeAmount.classList.add("hide");
    surchargePercentage.classList.remove("hide");
  } else {
    surchargeAmount.classList.add("hide");
    surchargePercentage.classList.add("hide");
  }
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#payment-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#payment-table tbody tr");

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
  const table = document.querySelector("#payment-table");
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
  const tableRows = document.querySelectorAll("#payment-table tbody tr");

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
    "#payment-table tr input[type='checkbox']"
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
    "#payment-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#payment-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const paymentSubmit = document.querySelector("#payment-submit-button");

paymentSubmit.addEventListener("click", () => {
  // Taking inputs
  const shortCode = document.querySelector("#payment-short-code").value.trim();
  const Name = document.querySelector("#payment-method").value.trim();
  const type = document.querySelector("#payment-type").value.trim();
  const cardProcessing = document.querySelector("#card-processing");
  const selectPMS = document.querySelector("#select-pms").value.trim();
  //for guestline
  const siteID = document.querySelector("#site-id").value.trim();
  const interfaceID = document.querySelector("#interface-id").value.trim();
  const operatorCode = document.querySelector("#operator-code").value.trim();
  const password = document.querySelector("#guestline-password").value.trim();
  // for viewPoint pms
  const host = document.querySelector("#viewpoint-host").value.trim();
  const apiKey = document.querySelector("#api-key").value.trim();
  const resortID = document.querySelector("#resort-id").value.trim();
  const mode = document.querySelector("#mode-test").value.trim();
  const outsideGuestCode = document
    .querySelector("#outside-guest-code")
    .value.trim();

  //active surcharge checkbox
  const activeSurchargeCheck = document.querySelector("#active-surcharge");
  const surchargeType = document.querySelector("#surcharge-type").value.trim();
  const chargeAmount = document.querySelector("#charge-amount").value.trim();
  const chargePercentage = document
    .querySelector("#charge-percentage")
    .value.trim();
  const chargeType = document.querySelector("#charge-type").value.trim();

  // Validation

  if (shortCode === "") {
    alert("Please Enter a Short Code");
    return;
  }

  if (Name === "") {
    alert("Please Enter Payment Method");
    return;
  }

  if (type === "" || type === "default") {
    alert("Please Select a Payment Type");
    return;
  }

  let cardProcessingStatus = false;
  if (type === "Bank") {
    if (cardProcessing.checked) {
      cardProcessingStatus = true;
    } else {
      cardProcessingStatus = false;
    }
  }

  if (type === "3rd Party Postings") {
    if (selectPMS === "" || selectPMS === "default") {
      alert("Please Select A PMS");
      return;
    }
  }

  if (selectPMS === "GuestLine") {
    if (siteID === "") {
      alert("Please Enter Site ID");
      return;
    }

    if (interfaceID === "") {
      alert("Please Enter Interface ID");
      return;
    }

    if (operatorCode === "") {
      alert("Please Enter Operator Code");
      return;
    }

    if (password === "") {
      alert("Please Enter a Password");
      return;
    }
  }
  // for select pms
  if (selectPMS === "ViewPoint PMS") {
    if (host === "") {
      alert("Please Enter a Host");
      return;
    }

    if (apiKey === "") {
      alert("Please Enter an API Key");
      return;
    }

    if (resortID === "") {
      alert("Please Enter Resort ID");
      return;
    }

    if (mode === "") {
      alert("Please Enter Mode");
      return;
    }

    if (outsideGuestCode === "") {
      alert("Please Enter Outside Guest Code");
      return;
    }
  }

  //for active surcharge

  if (activeSurchargeCheck.checked) {
    if (surchargeType === "" || surchargeType === "default") {
      alert("Please Select Surcharge Type");
      return;
    }

    if (surchargeType === "Amount") {
      if (chargeAmount === "") {
        alert("Enter Surcharge Amount");
        return;
      }
    } else if (surchargeType === "Percentage") {
      if (chargePercentage === "") {
        alert("Enter Surcharge Percentage");
        return;
      }
    }

    //charge type select
    if (chargeType === "" || chargeType === "default") {
      alert("Select a Charge Type");
      return;
    }
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#payment-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === shortCode.toLowerCase()
  );

  if (isDuplicate) {
    alert("Payment already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#payment-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
      <td><input type="checkbox"/></td>
      <td>${shortCode}</td>
      <td>${Name}</td>
       <td>${type}</td>
       <td>${cardProcessingStatus ? "Yes" : "No"}</td>

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
  .querySelector("#payment-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#payment-table tbody input[type='checkbox']:checked"
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
  const rowLength = document.querySelectorAll("#payment-table tbody tr").length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
