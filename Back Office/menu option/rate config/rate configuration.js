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

//----------------------------- filterbar-----------------------------

const mainSearchBar = document.querySelector("#rate-config-search");
const noRecordsMessage = document.querySelector("#no-records");

mainSearchBar.addEventListener("input", () => {
  mainSearch();
});

function mainSearch() {
  const searchValue = mainSearchBar.value.toLowerCase().trim();
  const tableRows = document.querySelectorAll("#rate-config-table tbody tr");

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

//----------------------------- adding records to table-----------------------------

const tableData = [
  {
    name: "Item 1",
    cost: 10.0,
    price: 15.0,
    op: true,
    minPrice: 12.0,
    maxPrice: 20.0,
    ad: true,
    adm: false,
    it: false,
    taxGrp: "Tax Group 1",
    action: "Edit",
  },
  {
    name: "Item 2",
    cost: 8.0,
    price: 12.0,
    op: false,
    minPrice: 9.0,
    maxPrice: 16.0,
    ad: false,
    adm: true,
    it: true,
    taxGrp: "Tax Group 2",
    action: "Delete",
  },
  {
    name: "Item 3",
    cost: 20.0,
    price: 30.0,
    op: true,
    minPrice: 25.0,
    maxPrice: 40.0,
    ad: true,
    adm: true,
    it: false,
    taxGrp: "Tax Group 3",
    action: "Edit",
  },
  {
    name: "Item 4",
    cost: 5.0,
    price: 7.5,
    op: false,
    minPrice: 6.0,
    maxPrice: 10.0,
    ad: false,
    adm: false,
    it: true,
    taxGrp: "Tax Group 1",
    action: "View",
  },
  {
    name: "Item 5",
    cost: 18.0,
    price: 22.0,
    op: true,
    minPrice: 20.0,
    maxPrice: 26.0,
    ad: true,
    adm: false,
    it: true,
    taxGrp: "Tax Group 2",
    action: "Delete",
  },
  {
    name: "Item 6",
    cost: 12.0,
    price: 18.0,
    op: false,
    minPrice: 15.0,
    maxPrice: 22.0,
    ad: true,
    adm: true,
    it: false,
    taxGrp: "Tax Group 3",
    action: "Edit",
  },
  {
    name: "Item 7",
    cost: 22.0,
    price: 28.0,
    op: true,
    minPrice: 25.0,
    maxPrice: 32.0,
    ad: false,
    adm: false,
    it: true,
    taxGrp: "Tax Group 1",
    action: "View",
  },
  {
    name: "Item 8",
    cost: 6.0,
    price: 10.0,
    op: true,
    minPrice: 8.0,
    maxPrice: 12.0,
    ad: false,
    adm: true,
    it: false,
    taxGrp: "Tax Group 2",
    action: "Delete",
  },
  {
    name: "Item 9",
    cost: 25.0,
    price: 35.0,
    op: false,
    minPrice: 30.0,
    maxPrice: 45.0,
    ad: true,
    adm: true,
    it: true,
    taxGrp: "Tax Group 3",
    action: "Edit",
  },
  {
    name: "Item 10",
    cost: 3.5,
    price: 5.0,
    op: true,
    minPrice: 4.0,
    maxPrice: 6.0,
    ad: false,
    adm: false,
    it: false,
    taxGrp: "Tax Group 1",
    action: "View",
  },
];

const rateConfigTable = document.querySelector("#rate-config-table tbody");

tableData.forEach((data) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${data.name}</td>
    <td><input class="text-input" type="number" value="${data.cost}" /></td>
    <td><input class="text-input" type="number" value="${data.price}" /></td>
    <td><input class="checkbox-input" type="checkbox" 
    ${data.op ? "checked" : ""} /></td>
    <td><input class="text-input" type="number" value="${data.minPrice}" /></td>
    <td><input class="text-input" type="number" value="${data.maxPrice}" /></td>
    <td><input class="checkbox-input" type="checkbox" 
    ${data.ad ? "checked" : ""} /></td>
    <td><input class="checkbox-input" type="checkbox" 
    ${data.it ? "checked" : ""} /></td>
    <td><input class="checkbox-input" type="checkbox" /></td>
    <td>
        <select class="main-select">
          <option value="default" ${
            data.taxGrp === "default" ? "selected" : ""
          }>--Select--</option>
          <option value="Tax Group 1" ${
            data.taxGrp === "Tax Group 1" ? "selected" : ""
          }>Tax Group 1</option>
          <option value="Tax Group 2" ${
            data.taxGrp === "Tax Group 2" ? "selected" : ""
          }>Tax Group 2</option>
          <option value="Tax Group 3" ${
            data.taxGrp === "Tax Group 3" ? "selected" : ""
          }>Tax Group 3</option>
        </select>
      </td>
    `;

  rateConfigTable.appendChild(row);
});

//-----------------------------buffer-----------------------------

function recordCount() {
  const rowLength = document.querySelectorAll(
    "#rate-config-table tbody tr"
  ).length;
  document.querySelector("#record-count").textContent = rowLength;
}

recordCount();
