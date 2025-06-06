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

//scrollbar from bottom
const bottomScroll = document.querySelector(".nav-container");
document.addEventListener("DOMContentLoaded", () => {
  bottomScroll.scrollTop = bottomScroll.scrollHeight;
});

// -----------------------------main-----------------------------

//----------------------------- titlebar-----------------------------
// opening main popup

const commissionOverlay = document.querySelector("#commission-overlay");
const commissionPopup = document.querySelector("#commission-popup");
const commissionForm = document.querySelector("#commission-form");
const commissionPopupAdd = document.querySelector("#commission-open");
const commissionPopupClose = document.querySelector("#commission-close");

function mainPopupEnable() {
  commissionPopup.style.visibility = "visible";
  commissionPopup.style.opacity = 1;

  commissionOverlay.style.visibility = "visible";
  commissionOverlay.style.opacity = 1;

  commissionForm.scrollTop = 0;
}

function mainPopupDisable() {
  commissionPopup.style.visibility = "hidden";
  commissionPopup.style.opacity = 0;

  commissionOverlay.style.visibility = "hidden";
  commissionOverlay.style.opacity = 0;

  commissionForm.reset();

  //hiding both containers
  document
    .querySelector("#commission-percentage-container")
    .classList.add("hide");
  document.querySelector("#commission-amount-container").classList.add("hide");
}

commissionPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

commissionPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

commissionOverlay.addEventListener("click", () => {
  mainPopupDisable();
});

//commission type select
const commissionTypeSelect = document.querySelector("#commission-type");
commissionTypeSelect.addEventListener("change", () => {
  commissionValue = commissionTypeSelect.value.trim();

  if (commissionValue === "Percentage") {
    document
      .querySelector("#commission-percentage-container")
      .classList.remove("hide");
    document
      .querySelector("#commission-amount-container")
      .classList.add("hide");
  } else if (commissionValue === "Amount") {
    document
      .querySelector("#commission-amount-container")
      .classList.remove("hide");
    document
      .querySelector("#commission-percentage-container")
      .classList.add("hide");
  } else {
    document
      .querySelector("#commission-percentage-container")
      .classList.add("hide");
    document
      .querySelector("#commission-amount-container")
      .classList.add("hide");
  }
});

// //image preview container
// const imageInput = document.getElementById("item-group-image");
// const imagePreview = document.getElementById("imagePreview");

// imageInput.addEventListener("change", function (event) {
//   const file = event.target.files[0]; // Get the selected file

//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       imagePreview.src = e.target.result; // Set image source
//       imagePreview.style.display = "block"; // Show the image
//     };
//     reader.readAsDataURL(file);
//   } else {
//     // If no file is selected, hide the preview
//     imagePreview.src = "";
//     imagePreview.style.display = "none";
//   }
// });

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#commission-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#commission-table tbody tr");

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
  const table = document.querySelector("#commission-table");
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
  const tableRows = document.querySelectorAll("#commission-table tbody tr");

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
    "#commission-table tr input[type='checkbox']"
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
    "#commission-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#commission-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const commissionSubmit = document.querySelector("#commission-submit-button");

commissionSubmit.addEventListener("click", () => {
  // Taking inputs
  const commissionName = document
    .querySelector("#commission-name")
    .value.trim();

  const commissionType = document
    .querySelector("#commission-type")
    .value.trim();

  const inclusiveTax = document.querySelector("#inclusive-tax");

  const minimumOrderValue = document
    .querySelector("#minimum-order")
    .value.trim();

  const commissionPercentage = document
    .querySelector("#commission-percentage")
    .value.trim();

  const commissionAmount = document
    .querySelector("#commission-amount")
    .value.trim();

  // Validation
  if (commissionName === "") {
    alert("Please Enter Commission Name");
    return;
  }

  if (commissionType === "" || commissionType === "default") {
    alert("Please Select Commission Type");
    return;
  } else if (commissionType === "Percentage") {
    if (commissionPercentage === "") {
      alert("Please Enter Commission Percentage");
      return;
    }
  } else if (commissionType === "Amount") {
    if (commissionAmount === "") {
      alert("Please Enter Commission Amount");
      return;
    }
  }

  if (minimumOrderValue === "") {
    alert("Enter Minimum Order Value");
    return;
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#commission-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) =>
      cell.textContent.trim().toLowerCase() === commissionName.toLowerCase()
  );

  if (isDuplicate) {
    alert("Commission already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#commission-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${commissionName}</td>
    <td>${commissionType}</td>
     <td>${inclusiveTax.checked ? "Yes" : "No"}</td>
    <td>
    ${commissionType === "Percentage" ? commissionPercentage : commissionAmount}
      </td>
     <td>${minimumOrderValue}</td>
    
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
  .querySelector("#commission-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#commission-table tbody input[type='checkbox']:checked"
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
    "#commission-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
