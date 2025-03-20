// navbar enable

const navbar = document.querySelector("nav");
const navbarOverlay = document.querySelector("#navbar-overlay");
const navbarEnableButton = document.querySelector("#navbar-enable-button");
const navScroll = document.querySelector(".navbar-main");

// Open navbar on button click
navbarEnableButton.addEventListener("click", () => {
  navbar.style.left = "0px"; // Slide in
  navbarOverlay.style.display = "flex";
  navScroll.scrollTop = 0;
});

// Close navbar when clicking overlay
navbarOverlay.addEventListener("click", () => {
  navbar.style.left = "-500px";
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
  popover.style.right = "0px";
  popoverOverlay.style.display = "flex";
});

popoverOverlay.addEventListener("click", () => {
  popover.style.right = "-1000px";
  popoverOverlay.style.display = "none";
});

//---------------------logout-popup-----------------
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