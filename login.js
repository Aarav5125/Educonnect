// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for form submission
    document.querySelector('form').addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the values from the login form
        const loginEmail = document.querySelector("input[name='email']").value;
        const loginPassword = document.querySelector("input[name='password']").value;

        // Retrieve the stored user data from localStorage
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        // Check if entered email and password match the stored ones
        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            // Redirect to booking page if credentials are correct
            window.location.href = "booking.html";
        } else {
            // Display an error message if credentials are incorrect
            alert("Incorrect user/password. Please try again.");
        }
    });
});
