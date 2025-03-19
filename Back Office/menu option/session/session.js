//loader

const loadingScreen = document.querySelector(".loading-screen");
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  if (loadingScreen) {
    loadingScreen.remove(); // This removes it from the DOM completely
  }
});

/// Select buttons
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
const bottomScroll = document.querySelector(".nav-menu-options");
document.addEventListener("DOMContentLoaded", () => {
  bottomScroll.scrollTop = bottomScroll.scrollHeight;
});

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popup = document.querySelector(".session-popup");
const overlay = document.querySelector(".popup-overlay");
const sessionForm = document.querySelector("#session-form"); // Fixed the trailing space
const scrollableContent = document.querySelector(".popup-main");

function popupEnable() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
  scrollableContent.scrollTop = 0;
}

function popupDisable() {
  popup.style.display = "none";
  overlay.style.display = "none";
  sessionForm.reset();
}

popupEnableButton.addEventListener("click", () => {
  popupEnable();
});

// Close the popup when the close button is clicked
popupCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  popupDisable();
});

// outlet table

const outlets = [
  "coffee shop",
  "coffee shop1",
  "coffee shop2",
  "coffee shop3",
  "coffee shop4",
  "coffee shop5",
  "coffee shop6",
  "coffee shop7",
];
const outletContainer = document.querySelector("#outlet-container");

outlets.forEach((outlet) => {
  //list to store outlet data
  const list = document.createElement("list");
  list.setAttribute("class", "outlet-list");

  //input
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", outlet.toLowerCase().trim());

  // label

  const label = document.createElement("label");
  label.setAttribute("for", outlet.toLowerCase().trim());
  label.textContent = outlet;

  //append to the list
  list.appendChild(checkbox);
  list.appendChild(label);

  //apppend list to outlet container

  outletContainer.appendChild(list);
});

// for active time

const activeTimeSelect = document.querySelector(".p-button");
const selectTimeContainer = document.querySelector(".select-time");
const selectTimeContainerCloseButton = document.querySelector(
  "#select-active-time-button"
);

activeTimeSelect.addEventListener("click", () => {
  selectTimeContainer.style.display = "grid";
});

selectTimeContainerCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  selectTimeContainer.style.display = "none";
});

// for import export menu

const importExportMenuButton = document.querySelector(".options-button");
const importExportMenu = document.querySelector(".import-export-options");
const importExportMenuOverlay = document.querySelector(
  ".import-export-overlay "
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
  $("#session-table").DataTable({
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
    "#session-table tbody input[type='checkbox']"
  );

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = deleteAllCheckbox.checked;
  });
});

const deletebutton = document.querySelector(".delete-records-button");
deletebutton.addEventListener("click", () => {
  tbody = document.querySelector("#session-table tbody");
  tbody.innerHTML = "";
  checkEmptyTable();
});

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#session-table tbody tr");
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

const searchBar = document.querySelector("#session-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#session-table tbody tr");
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

// menu group submmit

const submitButton = document.querySelector("#session-submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const sessionName = document.querySelector("#session-name").value.trim();

  // Select all checkboxes inside the outlet container
  const checkboxes = document.querySelectorAll(
    "#outlet-container input[type='checkbox']"
  );

  // Check if at least one is checked
  const isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);

  if (!isChecked) {
    alert("Please select at least one outlet.");
    return; // Stop form submission or further execution
  }

  // Validate session name
  if (sessionName === "") {
    alert("Enter Session Name");
    return;
  }

  // Checking for duplicates
  let newValue = sessionName.toLowerCase();
  let existingValues = document.querySelectorAll(
    "#session-table tbody tr td:nth-child(2)"
  );

  const isDuplicate = Array.from(existingValues).some(
    (value) => value.textContent.trim().toLowerCase() === newValue
  );

  if (isDuplicate) {
    alert("Session Already Exists!");
    return; // Stop execution if duplicate is found
  }

  // Populating the table
  const tableBody = document.querySelector("#session-table tbody");
  let row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="checkbox" class="record-checkbox" /></td>
    <td>${sessionName}</td>
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
  .querySelector("#session-table tbody")
  .addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return; // Ignore clicks outside buttons

    let row = target.closest("tr");

    if (target.classList.contains("delete-btn")) {
      // Delete Row
      row.remove();
    }
  });
