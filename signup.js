// signup.js
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get email and password values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Store email and password in localStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  // Optionally, you can show a success message
  alert("Signup successful! You can now login.");
});
