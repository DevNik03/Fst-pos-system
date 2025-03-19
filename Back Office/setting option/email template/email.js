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

