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
const bottomScroll = document.querySelector(".nav-setting-options");
document.addEventListener("DOMContentLoaded", () => {
  bottomScroll.scrollTop = bottomScroll.scrollHeight;
});

// add  menu confi

const addMenuOverlay = document.querySelector("#add-menu-config-overlay");
const addMenuPopup = document.querySelector("#add-menu-config-popup");
const addMenuClose = document.querySelector("#menu-config-close");
const addMenuEnablebuttons = document.querySelectorAll(".menu-popup");

addMenuEnablebuttons.forEach((button) => {
  button.addEventListener("click", () => {
    addMenuOverlay.style.display = "flex";
    addMenuPopup.style.display = "grid";
  });
});

addMenuClose.addEventListener("click", (event) => {
  event.preventDefault();
  addMenuOverlay.style.display = "none";
  addMenuPopup.style.display = "none";
});

//add logo

const logoOverlay = document.querySelector("#add-logo-overlay");
const logoPopup = document.querySelector("#add-logo-popup");
const logoClose = document.querySelector("#add-logo-close");
const logoEnable = document.querySelector("#settings-button");

logoEnable.addEventListener("click", () => {
  logoOverlay.style.display = "flex";
  logoPopup.style.display = "grid";
});

logoClose.addEventListener("click", () => {
  logoOverlay.style.display = "none";
  logoPopup.style.display = "none";
});

const popupEnableButton = document.querySelector("#qr-popup-button");
const popupCloseButton = document.querySelector("#close-qr-popup");
const popup = document.querySelector("#add-qr-popup");
const overlay = document.querySelector("#add-qr-overlay");
const qrForm = document.querySelector("#add-qr-form");
const scrollableArea = document.querySelector(".popup-main");

function openQRPopup() {
  popup.style.display = "grid";
  overlay.style.display = "flex";
}

function closeQRPopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  qrForm.reset();
  document.querySelector("#dinein").style.display = "none";
  document.querySelector("#room-service").style.display = "none";
  document.querySelector("#menu-link").style.display = "none";
  clearTable();
}

popupEnableButton.addEventListener("click", () => {
  openQRPopup();
});

popupCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  closeQRPopup();
});

// addLogoOverlay.addEventListener("click", () => {
//   addLogoOverlay.style.display = "none";
//   addLogoText.style.display = "none";
// });

// select outlet

const outlets = [
  "The Gourmet Kitchen",
  "Spice Symphony",
  "Sushi Haven",
  "The Steakhouse",
  "Taco Fiesta",
  "Le Petit Bistro",
  "Dragon Wok",
  "Green Earth Cafe",
  "Mediterraneo",
  "Smoke & Grill",
];

const outletSelect = document.querySelector("#outlet-select");
outlets.forEach((outlet) => {
  const outletOption = document.createElement("option");
  outletOption.value = outlet.toLowerCase();
  outletOption.innerText = outlet;

  outletSelect.appendChild(outletOption);
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
  // Initialize DataTable with sorting, but no search bar or entries option
  $("#qr-code-generator-table").DataTable({
    paging: false, // Disable pagination (entries per page)
    searching: false, // Disable search bar
    info: false, // Disable "Showing 1 to X of Y entries" info text
    ordering: true, // Enable sorting
    order: [], // Prevent default sorting on page load
  });
});

// // delete record button

// const checkbox = document.querySelectorAll("#delete-record-checkbox");
// const deleteRecordBtn = document.querySelector(".delete-records-button");

// checkbox.forEach((checkbox) => {
//   checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//       deleteRecordBtn.style.display = "flex";
//     } else {
//       deleteRecordBtn.style.display = "none";
//     }
//   });
// });

// searchbar

const searchBar = document.querySelector("#qr-code-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();

  const tableRows = document.querySelectorAll(
    "#qr-code-generator-table tbody tr"
  );

  tableRows.forEach((row) => {
    let isMatch = false;
    const tableDatas = row.querySelectorAll("td");
    tableDatas.forEach((data) => {
      if (data.textContent.trim().toLowerCase().includes(searchValue)) {
        isMatch = true;
      }
    });
    if (isMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// dinein option

const QRCodeFor = document.querySelector("#qr-code");

QRCodeFor.addEventListener("change", () => {
  if (QRCodeFor.value === "dinein") {
    document.querySelector("#dinein").style.display = "flex";
    document.querySelector("#room-service").style.display = "none";
    document.querySelector("#menu-link").style.display = "none";
  } else if (QRCodeFor.value === "room sevice") {
    document.querySelector("#dinein").style.display = "none";
    document.querySelector("#room-service").style.display = "flex";
    document.querySelector("#menu-link").style.display = "none";
  } else if (QRCodeFor.value === "menu link") {
    document.querySelector("#dinein").style.display = "none";
    document.querySelector("#room-service").style.display = "none";
    document.querySelector("#menu-link").style.display = "flex";
  } else {
    document.querySelector("#dinein").style.display = "none";
    document.querySelector("#room-service").style.display = "none";
    document.querySelector("#menu-link").style.display = "none";
  }
});

function clearTable() {
  const availableTableBody = document.querySelector(".available-table tbody");

  availableTableBody.innerHTML =
    '<tr><td colspan="100%">Selected floor has no tables</td></tr>';
}

// select outlet
const hotels = [
  {
    name: "Downtown Diner",
    menu: "Main Menu",
    floors: [
      {
        name: "Ground Floor",
        tables: [{ tableNumber: 1 }, { tableNumber: 2 }, { tableNumber: 3 }],
      },
      {
        name: "First Floor",
        tables: [
          { tableNumber: 1 },
          { tableNumber: 2 },
          { tableNumber: 3 },
          { tableNumber: 4 },
        ],
      },
      {
        name: "Rooftop",
        tables: [{ tableNumber: 1 }, { tableNumber: 2 }, { tableNumber: 3 }],
      },
    ],
  },
  {
    name: "Seaside Café",
    menu: "Coastal Delights",
    floors: [
      {
        name: "Outdoor Patio",
        tables: [
          { tableNumber: 1 },
          { tableNumber: 2 },
          { tableNumber: 3 },
          { tableNumber: 4 },
        ],
      },
      {
        name: "Indoor Hall",
        tables: [{ tableNumber: 1 }, { tableNumber: 2 }, { tableNumber: 3 }],
      },
    ],
  },
  {
    name: "Mountain View Restaurant",
    menu: "Gourmet Specials",
    floors: [
      {
        name: "Lobby Area",
        tables: [{ tableNumber: 1 }, { tableNumber: 2 }],
      },
      {
        name: "Terrace",
        tables: [
          { tableNumber: 1 },
          { tableNumber: 2 },
          { tableNumber: 3 },
          { tableNumber: 4 },
          { tableNumber: 5 },
        ],
      },
    ],
  },
  {
    name: "City Lights Bar",
    menu: "Cocktail & Snacks",
    floors: [
      {
        name: "Main Bar",
        tables: [{ tableNumber: 1 }, { tableNumber: 2 }, { tableNumber: 3 }],
      },
      {
        name: "VIP Lounge",
        tables: [{ tableNumber: 1 }, { tableNumber: 2 }],
      },
    ],
  },
  {
    name: "Garden Bistro",
    menu: "Organic & Vegan",
    floors: [
      {
        name: "Outdoor Garden",
        tables: [
          { tableNumber: 1 },
          { tableNumber: 2 },
          { tableNumber: 3 },
          { tableNumber: 4 },
        ],
      },
      {
        name: "Greenhouse Dining",
        tables: [{ tableNumber: 1 }, { tableNumber: 2 }, { tableNumber: 3 }],
      },
    ],
  },
];

const selectOutlet = document.querySelector("#add-qr-outlet");
const selectMenu = document.querySelector("#add-qr-menu");
const selectFloor = document.querySelector("#add-qr-floor");
const selectTable = document.querySelector("#add-qr-table tbody");

// Populate Outlet Dropdown
hotels.forEach((hotel) => {
  const option = document.createElement("option");
  option.value = hotel.name.trim();
  option.textContent = hotel.name;
  selectOutlet.appendChild(option);
});

// Handle Outlet Selection
selectOutlet.addEventListener("change", function () {
  const selectedOutlet = hotels.find(
    (outlet) => outlet.name.trim() === this.value
  );

  // Clear previous options
  selectFloor.innerHTML = '<option value="">Select Floor</option>';
  selectTable.innerHTML = ""; // Clear table selection as well
  selectMenu.value = "";

  if (selectedOutlet) {
    selectMenu.value = selectedOutlet.menu; // Set menu value

    selectedOutlet.floors.forEach((floor) => {
      let option = document.createElement("option");
      option.value = floor.name.trim();
      option.textContent = floor.name;
      selectFloor.appendChild(option);
    });

    selectFloor.disabled = false; // Enable floor dropdown
  } else {
    selectFloor.disabled = true;
  }
});

// Handle Floor Selection
selectFloor.addEventListener("change", function () {
  const selectedOutlet = hotels.find(
    (outlet) => outlet.name.trim() === selectOutlet.value
  );

  if (!selectedOutlet) return;

  const selectedFloor = selectedOutlet.floors.find(
    (floor) => floor.name.trim() === this.value
  );

  // Clear previous tables
  selectTable.innerHTML = "";

  if (selectedFloor) {
    selectedFloor.tables.forEach((table) => {
      let row = document.createElement("tr");

      const inputTD = document.createElement("td");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = `table-${table.tableNumber}`;
      input.value = table.tableNumber;

      inputTD.appendChild(input);

      const labelTD = document.createElement("td");
      const label = document.createElement("label");
      label.setAttribute("for", `table-${table.tableNumber}`);
      label.textContent = `Table ${table.tableNumber}`;

      labelTD.appendChild(label);

      row.appendChild(inputTD);
      row.appendChild(labelTD);

      selectTable.appendChild(row);
    });

    selectTable.style.display = "table"; // Show the table if hidden
  }
});

//populating QR Rate
const rateNames = [
  "Standard Rate",
  "Discounted Rate",
  "Peak Hour Rate",
  "Member Rate",
  "Wholesale Rate",
  "Seasonal Rate",
];

const QRrateSelects = document.querySelectorAll(".rate-select");

QRrateSelects.forEach((select) => {
  rateNames.forEach((rate) => {
    const option = document.createElement("option");
    option.value = rate.trim();
    option.textContent = rate;

    select.appendChild(option);
  });
});

// business sources
// Business sources
const foodDeliverySources = [
  "Zomato",
  "Swiggy",
  "Uber Eats",
  "DoorDash",
  "Grubhub",
];

// Select the <tbody> once
const BusinessSourceTables = document.querySelectorAll(
  ".business-source-select-table tbody"
);
BusinessSourceTables.forEach((table) => {
  foodDeliverySources.forEach((source) => {
    const businessSourceRow = document.createElement("tr");

    // Checkbox column
    const busSrcChkTD = document.createElement("td");
    const busSrcCheckbox = document.createElement("input");
    busSrcCheckbox.type = "checkbox";
    busSrcCheckbox.setAttribute(
      "id",
      source.toLowerCase().replace(/\s+/g, "-")
    );
    busSrcCheckbox.setAttribute("class", "checkbox-input");
    busSrcChkTD.appendChild(busSrcCheckbox);

    // Label column
    const busSrcLabelTD = document.createElement("td");
    const busSrcLabel = document.createElement("label");
    busSrcLabel.setAttribute("for", source.replace(/\s+/g, "-"));
    busSrcLabel.textContent = source;
    busSrcLabelTD.appendChild(busSrcLabel);

    // Append columns to row
    businessSourceRow.appendChild(busSrcChkTD);
    businessSourceRow.appendChild(busSrcLabelTD);

    // Append row to tbody
    table.appendChild(businessSourceRow);
  });
});

// Payment methods
const paymentOptions = [
  "Credit Card",
  "Debit Card",
  "PayPal",
  "Google Pay",
  "Apple Pay",
  "UPI",
];

// Select the tbody element where rows will be appended
const paymentMethodTables = document.querySelectorAll(
  ".payment-select-table tbody"
);

paymentMethodTables.forEach((table) => {
  paymentOptions.forEach((option) => {
    const paymentMethodTR = document.createElement("tr");

    // For checkbox
    const paymentCheckboxTD = document.createElement("td");
    const paymentCheckbox = document.createElement("input");
    paymentCheckbox.type = "checkbox";
    paymentCheckbox.setAttribute("id", option.replace(/\s+/g, "-"));
    paymentCheckbox.setAttribute("class", "checkbox-input");
    paymentCheckboxTD.appendChild(paymentCheckbox);

    // For label
    const paymentMethodLabelTD = document.createElement("td");
    const paymentMethodLabel = document.createElement("label");
    paymentMethodLabel.setAttribute(
      "for",
      option.toLowerCase().replace(/\s+/g, "-")
    );
    paymentMethodLabel.textContent = option;
    paymentMethodLabelTD.appendChild(paymentMethodLabel);

    // Append checkbox and label columns to the row
    paymentMethodTR.appendChild(paymentCheckboxTD);
    paymentMethodTR.appendChild(paymentMethodLabelTD);

    // Append row to tbody
    table.appendChild(paymentMethodTR);
  });
});
// Hour options
const hours = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

// Select all select elements with the id "select-hour"
const selectHours = document.querySelectorAll(".select-hour");

selectHours.forEach((selectHour) => {
  // Loop through each hour and create an option element
  hours.forEach((hour) => {
    const hourOption = document.createElement("option");
    hourOption.value = hour; // Set the value of the option
    hourOption.innerText = hour; // Set the visible text of the option

    // Append the option to the select element
    selectHour.appendChild(hourOption);
  });
});

// minute option
const Minutes = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];
const selectMinutes = document.querySelectorAll(".select-minute");

selectMinutes.forEach((selectMinute) => {
  Minutes.forEach((minute) => {
    const minuteOption = document.createElement("option");
    minuteOption.value = minute;
    minuteOption.innerText = minute;

    selectMinute.appendChild(minuteOption);
  });
});

// const days = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// function setupDayToggle(day) {
//   const dayCheckbox = document.querySelector(`#${day}`);
//   const daySelectContainer = document.querySelector(
//     `#${day} ~ .day-select .day-select-container`
//   );
//   const daySelectButton = document.querySelector(
//     `#${day} ~ .day-select .day-select-buttons`
//   );

//   // Set initial state
//   if (!dayCheckbox.checked) {
//     daySelectButton.classList.add("disabled");
//     daySelectContainer.style.display = "none";
//   }

//   // Checkbox change event
//   dayCheckbox.addEventListener("change", () => {
//     if (!dayCheckbox.checked) {
//       daySelectButton.classList.add("disabled");
//       daySelectContainer.style.display = "none";
//     } else {
//       daySelectButton.classList.remove("disabled");
//     }
//   });

//   // Button click event
//   daySelectButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (dayCheckbox.checked) {
//       const isExpanded =
//         daySelectButton.getAttribute("aria-expanded") === "true";
//       daySelectButton.setAttribute("aria-expanded", !isExpanded);
//       daySelectContainer.style.display = isExpanded ? "none" : "grid";
//     }
//   });
// }

// Apply to all days
// days.forEach(setupDayToggle);

// QR Code submit button

document
  .querySelector("#qr-submit-button")
  .addEventListener("click", (event) => {
    event.preventDefault();

    // Get form values
    const QRCodeFor = document.querySelector("#qr-code").value.trim();
    const outlet = document.querySelector("#add-qr-outlet").value.trim();
    const menu = document.querySelector("#add-qr-menu").value.trim();
    const floor = document.querySelector("#add-qr-floor").value.trim();

    console.log("QRCodeFor:", QRCodeFor);
    console.log("Outlet:", outlet);
    console.log("Menu:", menu);
    console.log("Floor:", floor);

    // Validate mandatory fields
    if (!QRCodeFor || !outlet || !menu || !floor) {
      alert("Please fill in all mandatory fields before submitting.");
      return;
    }

    function paymentCheck() {
      const paymentTable = document.querySelector(
        "#payment-method-table tbody"
      );
      const paymentCheckboxes = paymentTable.querySelector(
        "input[type='checkbox']:checked"
      );
      return Array.from(paymentCheckboxes).some((checkbox) => checkbox.checked);
    }

    if (!paymentCheck()) {
      alert("Select Atleast One Payment Method");
      return;
    }

    // Get checked tables
    const checkedTables = document.querySelectorAll(
      "#add-qr-table input[type='checkbox']:checked"
    );

    console.log("Checked Tables:", checkedTables);

    if (checkedTables.length === 0) {
      alert("Please select at least one table.");
      return;
    }

    // Get the table where QR details will be displayed
    const addQRTable = document.querySelector("#qr-code-generator-table tbody");

    checkedTables.forEach((table) => {
      const tableName =
        table.value || table.nextElementSibling.textContent.trim();

      // Create a new row for each selected table
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${QRCodeFor} [${floor} - Table ${tableName}]</td>
      <td>${outlet}</td>
      <td>
        <button class="action-buttons edit-btn" title="Edit">
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <button class="action-buttons delete-btn" title="Delete">
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </td>
    `;

      addQRTable.appendChild(row);
    });

    // Close the popup after successful submission
    document.querySelector("#add-qr-overlay").style.display = "none";
    document.querySelector("#add-qr-popup").style.display = "none";

    // Reset form fields
    document.querySelector("#add-qr-form").reset();
  });
