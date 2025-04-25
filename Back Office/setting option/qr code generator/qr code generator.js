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

//opening logo popup

const logoOverlay = document.querySelector("#logo-overlay");
const logoPopup = document.querySelector("#logo-popup");
const logoForm = document.querySelector("#logo-form");
const logoPopupAdd = document.querySelector("#add-logo-button");
const logoPopupClose = document.querySelector("#logo-close");

function logoPopupEnable() {
  logoPopup.style.visibility = "visible";
  logoPopup.style.opacity = 1;

  logoOverlay.style.visibility = "visible";
  logoOverlay.style.opacity = 1;

  logoForm.scrollTop = 0;
}

function logoPopupDisable() {
  logoPopup.style.visibility = "hidden";
  logoPopup.style.opacity = 0;

  logoOverlay.style.visibility = "hidden";
  logoOverlay.style.opacity = 0;

  logoForm.scrollTop = 0;

  //changing the textcontent of file name display
  fileNameDisplay.innerText = "You Have Not Selected Any File";

  // closing the image preview container
  imageContainer.style.display = "none";
  imageDisplay.style.display = "none";
}

logoPopupAdd.addEventListener("click", () => {
  logoPopupEnable();
});

logoPopupClose.addEventListener("click", () => {
  logoPopupDisable();
});

// Get the div and the hidden file input
const customFileDiv = document.getElementById("custom-file-div");
const fileInput = document.getElementById("file-input");
const fileNameDisplay = document.querySelector(".file-name");

// Attach click event to the div to trigger the hidden file input
customFileDiv.addEventListener("click", () => {
  fileInput.click(); // Programmatically trigger the hidden input
});

// Handle file selection
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0]; // Get the selected file
  if (file) {
    fileNameDisplay.innerText = `${file.name}`; // Display file name in the div
  }
});

// Get the input and the image display element
const imageInput = document.getElementById("file-input");
const imageDisplay = document.getElementById("imageDisplay");
const imageContainer = document.querySelector("#image-display-container");

// Add an event listener for when the user selects an image
imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader(); // Create a FileReader object

    // Event listener for when the file is read
    reader.onload = function (e) {
      imageDisplay.src = e.target.result; // Set the src to the file's data URL
      imageContainer.style.display = "flex";
      imageDisplay.style.display = "block"; // Display the image
    };

    reader.readAsDataURL(file); // Read the file as a Data URL
  }
});

//removing the image
const imageClose = document.querySelector("#close-image-btn");
imageClose.addEventListener("click", () => {
  imageContainer.style.display = "none";
  imageDisplay.style.display = "none";
  fileNameDisplay.innerText = "You Have Not Selected Any File";
});

//logo submit
const logoSubmit = document.querySelector("#logo-submit-button");
logoSubmit.addEventListener("click", () => {
  //taking inpput
  const imageInput = document.querySelector("#file-input");

  //validation

  if (imageInput.files.length === 0) {
    alert("Please Upload an Image");
    return;
  }

  logoPopupDisable();
});

// opening main popup-------------------------------------------

const TCOverlay = document.querySelector("#qr-code-overlay");
const TCPopup = document.querySelector("#qr-code-popup");
const TCForm = document.querySelector("#qr-code-form");
const TCPopupAdd = document.querySelector("#qr-code-open");
const TCPopupClose = document.querySelector("#qr-code-close");

function mainPopupEnable() {
  TCPopup.style.visibility = "visible";
  TCPopup.style.opacity = 1;

  TCOverlay.style.visibility = "visible";
  TCOverlay.style.opacity = 1;

  TCForm.scrollTop = 0;
  tableWrapperScrollTop();

  //clearing the table body before opening the popup
  clearTable();
}

function mainPopupDisable() {
  TCPopup.style.visibility = "hidden";
  TCPopup.style.opacity = 0;

  TCOverlay.style.visibility = "hidden";
  TCOverlay.style.opacity = 0;

  TCForm.reset();

  //disabling dinein, roomservice, menulink when popup opens
  dineinContainer.style.display = "none";
  roomServiceContainer.style.display = "none";
  menuLinkContainer.style.display = "none";

  //clearing available table container
  tableContainer.innerHTML = "";
}

TCPopupAdd.addEventListener("click", () => {
  mainPopupEnable();
});

TCPopupClose.addEventListener("click", () => {
  mainPopupDisable();
});

//enabling and disabling dinein,roomservice and menu link container

const QRSelect = document.querySelector("#qr-code-for");
const dineinContainer = document.querySelector("#dinein-container");
const roomServiceContainer = document.querySelector("#room-service-container");
const menuLinkContainer = document.querySelector("#menu-link-container");

QRSelect.addEventListener("change", () => {
  const selectedValue = QRSelect.value.trim();

  if (selectedValue === "Dine In") {
    dineinContainer.style.display = "flex";
    roomServiceContainer.style.display = "none";
    menuLinkContainer.style.display = "none";
  } else if (selectedValue === "Room Service") {
    dineinContainer.style.display = "none";
    roomServiceContainer.style.display = "flex";
    menuLinkContainer.style.display = "none";
  } else if (selectedValue === "Menu Link") {
    dineinContainer.style.display = "none";
    roomServiceContainer.style.display = "none";
    menuLinkContainer.style.display = "flex";
  } else {
    dineinContainer.style.display = "none";
    roomServiceContainer.style.display = "none";
    menuLinkContainer.style.display = "none";
  }
});

const outlets = [
  {
    outletName: "The Grand Restaurant",
    menu: "The Grand Restaurant Menu",
    floors: [
      { floorName: "Ground Floor", tables: ["Table 1", "Table 2", "Table 3"] },
      { floorName: "First Floor", tables: ["Table 1", "Table 2"] },
      { floorName: "Terrace", tables: ["Table 1", "Table 2", "Table 3"] },
    ],
  },
  {
    outletName: "Sunset Bistro",
    menu: "Sunset Bistro Menu",
    floors: [
      { floorName: "Patio", tables: ["Table 1", "Table 2"] },
      {
        floorName: "Indoor Seating",
        tables: ["Table 1", "Table 2", "Table 3", "Table 4"],
      },
    ],
  },
  {
    outletName: "City Diner",
    menu: "City Diner Menu",
    floors: [
      {
        floorName: "Main Floor",
        tables: ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5"],
      },
    ],
  },
  {
    outletName: "Rooftop Lounge",
    menu: "Rooftop Lounge Menu",
    floors: [
      { floorName: "Rooftop", tables: ["Table 1", "Table 2", "Table 3"] },
    ],
  },
];

const outletSelect = document.querySelectorAll(".outlet-select");
const menuSelect = document.querySelectorAll(".menu-select");
const floorSelect = document.querySelector(".floor-select");
const tableContainer = document.querySelector("#available-tables");

// Populate outlet and menu options initially
outlets.forEach((outlet) => {
  outletSelect.forEach((select) => {
    const option = document.createElement("option");
    option.value = outlet.outletName.trim();
    option.textContent = outlet.outletName.trim();
    select.appendChild(option);
  });

  menuSelect.forEach((select) => {
    const option = document.createElement("option");
    option.value = outlet.menu.trim();
    option.textContent = outlet.menu.trim();
    select.appendChild(option);
  });
});

// Automatically select the matching menu option when outlet changes
outletSelect.forEach((select) => {
  select.addEventListener("change", (event) => {
    const selectedOutlet = event.target.value.trim();
    const outletData = outlets.find(
      (outlet) => outlet.outletName === selectedOutlet
    );

    if (!outletData) {
      floorSelect.innerHTML = ""; // Clear floor options
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "--select--";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      floorSelect.appendChild(defaultOption);

      const tableContainer = document.querySelector("#available-tables");
      tableContainer.innerHTML = ""; // Clear any existing table checkboxes
      return; // Exit the function early to prevent further execution
    }

    if (outletData) {
      // Set the relevant menu as selected without removing other options
      menuSelect.forEach((menuDropdown) => {
        Array.from(menuDropdown.options).forEach((option) => {
          if (option.value === outletData.menu) {
            option.selected = true; // Automatically select the correct menu
          }
        });
      });
    }

    // Clear existing floor options and add default "--select--" option
    floorSelect.innerHTML = ""; // Clear existing options

    const defaultOption = document.createElement("option");
    defaultOption.value = "default";
    defaultOption.textContent = "--Select--";
    defaultOption.selected = true; // Set it as the default selected option
    floorSelect.appendChild(defaultOption);

    // Populate floor options for the selected outlet
    if (outletData) {
      outletData.floors.forEach((floor) => {
        const option = document.createElement("option");
        option.value = floor.floorName;
        option.textContent = floor.floorName;
        floorSelect.appendChild(option);
      });
    }

    tableContainer.innerHTML = "";
    if (outletData) {
      floorSelect.addEventListener("change", (event) => {
        const selectedVal = event.target.value.trim();

        // Clear previous table list to avoid duplicates
        tableContainer.innerHTML = "";

        // Find selected floor and display its tables as checkboxes
        const selectedFloorData = outletData.floors.find(
          (floor) => floor.floorName === selectedVal
        );
        if (selectedFloorData) {
          selectedFloorData.tables.forEach((table) => {
            const id = table.trim();
            const list = document.createElement("li");
            list.setAttribute("class", "popup-list");
            list.innerHTML = `
              <input id="${id}" class="checkbox-input" type="checkbox"/>
              <label for="${id}">${table}</label>
              `;
            tableContainer.appendChild(list); // Append the table checkboxes to the container
          });
        }
      });
    }
  });
});

//----------------------all table wrapper scroll to top----------------------------
function tableWrapperScrollTop() {
  document
    .querySelectorAll(".table-wrapper")
    .forEach((wrapper) => (wrapper.scrollTop = 0));
}

tableWrapperScrollTop();

//removing data from table body
const roomServiceTable = document.querySelector("#room-service-table tbody");
const menuLinkTable = document.querySelector("#menu-link-table tbody");
function clearTable() {
  roomServiceTable.innerHTML = "";
  menuLinkTable.innerHTML = "";
}

//---------- opening and closing rate config for room service and menu link-----------------------------

const menuConfigButtons = document.querySelectorAll(".add-menu-config");

const menuConfigOverlay = document.querySelector("#menu-config-overlay");
const menuConfigPopup = document.querySelector("#menu-config-popup");
const menuConfigForm = document.querySelector("#menu-config-form");
const menuConfigCloseBtn = document.querySelector("#menu-config-close");
const menuConfigSubmit = document.querySelector("#menu-config-submit-button");

let targetTable = "";

function menuConfigOpen() {
  menuConfigOverlay.style.opacity = 1;
  menuConfigOverlay.style.visibility = "visible";
  menuConfigPopup.style.visibility = "visible";
  menuConfigPopup.style.opacity = 1;

  menuConfigForm.scrollTop = 0;
  tableWrapperScrollTop();
}

function menuConfigClose() {
  menuConfigOverlay.style.opacity = 0;
  menuConfigOverlay.style.visibility = "hidden";
  menuConfigPopup.style.visibility = "hidden";
  menuConfigPopup.style.opacity = 0;

  menuConfigForm.reset();
}

// Attach event listeners to the buttons
menuConfigButtons.forEach((button) => {
  button.addEventListener("click", () => {
    targetTable =
      button.id === "rs-rate-config" ? "room-service-table" : "menu-link-table";

    // Show popup and overlay with proper styles
    menuConfigOpen();
  });
});

// Handle the menu config form submission
menuConfigSubmit.addEventListener("click", () => {
  // Taking input
  const outletName = document.querySelector("#menu-config-outlet").value.trim();
  const menuName = document.querySelector("#menu-config-menu").value.trim();

  const paymentMethodCheck = document.querySelectorAll(
    "#menu-config-payment-method input[type = 'checkbox']:checked"
  ).length;

  // Validation
  if (outletName === "" || outletName === "default") {
    alert("Please Select an Outlet");
    return;
  }

  if (menuName === "" || menuName === "default") {
    alert("Please Select a Menu");
    return;
  }

  if (paymentMethodCheck === 0) {
    alert("Please Select a Payment Method");
    return;
  }

  // Find the target table and add the new row dynamically
  const tableBody = document.getElementById(targetTable).querySelector("tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
  <td>${outletName}</td>
  <td>${menuName}</td>
 
  <td class = "popup-action-btns">
    <button class="edit-btn action-buttons" title="Edit" type = "button">
      <span class="material-symbols-outlined medium-icon">
        edit
      </span>
    </button>
  </td>
  `;

  tableBody.appendChild(row);

  menuConfigClose();
});

menuConfigCloseBtn.addEventListener("click", () => {
  menuConfigClose();
});

//populating rate select
const rates = [
  "Happy Hour",
  "Weekend Brunch Rate",
  "Lunch Special Rate",
  "Early Bird Discount",
  "Event Night Rate",
];

const rateSelect = document.querySelectorAll(".rate-select");

rates.forEach((rate) => {
  rateSelect.forEach((select) => {
    const option = document.createElement("option");
    option.value = rate.trim();
    option.textContent = rate.trim();

    select.appendChild(option);
  });
});

// Adding payment methods
const paymentMethods = [
  "Cash",
  "Credit Card",
  "Debit Card",
  "UPI",
  "Mobile Wallet",
  "Net Banking",
  "Gift Card",
  "Cheque",
  "Bank Transfer",
  "PayPal",
  "Apple Pay",
  "Google Pay",
];
const paymentOptionList = document.querySelectorAll(".payment-option-list");

paymentMethods.forEach((method) => {
  paymentOptionList.forEach((option) => {
    let id = method.trim().replace(/\s+/g, "-");

    const list = document.createElement("li");
    list.setAttribute("class", "popup-list");

    list.innerHTML = `
      <input id="${id}" class="checkbox-input" type="checkbox" />
      <label for="${id}">${method.trim()}</label>
    `;

    option.appendChild(list);
  });
});

// Adding business sources
const businessSources = [
  "Swiggy",
  "Zomato",
  "Uber Eats",
  "Dunzo",
  "Foodpanda",
  "Amazon Food",
  "Talabat",
  "Deliveroo",
  "Grubhub",
  "DoorDash",
  "Postmates",
  "Takeaway.com",
  "Direct Walk-In",
  "Hotel Website",
  "Google Business",
  "Instagram Orders",
  "Facebook Orders",
];

const sourceOptionList = document.querySelectorAll(".source-option-list");

businessSources.forEach((source) => {
  sourceOptionList.forEach((option) => {
    let id = source.trim().replace(/\s+/g, "-"); // Replace spaces with '-' for cleaner IDs

    const list = document.createElement("li");
    list.setAttribute("class", "popup-list");

    list.innerHTML = `
      <input id="${id}" class="checkbox-input" type="checkbox" />
      <label for="${id}">${source.trim()}</label>
    `;

    option.appendChild(list);
  });
});

// Selecting all "select-all" checkboxes
const selectAllCheckboxes = document.querySelectorAll(".select-all");

selectAllCheckboxes.forEach((selectAllCheckbox) => {
  selectAllCheckbox.addEventListener("change", (event) => {
    // Find the closest table wrapper containing the checkboxes
    const tableWrapper = selectAllCheckbox.closest(".table-wrapper");

    // Select all checkboxes within that table wrapper
    const itemCheckboxes = tableWrapper.querySelectorAll(
      "input[type='checkbox']"
    );

    // Update each checkbox's checked status based on the "select-all" checkbox
    itemCheckboxes.forEach((itemCheckbox) => {
      itemCheckbox.checked = selectAllCheckbox.checked;
    });
  });
});

//----------------------------- filterbar-----------------------------

//outlet filter
const outletFilter = document.querySelector("#select-outlet");
outletFilter.addEventListener("change", () => {
  outletSearch();
});

function outletSearch() {
  const searchValue = outletFilter.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#qr-code-table tbody tr");

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
    } else if (searchValue === "default" || searchValue === "") {
      row.style.display = "";
      matchFound = true;
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

//--------------------------searchbar---------------------------------------
const mainSearchBar = document.querySelector("#qr-code-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#qr-code-table tbody tr");

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
  const table = document.querySelector("#qr-code-table");
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
  const tableRows = document.querySelectorAll("#qr-code-table tbody tr");

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
    "#qr-code-table tr input[type='checkbox']"
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
    "#qr-code-table tbody input[type='checkbox']:checked"
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
  const rows = document.querySelectorAll("#qr-code-table tbody tr");

  if (rows.length === 0) {
    document.querySelector("#no-data").style.display = "flex"; // Show "No Data" message
  } else {
    document.querySelector("#no-data").style.display = "none"; // Hide "No Data" message
  }
}

noDataDisplay();

//----------------------------- adding records to table-----------------------------

const templateCategorySubmit = document.querySelector("#qr-code-submit-button");

templateCategorySubmit.addEventListener("click", () => {
  // Taking inputs
  const selectQRFor = document.querySelector("#qr-code-for").value.trim();

  //dinein inputs
  const dineinLanguage = document.querySelector("#d-language").value.trim();
  const dineinOutlet = document.querySelector("#d-outlet").value.trim();
  const dineinMenu = document.querySelector("#d-menu").value.trim();
  const dineinFloor = document.querySelector("#d-floor").value.trim();
  const checkedTables = document.querySelectorAll(
    "#available-tables input[type='checkbox']:checked"
  );

  // Get the label text for each selected checkbox
  const selectedTables = Array.from(checkedTables).map((checkbox) => {
    const label = checkbox.nextElementSibling; // Get the sibling label
    return label ? label.innerText.trim() : "Unnamed Table";
  });

  //room service inputs

  const roomServiceLanguage = document
    .querySelector("#rs-language")
    .value.trim();
  const roomservicePostingMethod = document
    .querySelector("#rs-posting-method")
    .value.trim();

  const roomServiceOutlets = document.querySelectorAll(
    "#room-service-table tbody tr td:nth-child(2)"
  );

  //menu link inputs

  const menuLinkLanguage = document.querySelector("#ml-language").value.trim();

  const menuLinkOutlets = document.querySelectorAll(
    "#menu-link-table tbody tr td:nth-child(2)"
  );

  // Validation

  if (selectQRFor === "" || selectQRFor === "default") {
    alert("Please Select a QR Option");
    return;
  }

  if (selectQRFor === "Dine In") {
    if (dineinLanguage === "" || dineinLanguage === "default") {
      alert("Please Select a language");
      return;
    }

    if (dineinOutlet === "" || dineinOutlet === "default") {
      alert("Please Select an Outlet");
      return;
    }

    if (dineinMenu === "" || dineinMenu === "default") {
      alert("Please Select a Menu");
      return;
    }

    if (dineinFloor === "" || dineinFloor === "default") {
      alert("Please Select a Floor");
      return;
    }

    const checkedTables = document.querySelectorAll(
      "#available-tables input[type='checkbox']:checked"
    );

    if (checkedTables.length === 0) {
      alert("Please Select At Least One Table");
      return;
    }

    const paymentMethods = document.querySelectorAll(
      "#d-payment-method input[type = 'checkbox']:checked"
    ).length;
    if (paymentMethods === 0) {
      alert("Please Select Atleast One Payment Method");
      return;
    }

    //for room service
  } else if (selectQRFor === "Room Service") {
    if (roomServiceLanguage === "" || roomServiceLanguage === "default") {
      alert("Please Select One Language");
      return;
    }

    if (
      roomservicePostingMethod === "" ||
      roomservicePostingMethod === "default"
    ) {
      alert("Please Select a Posting Method");
      return;
    }

    const roomServiceMenuTableRows = document.querySelectorAll(
      "#room-service-table tbody tr"
    ).length;
    if (roomServiceMenuTableRows === 0) {
      alert("Please Add Atlease One Menu Configuration");
      return;
    }

    //for menu link
  } else if (selectQRFor === "Menu Link") {
    if (menuLinkLanguage === "" || menuLinkLanguage === "default") {
      alert("Please Select a Language ASsaS");
      return;
    }

    const menuLinkMenuTableRows = document.querySelectorAll(
      "#menu-link-table tbody tr"
    ).length;
    if (menuLinkMenuTableRows === 0) {
      alert("Please Add Atlease One Menu Configuration");
      return;
    }
  }

  console.log("submitted");

  // Populating the data

  const tableBody = document.querySelector("#qr-code-table tbody");

  if (selectQRFor === "Dine In") {
    selectedTables.forEach((table) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td><input type="checkbox"/></td>
      <td>${selectQRFor} [${dineinFloor} - ${table}]</td>
      <td>${dineinOutlet}</td>
  
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
    });
  } else if (selectQRFor === "Room Service") {
    roomServiceOutlets.forEach((outlet) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><input type="checkbox"/></td>
        <td>${selectQRFor}</td>
        <td>${outlet.textContent.trim()}</td>
    
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
    });
  } else if (selectQRFor === "Menu Link") {
    menuLinkOutlets.forEach((outlet) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><input type="checkbox"/></td>
        <td>${selectQRFor}</td>
        <td>${outlet.textContent.trim()}</td>
    
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
    });
  }

  mainPopupDisable();
  deleteAllEnable();
  recordCount();
  noDataDisplay();
});

//-----------------------------delete function for all delete buttons-----------------------------

document
  .querySelector("#qr-code-table tbody")
  .addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
      const checkedBoxes = document.querySelectorAll(
        "#qr-code-table tbody input[type='checkbox']:checked"
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
  const rowLength = document.querySelectorAll("#qr-code-table tbody tr").length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
