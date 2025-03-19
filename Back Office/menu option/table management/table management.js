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

// nav menu change
const masterButton = document.querySelector(".master-btn");
const menuButton = document.querySelector(".menu-btn");
const settingButton = document.querySelector(".settings-btn");

// Helper function to reset button background colors
function resetButtonStyles() {
  masterButton.style.backgroundColor = "";
  menuButton.style.backgroundColor = "";
  settingButton.style.backgroundColor = "";
  masterButton.style.color = "";
  menuButton.style.color = "";
  settingButton.style.color = "";
}

// Event listener for the Master button
masterButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  masterButton.style.backgroundColor = "#00aeef"; // Highlight clicked button
  masterButton.style.color = "white";
  // Show the master menu and hide others
  document.querySelector(".nav-master-options").style.display = "flex";
  document.querySelector(".nav-menu-options").style.display = "none";
  document.querySelector(".nav-setting-options").style.display = "none";
  masterButton.classList.add("active");
});

// Event listener for the Menu button
menuButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  menuButton.style.backgroundColor = "#00aeef"; // Highlight clicked button
  menuButton.style.color = "white";
  // Show the menu options and hide others
  document.querySelector(".nav-master-options").style.display = "none";
  document.querySelector(".nav-menu-options").style.display = "flex";
  document.querySelector(".nav-setting-options").style.display = "none";
});

// Event listener for the Settings button
settingButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  settingButton.style.backgroundColor = "#00aeef"; // Highlight clicked button
  settingButton.style.color = "white";
  // Show the settings options and hide others
  document.querySelector(".nav-master-options").style.display = "none";
  document.querySelector(".nav-menu-options").style.display = "none";
  document.querySelector(".nav-setting-options").style.display = "flex";
});

//scrollbar from bottom
const bottomScroll = document.querySelector(".nav-menu-options");
document.addEventListener("DOMContentLoaded", () => {
  bottomScroll.scrollTop = bottomScroll.scrollHeight;
});


// for import export menu

const importExportMenuButton = document.querySelector(".options-button");
const importExportMenu = document.querySelector(".import-export-options");

importExportMenuButton.addEventListener("click", () => {
  importExportMenu.classList.toggle("import-export-options-hide");
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

function showPage(pageNumber) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
  });

  // Show the selected page
  document.getElementById(`page${pageNumber}`).classList.add("active");
}   

//Popup
document.getElementById("addTableBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

// Close the popup
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const tablePopup = document.getElementById("popup"); // Popup
  const addTableBtn = document.getElementById("addTableBtn"); // Plus button
  const closePopupBtn = document.querySelector(".close-btn"); // Close button

  // Open popup when plus button is clicked
  addTableBtn.addEventListener("click", function () {
      tablePopup.style.display = "block";
  });

  // Close popup when close button is clicked
  closePopupBtn.addEventListener("click", function () {
      tablePopup.style.display = "none";
  });

  // Close popup when clicking outside
  window.addEventListener("click", function (event) {
      if (event.target === tablePopup) {
          tablePopup.style.display = "none";
      }
  });

  // Save Button Functionality (Optional - Add Table Name to List)
  document.getElementById("save").addEventListener("click", function () {
      const tableName = document.getElementById("tableName-2").value.trim();

      if (tableName) {
          const tbody = document.querySelector("#page3 tbody");
          const newRow = document.createElement("tr");
          newRow.innerHTML = `<td>${tableName}</td>`;
          tbody.appendChild(newRow);
          document.getElementById("tableName-2").value = ""; // Clear input
          tablePopup.style.display = "none"; // Close popup
      } else {
          alert("Please enter a table name.");
      }
  });
});
