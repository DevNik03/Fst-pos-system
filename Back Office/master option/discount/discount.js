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

const discountOverlay = document.querySelector("#discount-overlay");
const discountPopup = document.querySelector("#discount-popup");
const discountForm = document.querySelector("#discount-form");
const discountPopupAdd = document.querySelector("#discount-open");
const discountPopupClose = document.querySelector("#discount-close");

function mainPopupEnable() {
  discountPopup.style.visibility = "visible";
  discountPopup.style.opacity = 1;

  discountOverlay.style.visibility = "visible";
  discountOverlay.style.opacity = 1;

  discountForm.scrollTop = 0;
}

function mainPopupDisable() {
  discountPopup.style.visibility = "hidden";
  discountPopup.style.opacity = 0;

  discountOverlay.style.visibility = "hidden";
  discountOverlay.style.opacity = 0;

  discountForm.reset();

  //disable apply on options
  orderOptions.forEach((option) => {
    option.classList.add("hide");
  });

  promoDiscount.classList.add("hide");

  bulkItemOptions.forEach((option) => {
    option.classList.add("hide");
  });

  // disable discount type options
  percentageOption.forEach((option) => {
    option.classList.add("hide");
  });

  amountOption.forEach((option) => {
    option.classList.add("hide");
  });

  //disable the open discount checkbox
  openDiscountCheckbox.disabled = true;

  // hide open discount containers
  maxDiscountPercentage.classList.add("hide");
  maxDiscountAmount.classList.add("hide");

  //scroll to top in user list
  userScrollTop();
}

discountPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

discountPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

discountOverlay.addEventListener("click", () => {
  mainPopupDisable();
});

//apply on select
const applyOn = document.querySelector("#discount-apply-on");
const orderOptions = document.querySelectorAll(".order-option");
const itemOptions = document.querySelectorAll(".item-option");
const bulkItemOptions = document.querySelectorAll(".bulk-item-option");
const promoDiscount = document.querySelector("#promo-discount-container");
applyOn.addEventListener("change", () => {
  const selectedValue = applyOn.value.trim();

  if (selectedValue === "Order") {
    orderOptions.forEach((option) => {
      option.classList.remove("hide");
    });

    promoDiscount.classList.add("hide");

    bulkItemOptions.forEach((option) => {
      option.classList.add("hide");
    });
  } else if (selectedValue === "Item") {
    orderOptions.forEach((option) => {
      option.classList.add("hide");
    });

    promoDiscount.classList.remove("hide");

    bulkItemOptions.forEach((option) => {
      option.classList.add("hide");
    });
  } else if (selectedValue === "Bulk Item") {
    orderOptions.forEach((option) => {
      option.classList.add("hide");
    });

    promoDiscount.classList.remove("hide");

    bulkItemOptions.forEach((option) => {
      option.classList.remove("hide");
    });
  } else {
    orderOptions.forEach((option) => {
      option.classList.add("hide");
    });

    promoDiscount.classList.add("hide");

    bulkItemOptions.forEach((option) => {
      option.classList.add("hide");
    });
  }
});

// dicount type select
const discountTypeSelect = document.querySelector("#discount-type");
const percentageOption = document.querySelectorAll(".Percentage-option");
const amountOption = document.querySelectorAll(".Amount-option");
discountTypeSelect.addEventListener("change", () => {
  const selectedValue = discountTypeSelect.value.trim();

  if (selectedValue === "Percentage") {
    percentageOption.forEach((option) => {
      option.classList.remove("hide");
    });

    amountOption.forEach((option) => {
      option.classList.add("hide");
    });
  } else if (selectedValue === "Amount") {
    percentageOption.forEach((option) => {
      option.classList.add("hide");
    });

    amountOption.forEach((option) => {
      option.classList.remove("hide");
    });
  } else {
    percentageOption.forEach((option) => {
      option.classList.add("hide");
    });

    amountOption.forEach((option) => {
      option.classList.add("hide");
    });
  }
});

//open discount check
const openDiscountCheckbox = document.querySelector("#open-discount");

const maxDiscountPercentage = document.querySelector(
  "#max-disc-percent-container"
);
const maxDiscountAmount = document.querySelector("#max-disc-amt-container");

const discountPercentage = document.querySelector(
  "#discount-percentage-container"
);
const discountAmount = document.querySelector("#discount-amount-container");

openDiscountCheckbox.addEventListener("change", () => {
  const selectedValue = discountTypeSelect.value.trim();

  if (openDiscountCheckbox.checked) {
    if (selectedValue === "Percentage") {
      maxDiscountPercentage.classList.remove("hide");
      maxDiscountAmount.classList.add("hide");

      discountAmount.classList.add("hide");
      discountPercentage.classList.add("hide");
    } else if (selectedValue === "Amount") {
      maxDiscountPercentage.classList.add("hide");
      maxDiscountAmount.classList.remove("hide");

      discountAmount.classList.add("hide");
      discountPercentage.classList.add("hide");
    }
  } else {
    maxDiscountPercentage.classList.add("hide");
    maxDiscountAmount.classList.add("hide");

    if (selectedValue === "Percentage") {
      discountAmount.classList.add("hide");
      discountPercentage.classList.remove("hide");
    } else if (selectedValue === "Amount") {
      discountAmount.classList.remove("hide");
      discountPercentage.classList.add("hide");
    }
  }
});

// Initially disable the checkbox
openDiscountCheckbox.disabled = true;

// Enable checkbox when a valid discount type is selected
discountTypeSelect.addEventListener("change", () => {
  if (
    discountTypeSelect.value === "Percentage" ||
    discountTypeSelect.value === "Amount"
  ) {
    openDiscountCheckbox.disabled = false; // Enable the checkbox
  } else {
    openDiscountCheckbox.disabled = true; // Keep it disabled
  }
});

//adding users in user select
const users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Hannah",
  "Isaac",
  "Jack",
];
const userlist = document.querySelector(".user-list");
users.forEach((user) => {
  const list = document.createElement("li");
  list.setAttribute("class", "popup-list");
  let id = user;

  list.innerHTML = `
  <input id="${id}" class="checkbox-input" type="checkbox" />
    <label for="${id}">${user}</label>
  `;

  userlist.appendChild(list);
});

// reseting the scrollbar to the top for user list
function userScrollTop() {
  document.querySelector(".table-wrapper").scrollTop = 0;
}

//select all users checkbox
const selectAllUsers = document.querySelector("#select-all-users");
const userList = document.querySelector(".user-list");

selectAllUsers.addEventListener("change", () => {
  const userCheckboxes = userList.querySelectorAll("input[type='checkbox']");
  userCheckboxes.forEach((checkbox) => {
    checkbox.checked = selectAllUsers.checked;
  });
});

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#discount-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#discount-table tbody tr");

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
  const table = document.querySelector("#discount-table");
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
  const tableRows = document.querySelectorAll("#discount-table tbody tr");

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
    "#discount-table tr input[type='checkbox']"
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
    "#discount-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#discount-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const discountSubmit = document.querySelector("#discount-submit-button");

discountSubmit.addEventListener("click", () => {
  // Taking inputs

  const Name = document.querySelector("#discount-name").value.trim();
  const applyOn = document.querySelector("#discount-apply-on").value.trim();
  const type = document.querySelector("#discount-type").value.trim();
  const openDiscount = document.querySelector("#open-discount");
  const discPercentage = document
    .querySelector("#discount-percentage")
    .value.trim();

  const discAmount = document.querySelector("#discount-amount").value.trim();
  const maxPercentage = document
    .querySelector("#max-discount-percentage")
    .value.trim();

  const maxAmount = document.querySelector("#max-discount-amount").value.trim();

  // Validation

  if (Name === "") {
    alert("Please Enter Discount Name");
    return;
  }

  if (type === "" || type === "default") {
    alert("Please Select a Discount Type");
    return;
  }

  if (type === "Percentage" && !openDiscount.checked) {
    if (discPercentage === "") {
      alert("Enter Discount Percentage");
      return;
    }
  }

  if (type === "Percentage" && openDiscount.checked) {
    if (maxPercentage === "") {
      alert("Please Enter Maximum Discount Percentage");
      return;
    }
  }

  if (type === "Amount" && !openDiscount.checked) {
    if (discAmount === "") {
      alert("Enter Discount Amount");
      return;
    }
  }

  if (type === "Amount" && openDiscount.checked) {
    if (maxAmount === "") {
      alert("Please Enter Maximum Discount Amount");
      return;
    }
  }

  // filling the data in value
  let value;
  if (type === "Percentage") {
    value = `${discPercentage}%`;
  } else if (type === "Amount") {
    value = discAmount;
  }

  // Check for duplicates
  const existingValues = document.querySelectorAll(
    "#discount-table tbody tr td:nth-child(2)"
  );

  let isDuplicate = Array.from(existingValues).some(
    (cell) => cell.textContent.trim().toLowerCase() === Name.toLowerCase()
  );

  if (isDuplicate) {
    alert("Discount already exists!");
    return;
  }

  // Populating the data
  const tableBody = document.querySelector("#discount-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox"/></td>
    <td>${Name}</td>
    <td>${applyOn}</td>
     <td>${openDiscount.checked ? "Open Discount" : type}</td>
     <td>${openDiscount.checked ? "Open" : value}</td>

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
  .querySelector("#discount-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#discount-table tbody input[type='checkbox']:checked"
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
    "#discount-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
