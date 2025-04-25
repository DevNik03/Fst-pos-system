// Toggle Forms
const toggleUsername = document.getElementById("toggle-username");
const toggleKeypad = document.getElementById("toggle-keypad");
const usernameForm = document.getElementById("username-form");
const keypadForm = document.getElementById("keypad-form");

// Login Buttons
const loginButton = document.getElementById("login-button");
const keypadLoginButton = document.getElementById("keypad-login-button");

// Pin Handling
const pinDisplay = document.getElementById("pin-display");
const keys = document.querySelectorAll(".key");
let pin = "";

// Add toggle functionality
toggleUsername.addEventListener("click", () => {
  usernameForm.style.display = "block";
  keypadForm.style.display = "none";
  toggleUsername.classList.add("active");
  toggleKeypad.classList.remove("active");
});

toggleKeypad.addEventListener("click", () => {
  usernameForm.style.display = "none";
  keypadForm.style.display = "block";
  toggleKeypad.classList.add("active");
  toggleUsername.classList.remove("active");
});

// Keypad logic
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.getAttribute("data-key");

    if (keyValue === "C") {
      pin = "";
    } else if (keyValue === "←") {
      pin = pin.slice(0, -1);
    } else if (pin.length < 4) {
      pin += keyValue;
    }

    pinDisplay.textContent = pin.padEnd(4, "•");
  });
});

// Username/Password Login
loginButton.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const restaurantCode = document.getElementById("restaurant-code").value;

  if (username === "fstqatar" && password === "trisha123" && restaurantCode === "682") {
    window.location.href = "/Login Terminal/login terminal.html"; // Redirect to the terminal page
  } else {
    alert("Invalid login details.");
  }
});

// Pin Login
keypadLoginButton.addEventListener("click", () => {
  if (pin === "4321") {
    window.location.href = "/Login Terminal/login terminal.html"; // Redirect to the terminal page
  } else {
    alert("Invalid PIN.");
  }
}); 