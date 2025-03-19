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

//scrollbar from bottom
const bottomScroll = document.querySelector(".nav-master-options");
document.addEventListener("DOMContentLoaded", () => {
  bottomScroll.scrollTop = bottomScroll.scrollHeight;
});

// add popup

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popup = document.querySelector(".comission-plan-popup");
const overlay = document.querySelector(".popup-overlay");
const comissionForm = document.querySelector("#comisson-form");

function popupEnable() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
}

function popupDisable() {
  popup.style.display = "none";
  overlay.style.display = "none";
  comissionForm.reset();
  percentageOption.forEach((div) => {
    div.classList.add("hidden");
  });

  amountOption.forEach((div) => {
    div.classList.add("hidden");
  });
}

popupEnableButton.addEventListener("click", () => {
  popupEnable();
});

popupCloseButton.addEventListener("click", () => {
  popupDisable();
});

// for select type

const selectType = document.querySelector("#comission-plan");
const percentageOption = document.querySelectorAll(".percentage-option");
const amountOption = document.querySelectorAll(".amount-option");

selectType.addEventListener("change", () => {
  const selectedValue = selectType.value;

  if (selectedValue === "Percentage") {
    percentageOption.forEach((div) => {
      div.classList.remove("hidden");
    });
    amountOption.forEach((div) => {
      div.classList.add("hidden");
    });
  } else if (selectedValue === "Amount") {
    amountOption.forEach((div) => {
      div.classList.remove("hidden");
    });

    percentageOption.forEach((div) => {
      div.classList.add("hidden");
    });
  } else if (selectedValue === "default" || selectedValue === "") {
    // Handle when the select is reset to the default state (empty value or "default")
    percentageOption.forEach((div) => {
      div.classList.add("hidden");
    });

    amountOption.forEach((div) => {
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
  $("#commission-plan-table").DataTable({
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
    "#commission-plan-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#commission-plan-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll(
    "#commission-plan-table tbody tr"
  );
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

const searchBar = document.querySelector("#commission-plan-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll(
    "#commission-plan-table tbody tr"
  );
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

// commission plan submit button
const submitButton = document.querySelector("#commission-plan-submit");

submitButton.addEventListener("click", () => {
  const commissionName = document.querySelector("#comisson-name").value.trim();
  const commissionType = document.querySelector("#comission-plan").value.trim();
  const inclusiveTaxCheck = document.querySelector("#comission-inclusive-tax");
  const minimumOrderValue = document
    .querySelector("#min-order-value")
    .value.trim();

  // Validation
  if (!commissionName) {
    alert("Please enter a commission name.");
    return;
  }

  if (commissionType === "default" || !commissionType) {
    alert("Please select a valid commission type.");
    return;
  }

  if (!minimumOrderValue) {
    alert("Please enter a minimum order value.");
    return;
  }

  // Determine value based on type
  let value = "";
  if (commissionType === "Percentage") {
    const commissionPercentage = document
      .querySelector("#comission-percentage")
      .value.trim();
    if (!commissionPercentage) {
      alert("Please enter a commission percentage.");
      return;
    }
    value = commissionPercentage + "%";
  } else if (commissionType === "Amount") {
    const commissionAmount = document
      .querySelector("#comission-amount")
      .value.trim();
    if (!commissionAmount) {
      alert("Please enter a commission amount.");
      return;
    }
    value = "$" + commissionAmount;
  }

  // Checkbox Handling
  const inclusiveTax = inclusiveTaxCheck.checked ? "Yes" : "No";

  // Checking for duplicates
  const existingValues = document.querySelectorAll(
    "#commission-plan-table tbody tr td:nth-child(2)"
  );
  for (let cell of existingValues) {
    if (cell.textContent.trim() === commissionName) {
      alert("Duplicate commission names are not allowed.");
      return;
    }
  }

  // Append to Table
  const tableBody = document.querySelector("#commission-plan-table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox" class="record-checkbox" /></td>
    <td>${commissionName}</td>
    <td>${commissionType}</td>
    <td>${inclusiveTax}</td>
    <td>${value}</td>
    <td>${minimumOrderValue}</td>
    <td>
      <button class="action-buttons edit-btn" title="Edit">
        <span class="material-symbols-outlined"> edit </span>
      </button>
      <button class="action-buttons delete-btn" title="Delete">
        <span class="material-symbols-outlined"> delete </span>
      </button>
    </td>`;

  tableBody.appendChild(row);
  popupDisable();
});

// Event listener for "Edit" and "Delete" buttons (Event Delegation)
document
  .querySelector("#commission-plan-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
