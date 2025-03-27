const terminalForm = document.getElementById("terminal-form");

terminalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const outlet = document.getElementById("outlet-select").value;
  const terminal = document.getElementById("terminal-select").value;

  if (outlet && terminal) {
    window.location.href = "../../Order summary/order summary.html";
  } else {
    alert("Please select both an outlet and a terminal.");
  }
}); 