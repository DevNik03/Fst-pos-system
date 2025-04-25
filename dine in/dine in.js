// navbar enable

const navbar = document.querySelector("nav");
const navbarOverlay = document.querySelector("#navbar-overlay");
const navbarEnableButton = document.querySelector("#navbar-enable-button");
const navScroll = document.querySelector(".navbar-main");

navbarEnableButton.addEventListener("click", () => {
  navbar.style.display = "grid";
  navbarOverlay.style.display = "flex";
  navScroll.scrollTop = 0;
});

navbarOverlay.addEventListener("click", () => {
  navbar.style.display = "none";
  navbarOverlay.style.display = "none";
});

//navbar search

const searchInput = document.querySelector("#navbar-search");
const navButtons = document.querySelectorAll(".navbar-buttons");
const navbarOptions = document.querySelectorAll(".navbar-options");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  navbarOptions.forEach((option) => {
    let hasVisibleButton = false;

    option.querySelectorAll(".navbar-buttons").forEach((button) => {
      const buttonText = button.querySelector("p").textContent.toLowerCase();

      if (buttonText.includes(searchValue)) {
        button.style.display = "flex";
        hasVisibleButton = true;
      } else {
        button.style.display = "none";
      }
    });

    // If at least one button is visible, show the option; otherwise, hide it
    option.style.display = hasVisibleButton ? "flex" : "none";
  });
});

// NavBar buttons functions
document.getElementById('dine-in-btn').addEventListener('click', function () {
  window.location.href = '../dine in/dine in.html'; 
});
document.getElementById('take-away-btn').addEventListener('click', function () {
  window.location.href = '../take away/take away.html'; 
});
document.getElementById('delivery-manager-btn').addEventListener('click', function () {
  window.location.href = '../delivery manager/delivery manager.html'; 
});
document.getElementById('no-charge-btn').addEventListener('click', function () {
  window.location.href = '../no charge/no charge.html'; 
});
document.getElementById('order-summary-btn').addEventListener('click', function () {
  window.location.href = '../order summary/order summary.html'; 
});
document.getElementById('dashboard-btn').addEventListener('click', function () {
  window.location.href = '../dashboard/dashboard.html'; 
});
document.getElementById('reports-btn').addEventListener('click', function () {
  window.location.href = '../reports/reports.html'; 
});
document.getElementById('account-lookup-btn').addEventListener('click', function () {
  window.location.href = '../account lookup/account lookup.html'; 
});
document.getElementById('transaction-lock-btn').addEventListener('click', function () {
  window.location.href = '../transaction lock/transaction lock.html'; 
});
document.getElementById('blocked-device-btn').addEventListener('click', function () {
  window.location.href = '../blocked devices/blocked devices.html'; 
});
document.getElementById('shift-manager-btn').addEventListener('click', function () {
  window.location.href = '../shift manager/shift manager.html'; 
});
document.getElementById('day-close-btn').addEventListener('click', function () {
  window.location.href = '../day close/day close.html'; 
});
document.getElementById('no-sale-btn').addEventListener('click', function () {
  window.location.href = '../no sale/no sale.html'; 
});
document.getElementById('expense-voucher-btn').addEventListener('click', function () {
  window.location.href = '../expense voucher/expense voucher.html'; 
});
document.getElementById('income-voucher-btn').addEventListener('click', function () {
  window.location.href = '../income voucher/income voucher.html'; 
});
document.getElementById('item-lookup-btn').addEventListener('click', function () {
  window.location.href = '../item lookup/item lookup.html'; 
});
document.getElementById('guest-database-btn').addEventListener('click', function () {
  window.location.href = '../guest database/guest database.html'; 
});

//-------------------------------header-------------------------------

// Select Outlet Popup Elements
const selectionPopup = document.querySelector("#selection-popup");
const selectionPopupOverlay = document.querySelector(
  "#selection-popup-overlay"
);
const selectionPopupClose = document.querySelector("#selection-popup-close");
const selectionPopupScroll = document.querySelector(".selection-popup-scroll");
const selectionPopupForm = document.querySelector("#selection-popup-form");
const selectionPopupHeading = document.querySelector(
  ".selection-popup-heading"
);
const selectOutletOpen = document.querySelector("#select-outlet-open"); // Now used in JavaScript

// Function to Open & Populate the Popup
function openSelectionPopup(type) {
  const listContainer = document.querySelector(".main-ul");
  listContainer.innerHTML = ""; // Clear previous items before adding new ones

  if (type === "outlet") {
    selectionPopupHeading.innerHTML = `<h4 class="selection-popup-heading">Select Outlet</h4>`;

    const outletNames = [
      "The Grand Oasis",
      "Sunset Resort & Spa",
      "Oceanview Hotel",
      "Mountain Retreat Inn",
      "Crystal Palace Hotel",
      "Luxe Suites",
      "Riverside Haven",
      "Starlight Boutique Hotel",
      "Luxe Suites",
      "Riverside Haven",
      "Starlight Boutique Hotel",
    ];

    outletNames.forEach((outlet, index) => {
      const list = document.createElement("li");
      list.classList.add("popup-list");

      list.innerHTML = `
        <input id="outlet-${index}" type="radio" name="select-outlet" />
        <label for="outlet-${index}">${outlet}</label>
      `;

      listContainer.appendChild(list);
    });

    //
  } else if (type === "owner") {
    selectionPopupHeading.innerHTML = `<h4 class="selection-popup-heading">Select Owner</h4>`;

    const names = ["Alice", "Bob", "Charlie", "David", "Emma"];

    names.forEach((name, index) => {
      const list = document.createElement("li");
      list.classList.add("popup-list");

      list.innerHTML = `
        <input id="owner-${index}" type="radio" name="select-owner" />
        <label for="owner-${index}">${name}</label>
      `;

      listContainer.appendChild(list);
    });
  }

  // Show the popup
  selectionPopup.style.display = "grid";
  selectionPopupOverlay.style.display = "flex";
  selectionPopupScroll.scrollTop = 0;
}

// Close Popup
selectionPopupClose.addEventListener("click", (event) => {
  event.preventDefault();
  selectionPopup.style.display = "none";
  selectionPopupOverlay.style.display = "none";
  selectionPopupForm.reset();
});

// Reset Event (Executed when form is reset)
selectionPopupForm.addEventListener("reset", () => {
  setTimeout(() => {
    document.querySelectorAll(".popup-list").forEach((list) => {
      list.style.display = "flex"; // Show all options again
    });
  }, 10);
});

// select outlet search

const selectionPopupSearch = document.querySelector("#selection-popup-search");
selectionPopupSearch.addEventListener("input", () => {
  const searchValue = selectionPopupSearch.value.toLowerCase().trim();

  const lists = document.querySelectorAll(".popup-list");
  lists.forEach((list) => {
    const label = list.querySelector("label");

    if (label.textContent.toLowerCase().trim().includes(searchValue)) {
      list.style.display = "";
    } else if (searchValue === "") {
      list.style.display = "";
    } else {
      list.style.display = "none";
    }
  });
});

//popover

const popover = document.querySelector(".popover");
const popoverOverlay = document.querySelector("#popover-overlay");
const popoverEnable = document.querySelector("#popover-enable");

popoverEnable.addEventListener("click", () => {
  popover.style.display = "flex";
  popoverOverlay.style.display = "flex";
});

popoverOverlay.addEventListener("click", () => {
  popover.style.display = "none";
  popoverOverlay.style.display = "none";
});

// switch to back button 
document.getElementById('switch-to-back-btn').addEventListener('click', function() {
  window.location.href ='../Back Office/master option/Outlet/outlet.html';
});

//---------------------------logout-popup-------------------------------------

const warningPopup = document.querySelector("#warning-popup");
const warningPopupOverlay = document.querySelector("#warning-popup-overlay");

function warningCall(warning) {
  const warningPopup = document.querySelector("#warning-popup");
  const warningPopupOverlay = document.querySelector("#warning-popup-overlay");
  const warningHeading = document.querySelector("#warning-heading");
  const warningMessage = document.querySelector("#warning-message");
  const warningFooter = document.querySelector("#warning-footer");

  if (warning === "logout") {
    warningHeading.innerText = "Confirm";
    warningMessage.innerText = "Are You Sure You want To Logout?";
    warningFooter.innerHTML = `
      <button id="logout-confirm-button" class="footer-buttons save-button">
        Logout
      </button>
    `;
  } else if (warning === "action") {
    warningHeading.innerText = "Select An Order";
    warningMessage.innerText = "Please Select An Order To Continue!";
  }

  // Show the popup
  warningPopup.style.display = "grid";
  warningPopupOverlay.style.display = "grid";
}

// Close button event listener
document.querySelector("#warning-popup-close").addEventListener("click", () => {
  document.querySelector("#warning-popup").style.display = "none";
  document.querySelector("#warning-popup-overlay").style.display = "none";
});

// Call the function when the logout button is clicked
document.querySelector("#logout-button").addEventListener("click", () => {
  warningCall("logout");
});
// Call the function when the action button is clicked

const actionButtons = document.querySelectorAll(".action-button");
actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    warningCall("action");
  });
});

//---------------------main container--------------------------------------

//--------------------------------add table popup---------------------------------------

const addTablePopup = document.querySelector("#add-table-popup");
const addTableOverlay = document.querySelector("#add-table-overlay");
const addTableForm = document.querySelector("#add-table-form");
const addTableButton = document.querySelector(".add-table-button");
const addTableClose = document.querySelector("#add-table-close");

addTableButton.addEventListener("click", () => {
  addTablePopup.style.display = "grid";
  addTableOverlay.style.display = "flex";
});

addTableClose.addEventListener("click", () => {
  addTablePopup.style.display = "none";
  addTableOverlay.style.display = "none";
  addTableForm.reset();
});

//add table submit logic

const submitButton = document.querySelector("#add-table-submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.querySelector("#table-name").value.trim();
  const shortCode = document.querySelector("#table-short-code").value.trim();
  const waiterName = document.querySelector("#table-waiter").value.trim();

  // Validation
  if (name === "" || shortCode === "" || waiterName === "") {
    alert("Please fill all fields!");
    return;
  }

  // Creating a new table
  const main = document.querySelector("main");
  const div = document.createElement("div");
  div.setAttribute("class", "dinein-table");

  div.innerHTML = `
    <div class="table-info">
      <div class="table-number">${name}</div>
      <div class="waiter-name">${waiterName}</div>
    </div>
    <div class="table-status">
      <button class="start-new-order" title="Start New Order">
        <span class="material-symbols-outlined"> add </span>
      </button>
    </div>
  `;

  main.appendChild(div);

  // Close the popup and reset form
  addTablePopup.style.display = "none";
  addTableOverlay.style.display = "none";
  addTableForm.reset();

  updateActiveCount();
  updateVacantCount();
});

//new order

const orderInfoPopup = document.querySelector("#order-information-popup");
const orderInfoOverlay = document.querySelector("#order-information-overlay");
const orderInfoClose = document.querySelector("#order-information-close");
const orderInfoFrom = document.querySelector("#order-information-form");
let activeTable = null;

// Event delegation for dynamically added tables
document.addEventListener("click", (event) => {
  if (event.target.closest(".start-new-order")) {
    orderInfoPopup.style.display = "grid";
    orderInfoOverlay.style.display = "flex";

    activeTable = event.target.closest(".dinein-table");
  }
});

orderInfoClose.addEventListener("click", () => {
  orderInfoPopup.style.display = "none";
  orderInfoOverlay.style.display = "none";
  orderInfoFrom.reset();
});

//populating waiter select

const waiterNames = ["Alice", "Bob", "Charlie", "David", "Emma"];
const waiterSelect = document.querySelector("#ord-info-waiter");

waiterNames.forEach((name) => {
  const option = document.createElement("option");
  option.value = name.trim();
  option.textContent = name;

  waiterSelect.appendChild(option);
});

//handling the submit form button

const orderInfoSubmit = document.querySelector("#order-info-submit");
orderInfoSubmit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents page refresh

  if (activeTable) {
    const waiterName = document.querySelector("#ord-info-waiter").value.trim();
    const guestCount = document.querySelector("#guest-quantity").value.trim();

    // Validation
    if (waiterName === "" || waiterName === "default") {
      alert("Select a Waiter");
      return;
    } else if (guestCount === "") {
      alert("Enter Guest Count");
      return;
    }

    // Get table name correctly
    const tablename = activeTable.querySelector(".table-number").textContent;

    // Update the table's innerHTML while preserving the table name
    activeTable.innerHTML = `
      <div class="table-info active-order">
        <div class="table-active-time">Time</div>
        <div class="table-number active-table">${tablename}</div>
        <div class="waiter-name">${waiterName}</div>
        <div class="guest-count">
          <span class="material-symbols-outlined"> person </span>${guestCount}
        </div>
      </div>
      <div class="table-status">
        <div class="running-orders">1 Running</div>
        <button class="start-new-order" title="Start New Order">
          <span class="material-symbols-outlined"> add </span>
        </button>
      </div>
    `;

    // Close the order info popup and reset form
    orderInfoPopup.style.display = "none";
    orderInfoOverlay.style.display = "none";
    orderInfoFrom.reset();

    updateActiveCount();
    updateVacantCount();
  }
});

// table status bar update
// for occupied tables

const occupiedTables = document.querySelector("#occupied-tables");

// Function to count active tables
function updateActiveCount() {
  const activeTables = document.querySelectorAll(".table-info.active-order"); // Select only active tables
  occupiedTables.textContent = activeTables.length; // Update count
}

updateActiveCount();

// for vacant tables

const vacantTables = document.querySelector("#vacant-tables");

function updateVacantCount() {
  const allTables = document.querySelectorAll(".dinein-table");
  const activeTables = document.querySelectorAll(
    ".dinein-table .table-info.active-order"
  );

  vacantTables.textContent = allTables.length - activeTables.length;
}

updateVacantCount();
