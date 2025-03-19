// Get elements
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popupContainer = document.getElementById("popupContainer");
const deviceTable = document.getElementById("deviceTable");
const noRecordMessage = document.getElementById("noRecordMessage");

// Sample Data (Can be replaced dynamically)
let devices = [
    { name: "Device 1" },
    { name: "Device 2" },
    { name: "Device 3" }
];

// Open Popup
openPopup.addEventListener("click", () => {
    popupContainer.style.display = "flex";
    loadDevices();
});

// Close Popup
closePopup.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

// Close Popup when clicking outside the box
popupContainer.addEventListener("click", (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = "none";
    }
});

// Load Devices into Table
function loadDevices() {
    deviceTable.innerHTML = ""; // Clear previous data

    if (devices.length === 0) {
        noRecordMessage.style.display = "block";
    } else {
        noRecordMessage.style.display = "none";
        devices.forEach((device) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${device.name}</td>
                <td><button class="block-btn">Unblock</button></td>
            `;
            deviceTable.appendChild(row);
        });
    }
}

// Search Functionality
function searchDevices() {
    let filter = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#deviceTable tr");
    let visible = 0;

    rows.forEach(row => {
        let deviceName = row.cells[0].textContent.toLowerCase();
        if (deviceName.includes(filter)) {
            row.style.display = "";
            visible++;
        } else {
            row.style.display = "none";
        }
    });

    // Show/hide "No record found" message
    noRecordMessage.style.display = visible === 0 ? "block" : "none";
}
