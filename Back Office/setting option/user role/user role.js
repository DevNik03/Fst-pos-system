  
// add popup close button

const popupEnableButton = document.querySelector(".popup-enable-button");
const popupCloseButton = document.querySelector(".close-popup-btn");
const popupSaveButton = document.querySelector(".popup-save-btn"); 
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".popup-overlay");

popupEnableButton.addEventListener("click", () => {
  popup.style.display = "grid";
  overlay.style.display = "flex";
});

// Close popup and reset form
function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  resetForm();
}

popupCloseButton.addEventListener("click", closePopup);

// Close popup when clicking the Save button
popupSaveButton.addEventListener("click", closePopup);

// Reset form function 
function resetForm() {
  const inputs = popup.querySelectorAll("input, select");
  inputs.forEach(input => input.value = "");
}

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

// nav menu change
const masterButton = document.querySelector(".master-btn");
const menuButton = document.querySelector(".menu-btn");
const settingButton = document.querySelector(".settings-btn");

// Helper function to reset button background colors
function resetButtonStyles() {
  masterButton.style.backgroundColor = "";
  menuButton.style.backgroundColor = "";
  settingButton.style.backgroundColor = "";
}

// Event listener for the Master button
masterButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  masterButton.style.backgroundColor = "#00aeef"; // Highlight clicked button

  // Show the master menu and hide others
  document.querySelector(".nav-master-options").style.display = "flex";
  document.querySelector(".nav-menu-options").style.display = "none";
  document.querySelector(".nav-setting-options").style.display = "none";
});

// Event listener for the Menu button 
menuButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  menuButton.style.backgroundColor = "#00aeef"; // Highlight clicked button

  // Show the menu options and hide others
  document.querySelector(".nav-master-options").style.display = "none";
  document.querySelector(".nav-menu-options").style.display = "flex";
  document.querySelector(".nav-setting-options").style.display = "none";
});

// Event listener for the Settings button
settingButton.addEventListener("click", () => {
  resetButtonStyles(); // Reset all button backgrounds
  settingButton.style.backgroundColor = "#00aeef"; // Highlight clicked button

  // Show the settings options and hide others
  document.querySelector(".nav-master-options").style.display = "none";
  document.querySelector(".nav-menu-options").style.display = "none";
  document.querySelector(".nav-setting-options").style.display = "flex";
}); 

const openPopup = document.getElementById('openPopup');

// Switch tab function 
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});     

// Search filter code 
document.getElementById('search').addEventListener('input', function() {
  const filter = this.value.toLowerCase(); // Get the search term and convert to lowercase
  const tabs = document.querySelectorAll('.tab-content'); // Get all tab-content divs

  // Loop through all tab-content divs
  tabs.forEach(tab => {
      const labels = tab.querySelectorAll('label'); // Get all labels inside the scrollable div
      labels.forEach(label => {
          const text = label.textContent || label.innerText; // Get the label text
          if (text.toLowerCase().includes(filter)) {
              label.style.display = ''; // Show the label if it matches the search
          } else {
              label.style.display = 'none'; // Hide the label if it doesn't match
          }
      });
  });
});
