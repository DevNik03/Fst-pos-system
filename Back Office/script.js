document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const tableBody = document.getElementById("tableBody");
    const checkboxes = document.querySelectorAll(".rowCheckbox");
    const selectAll = document.getElementById("selectAll");

    searchInput.addEventListener("input", function () {
        let filter = searchInput.value.toLowerCase();
        let rows = tableBody.getElementsByTagName("tr");
        
        Array.from(rows).forEach(row => {
            let name = row.cells[1].textContent.toLowerCase();
            row.style.display = name.includes(filter) ? "" : "none";
        });
    });

    selectAll.addEventListener("change", function () {
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAll.checked;
        });
    });
});
