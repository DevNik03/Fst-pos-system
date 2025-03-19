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

// // rotate 180

// const sortDataElements = document.querySelectorAll(".sort-data"); // Select all sort-data elements

// sortDataElements.forEach((sortData) => {
//   sortData.addEventListener("click", () => {
//     // Toggle the rotate-180 class on the icon inside the clicked sortData
//     const icon = sortData.querySelector(".rotate-icon");
//     if (icon) {
//       icon.classList.toggle("rotate-180");
//     }
//   });
// });

// $(document).ready(function () {
//   // Initialize DataTable with sorting, but no search bar or entries option
//   $("#rate-table").DataTable({
//     paging: false, // Disable pagination (entries per page)
//     searching: false, // Disable search bar
//     info: false, // Disable "Showing 1 to X of Y entries" info text
//     ordering: true, // Enable sorting
//     order: [], // Prevent default sorting on page load
//   });
// });

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

$(document).ready(function () {
  $("#rate-config-table").DataTable({
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

// checking if the table is empty

function checkEmptyTable() {
  const tableRows = document.querySelectorAll("#rate-config-table tbody tr");
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

const searchBar = document.querySelector("#rate-config-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#rate-config-table tbody tr");
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

// example
const foodItems = [
  {
    name: "Cheeseburger",
    cost: "10.00",
    price: "0.00",
    op: true,
    maxPrice: "0.00",
    minPrice: "0.00",
    ad: true,
    adm: false,
    it: false,
  },
  {
    name: "Pizza",
    cost: "8.00",
    price: "0.00",
    op: false,
    maxPrice: "0.00",
    minPrice: "0.00",
    ad: true,
    adm: true,
    it: false,
  },
  {
    name: "Salad",
    cost: "5.00",
    price: "0.00",
    op: true,
    maxPrice: "0.00",
    minPrice: "0.00",
    ad: false,
    adm: true,
    it: false,
  },
];

const taxOptions = ["GST", "IGST", "Tax 1", "Tax 2", "Tax New"];

// Function to populate the table

const tableBody = document.querySelector("#rate-config-table tbody");

foodItems.forEach((item) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${item.name}</td>
      <td><input class="text-inp" type="text" value="${item.cost}" /></td>
      <td><input class="text-inp" type="text" value="${item.price}" /></td>
      <td><input class="chk-inp" type="checkbox" ${
        item.op ? "checked" : ""
      } /></td>
      <td><input class="text-inp" type="text" value="${item.maxPrice}" /></td>
      <td><input class="text-inp" type="text" value="${item.minPrice}" /></td>
      <td><input class="chk-inp" type="checkbox" ${
        item.ad ? "checked" : ""
      } /></td>
      <td><input class="chk-inp" type="checkbox" ${
        item.adm ? "checked" : ""
      } /></td>
      <td><input class="chk-inp" type="checkbox" ${
        item.it ? "checked" : ""
      } /></td>
      <td>
        <select class="sel-tax">
          <option value="default">--Select--</option>
        </select>
      </td>
      <td>
        <button>Delete</button>
      </td>
    `;

  // Select the current row's select element
  const selectTax = row.querySelector(".sel-tax");

  taxOptions.forEach((tax) => {
    const taxOption = document.createElement("option");
    taxOption.value = tax.toLowerCase();
    taxOption.innerText = tax;

    selectTax.appendChild(taxOption);
  });

  tableBody.appendChild(row);
});
