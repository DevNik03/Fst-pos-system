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
document.getElementById('blocked-devices-btn').addEventListener('click', function () {
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

// Select all filter buttons
const orderFilterButtons = document.querySelectorAll(".order-filter-buttons");

orderFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    orderFilterButtons.forEach((btn) =>
      btn.classList.remove("active-header-button")
    );

    // Add active class to the clicked button
    button.classList.add("active-header-button");
  });
});

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

selectionPopupSearch = document.querySelector("#selection-popup-search");
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

    // Add event listener after button is created
    setTimeout(() => {
      document
        .getElementById("logout-confirm-button")
        .addEventListener("click", () => {
          window.location.href = "/index.html";
        });
    }, 100);
  } else if (warning === "action") {
    warningHeading.innerText = "Select An Order";
    warningMessage.innerText = "Please Select An Order To Continue!";

    warningFooter.innerHTML = `
    <button id="okay-button" class="footer-buttons save-button">
      Okay
    </button>
  `;
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

//-------------------------------------status bar--------------------------------------

// Status buttons activate
const statusButtons = document.querySelectorAll(".status-button");

statusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the active class from all buttons
    statusButtons.forEach((btn) =>
      btn.classList.remove("active-status-button")
    );

    // Add active class to the clicked button
    button.classList.add("active-status-button");
  });
});

// main searchbar
const mainSearchBar = document.querySelector("#main-search");

mainSearchBar.addEventListener("input", () => {
  searchValue = mainSearchBar.value.trim().toLowerCase();
  let hasMatch = false; // Moved outside loop to track if any row matches

  const tableRows = document.querySelectorAll("#order-table tbody tr");

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
      hasMatch = true; // If at least one row matches, set to true
    } else {
      row.style.display = "none";
    }
  });

  // Show "No Records Found" only if no rows match
  document.querySelector("#no-records").style.display = hasMatch
    ? "none"
    : "flex";
});

//-----------------------action bar------------------------------------------
function updateRowCount() {
  const checkboxes = document.querySelectorAll(
    "#order-table tbody tr input[type='checkbox']"
  );
  const rowCount = document.querySelector(".row-count");

  const updateCount = () => {
    const checkedCount = document.querySelectorAll(
      "#order-table tbody tr input[type='checkbox']:checked"
    ).length;
    rowCount.innerHTML = checkedCount; // Update the count display
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateCount);
  });

  // Call updateCount() for the initial count display
  updateCount();
}

updateRowCount();

// disable some action buttons if the checked rows is greater than 2

const checkboxes = document.querySelectorAll(
  "#order-table tbody tr input[type='checkbox']"
);
const disableButtons = document.querySelectorAll(".disable-on-multiple");
const mergeButton = document.querySelector("#merge-order-button");

function updateButtonState() {
  const checkedCheckboxes = document.querySelectorAll(
    "#order-table tbody tr input[type='checkbox']:checked"
  ).length;

  if (checkedCheckboxes >= 2) {
    disableButtons.forEach((button) => {
      button.style.display = "none"; // Hides the buttons
      mergeButton.style.display = "flex";
    });
  } else {
    disableButtons.forEach((button) => {
      button.style.display = "flex"; // Shows the buttons
      mergeButton.style.display = "none";
    });
  }
}

// Attach event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateButtonState);
});

console.log(disableButtons.length); // Should log the number of buttons found

//---------------------main container--------------------------------------

// rotate icon
const sortDataElements = document.querySelectorAll(".sort-icon"); // Select all sort-data elements

sortDataElements.forEach((sortData) => {
  sortData.addEventListener("click", () => {
    const icon = sortData.querySelector(".rotate-icon");
    if (icon) {
      icon.classList.toggle("rotate-180");
    }
  });
});

// table sorting
document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#order-table");
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

// checking checkbox - select all functionality
const selectAllCheckbox = document.querySelector("#select-all-checkbox");

selectAllCheckbox.addEventListener("change", () => {
  const tableRows = document.querySelectorAll("#order-table tbody tr");
  tableRows.forEach((row) => {
    const checkbox = row.querySelector("input[type='checkbox']");
    if (checkbox) {
      checkbox.checked = selectAllCheckbox.checked; // Set checked state based on main checkbox
    }
  });
  updateRowCount();
  updateButtonState();
});

//
const orderInformationPopup = document.querySelector(
  "#order-information-popup"
);
const orderInformationOverlay = document.querySelector(
  "#order-information-overlay"
);
const orderInformationForm = document.querySelector("#order-information-form");
const orderInformationClose = document.querySelector(
  "#order-information-close"
);

function orderInformationPopupActive(orderType) {
  orderInformationPopup.style.display = "grid";
  orderInformationOverlay.style.display = "flex";

  if (orderType === "noCharge") {
    orderInformationForm.innerHTML = generateNoChargeForm();
  } else if (orderType === "takeAway") {
    orderInformationForm.innerHTML = generateTakeAwayForm();
  }
}

function generateTakeAwayForm() {
  return `
    <div class="heading"><p>Guest Details</p></div>
    <div class="form-group">
      <input class="text-input" type="search" id="guest-search" placeholder=" " />
      <label for="guest-search">Enter Guest Name, Mobile, Phone, or Email</label>
    </div>
    <div class="form-row">
      <div class="form-group">
        <input class="text-input" type="text" id="guest-name" placeholder=" " />
        <label for="guest-name">Guest Name</label>
      </div>
      <div class="form-group">
        <input class="text-input" type="text" id="guest-email" placeholder=" " />
        <label for="guest-email">Email</label>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <input class="text-input" type="text" id="guest-phone" placeholder=" " />
        <label for="guest-phone">Phone No.</label>
      </div>
      <div class="form-group">
        <input class="text-input" type="text" id="guest-registration" placeholder=" " />
        <label for="guest-registration">Guest Registration#</label>
      </div>
    </div>
    <div class="form-group">
      <input class="text-input" type="text" id="guest-remark" placeholder=" " />
      <label for="guest-remark">Remark</label>
    </div>
    <div class="form-row">
      <div class="form-group">
        <select class="main-select">
          <option value="default">Select Business Source</option>
        </select>
        <span class="main-select-label">Business Source</span>
      </div>
       <div class="form-group"></div>
    </div>
  `;
}

function generateNoChargeForm() {
  return `
  <div class="heading"><p>No Charge Account</p></div>
  <div class="form-group">
      <select id="ord-info-account" class="main-select">
        <option value="default">Select Account</option>
      </select>
  </div>
    <div class="heading"><p>Waiter Details</p></div>
    <div class="form-row">
      <div class="form-group">
        <select id="ord-info-waiter" class="main-select">
          <option value="default">Select Waiter</option>
        </select>
        <span class="main-select-label">Waiter</span>
      </div>
      <div class="form-group">
        <input class="text-input" type="text" id="waiter-code" placeholder=" " />
        <label for="waiter-code">Waiter Code</label>
      </div>
    </div>
    <div class="form-group">
      <input class="text-input" type="text" id="guest-quantity" placeholder=" " />
      <label for="guest-quantity">No. of Guests</label>
    </div>
    <div class="heading"><p>Guest Details</p></div>
    <div class="form-group">
      <input class="text-input" type="search" id="guest-search" placeholder=" " />
      <label for="guest-search">Enter Guest Name, Mobile, Phone, or Email</label>
    </div>
    <div class="form-row">
      <div class="form-group">
        <input class="text-input" type="text" id="guest-name" placeholder=" " />
        <label for="guest-name">Guest Name</label>
      </div>
      <div class="form-group">
        <input class="text-input" type="text" id="guest-email" placeholder=" " />
        <label for="guest-email">Email</label>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <input class="text-input" type="text" id="guest-phone" placeholder=" " />
        <label for="guest-phone">Phone No.</label>
      </div>
      <div class="form-group">
        <input class="text-input" type="text" id="guest-registration" placeholder=" " />
        <label for="guest-registration">Guest Registration#</label>
      </div>
    </div>
    <div class="form-group">
      <input class="text-input" type="text" id="guest-remark" placeholder=" " />
      <label for="guest-remark">Remark</label>
    </div>
    <div class="form-row">
      <div class="form-group">
        <select class="main-select">
          <option value="default">Select Business Source</option>
        </select>
        <span class="main-select-label">Business Source</span>
      </div>
      <div class="form-group">
      <input class="text-input" type="text" id="guest-reference" placeholder=" " />
        <label for="guest-reference">Reference#</label>
      </div>
    </div>
  `;
}

// Adding event listeners after ensuring buttons exist
document.addEventListener("DOMContentLoaded", function () {
  const noChargeButton = document.querySelector("#no-charge-button");
  const takeAwayButton = document.querySelector("#take-away-button");

  if (noChargeButton) {
    noChargeButton.addEventListener("click", () => {
      orderInformationPopupActive("noCharge");
    });
  }

  if (takeAwayButton) {
    takeAwayButton.addEventListener("click", () => {
      orderInformationPopupActive("takeAway");
    });
  }
});

// Close popup when clicking the close button
orderInformationClose.addEventListener("click", () => {
  orderInformationPopup.style.display = "none";
  orderInformationOverlay.style.display = "none";
  orderInformationForm.innerHTML = ""; // Clear form content
});
