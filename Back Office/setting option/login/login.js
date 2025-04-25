// toggling between text login and pin login

//buttons
const textLoginButton = document.querySelector("#text-login-btn");
const keypadLoginButton = document.querySelector("#keypad-login-btn");

//containers
const textLoginContainer = document.querySelector("#text-login-container");
const keypadLoginContainer = document.querySelector("#keypad-login-container");

textLoginButton.addEventListener("click", () => {
  textLoginButton.classList.add("active-button");
  keypadLoginButton.classList.remove("active-button");

  textLoginContainer.classList.remove("hide");
  keypadLoginContainer.classList.add("hide");
});

keypadLoginButton.addEventListener("click", () => {
  textLoginButton.classList.remove("active-button");
  keypadLoginButton.classList.add("active-button");

  textLoginContainer.classList.add("hide");
  keypadLoginContainer.classList.remove("hide");
});

// PIN handling logic for dots
const pinDots = document.querySelectorAll(".pin-dot-container span");
const keypadButtons = document.querySelectorAll(".keypad-button");
let enteredPin = []; // Array to store the user's PIN input

// Handle PIN input and update dots
keypadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    if (!isNaN(value) && enteredPin.length < 4) {
      enteredPin.push(value); // Push digits into the PIN array
      updatePinDots();
    } else if (value === "C") {
      enteredPin = []; // Clear PIN input
      updatePinDots();
    }
  });

  // Handle backspace functionality
  if (button.querySelector(".back-btn")) {
    button.addEventListener("click", () => {
      enteredPin.pop(); // Remove the last digit from the array
      updatePinDots();
    });
  }
});

// Function to update PIN dot colors based on the input length
function updatePinDots() {
  pinDots.forEach((dot, index) => {
    if (index < enteredPin.length) {
      dot.style.color = "#00aeef"; // Green for entered dots
    } else {
      dot.style.color = "#ccc"; // Grey for empty dots
    }
  });
}

// Username/Password Login

const singinButton = document.querySelector(".login-button");
const errorAlert = document.querySelector(".missing-fields-alert");
const errorText = document.querySelector(".missing-fields-message");
const loginForm = document.querySelector("#text-login-container");

singinButton.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const restaurantCode = document.getElementById("restaurant-code").value;
  let errorMessage = "";

  if (
    username === "fstqatar" &&
    password === "trisha123" &&
    restaurantCode === "682"
  ) {
    window.location.href = "../Back Office/Login Terminal/login terminal.html"; // Redirect to the terminal page
  } else {
    errorMessage = "Invalid Credentials";

    setTimeout(() => {
      loginForm.reset();
    }, 2000);
  }

  if (errorMessage) {
    errorText.textContent = errorMessage;
    errorAlert.classList.add("show");

    // Hide popup after 2 seconds
    setTimeout(() => {
      errorAlert.classList.remove("show");
    }, 2000);
  }
});

// Pin Login
let pinString = "";
const correctPin = "4321"; // Correct PIN
const keypad = document.querySelector(".keypad-container"); // Parent container

keypad.addEventListener("click", (event) => {
  const clickedButton = event.target;
  const buttonText = clickedButton.textContent.trim();

  // Ensure only valid buttons are processed
  if (clickedButton.classList.contains("keypad-button")) {
    if (buttonText === "C") {
      // Reset the PIN when Cancel is clicked
      pinString = "";
      console.log("PIN entry cleared"); // For debugging
    } else if (clickedButton.classList.contains("back-btn")) {
      // Remove the last digit when Back is clicked
      pinString = pinString.slice(0, -1);
      console.log(`PIN after backspace: ${pinString}`); // For debugging
    } else {
      // Ensure PIN is only 4 digits
      if (pinString.length < 4) {
        pinString += buttonText;
      }
    }

    // Check when 4 digits are entered
    if (pinString.length === 4) {
      if (pinString === correctPin) {
        alert("Submitted");
      } else {
        setTimeout(() => {
          alert("Invalid PIN");

          //changing the color of dots
          pinDots.forEach((dot) => {
            dot.style.color = "#ccc";
          });
        }, 500);
      }

      // Reset PIN for next attempt
      pinString = "";
    }
  }
});

// input validation

singinButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Taking inputs
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const restaurantCode = document.getElementById("restaurant-code");

  let errorMessage = "";

  // Username validation
  if (username.value.trim() === "") {
    errorMessage = "Please enter a Name";
    username.style.border = "1px solid red";
    username.focus();
    username.scrollIntoView({ behavior: "smooth", block: "center" }); // 👈 Scroll to input
  } else {
    username.style.border = "1px solid lightgray";
  }

  // Password validation
  if (!errorMessage && password.value.trim() === "") {
    errorMessage = "Please enter a Password";
    password.style.border = "1px solid red";
    password.focus();
    password.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    password.style.border = "1px solid lightgray";
  }

  // Password length validation
  if (
    !errorMessage &&
    (password.value.length < 8 || password.value.length > 16)
  ) {
    errorMessage = "Password length should be between 8 and 16 characters";
    password.style.border = "1px solid red";
    password.focus();
    password.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (!errorMessage) {
    password.style.border = "1px solid lightgray";
  }

  // Restaurant code validation
  if (!errorMessage && restaurantCode.value.trim() === "") {
    errorMessage = "Please enter the Restaurant Code";
    restaurantCode.style.border = "1px solid red";
    restaurantCode.focus();
    restaurantCode.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (!errorMessage) {
    restaurantCode.style.border = "1px solid lightgray";
  }

  // Show popup if there's an error
  if (errorMessage) {
    errorText.textContent = errorMessage;
    errorAlert.classList.add("show");

    // Hide popup after 2 seconds
    setTimeout(() => {
      errorAlert.classList.remove("show");
    }, 2000);
  }
});
