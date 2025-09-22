// -----------------------------
// FORM VALIDATION
// -----------------------------
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Clear previous messages
  message.textContent = "";

  // Custom validation rules
  if (username === "") {
    message.textContent = "Username cannot be empty!";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Enter a valid email address!";
    return;
  }
  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters long!";
    return;
  }

  // Success message
  message.classList.remove("error");
  message.classList.add("success");
  message.textContent = "Form submitted successfully!";
});

// -----------------------------
// INTERACTIVE FEATURE 1: TOGGLE PASSWORD VISIBILITY
// -----------------------------
document.getElementById("togglePassword").addEventListener("click", function() {
  const passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});

// -----------------------------
// INTERACTIVE FEATURE 2: CHANGE BACKGROUND COLOR
// -----------------------------
document.getElementById("changeColor").addEventListener("click", function() {
  const colors = ["#f8b400", "#4caf50", "#2196f3", "#ff5722", "#9c27b0"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
