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
  $("#on-and-off-table").DataTable({
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

const searchBar = document.querySelector("#online-ordering-search");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#on-and-off-table tbody tr");
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

document.addEventListener("DOMContentLoaded", function () {
  const tableRows = document.querySelectorAll("#on-and-off-table tbody tr");
  const noDataMessage = document.querySelector("#no-data");

  if (tableRows.length === 0) {
    noDataMessage.style.display = "block"; // Show message if no rows
  } else {
    noDataMessage.style.display = "none"; // Hide message if rows are present
  }
});

// select business sources

const businessSources = [
  "Swiggy",
  "Zomato",
  "EatSure",
  "Uber Eats",
  "Domino's",
  "McDonald's",
  "Pizza Hut",
  "KFC",
  "Burger King",
  "Faasos",
  "Subway",
  "Dunzo",
  "Blinkit",
  "Zepto",
  "BigBasket",
  "FreshMenu",
  "Box8",
  "MojoPizza",
  "Behrouz Biryani",
  "Oven Story",
];

const selectSource = document.querySelector("#select-source");

businessSources.forEach((source) => {
  const option = document.createElement("option");
  option.value = source.toLowerCase().trim();
  option.textContent = source;

  selectSource.appendChild(option);
});

// select outlet

const restaurants = [
  "Barbeque Nation",
  "The Cheesecake Factory",
  "Olive Garden",
  "Buffalo Wild Wings",
  "TGI Fridays",
  "The Capital Grille",
  "Morton's The Steakhouse",
  "Texas Roadhouse",
  "Outback Steakhouse",
  "P.F. Chang's",
  "Benihana",
  "Shake Shack",
  "Five Guys",
  "In-N-Out Burger",
  "Hard Rock Cafe",
  "IHOP",
  "Denny's",
  "Cracker Barrel",
  "The Table",
  "Yauatcha",
  "Bukhara",
  "Indian Accent",
  "Gajalee",
  "Karavalli",
  "The Bombay Canteen",
  "Farzi Cafe",
  "Social",
  "Smoke House Deli",
  "Mamagoto",
  "Jamavar",
];

const selectOutlet = document.querySelector("#select-outlet");
restaurants.forEach((restaurant) => {
  const option = document.createElement("option");
  option.value = restaurant.toLowerCase().trim();
  option.textContent = restaurant;

  selectOutlet.appendChild(option);
});
