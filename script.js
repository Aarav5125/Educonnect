const tutors = [
    { name: "John Doe", subject: "Mathematics", bio: "Experienced math tutor.", picture: "https://via.placeholder.com/100" },
    { name: "Jane Smith", subject: "Science", bio: "Passionate about teaching science.", picture: "https://via.placeholder.com/100" }
];
const bookings = [];
const ADMIN_PASSWORD = "Educonnect.com";

// Load Tutors
function loadTutors() {
    const tutorsListDiv = document.getElementById("tutors-list");
    tutorsListDiv.innerHTML = "";

    tutors.forEach((tutor, index) => {
        const tutorDiv = document.createElement("div");
        tutorDiv.classList.add("tutor-card");

        tutorDiv.innerHTML = `
            <img src="${tutor.picture}" alt="${tutor.name}">
            <h3>${tutor.name}</h3>
            <p>Subject: ${tutor.subject}</p>
            <p>${tutor.bio}</p>
            <button class="book-tutor-btn" data-index="${index}">Book Tutor</button>
        `;

        tutorsListDiv.appendChild(tutorDiv);
    });

    document.querySelectorAll(".book-tutor-btn").forEach(btn => {
        btn.addEventListener("click", handleBookTutor);
    });
}

// Book Tutor
function handleBookTutor(event) {
    const tutorIndex = event.target.dataset.index;
    const tutorName = tutors[tutorIndex].name;

    const location = prompt(`Enter location for booking ${tutorName}:`);
    if (!location) return;

    const paymentMethod = prompt(`Enter payment method (Cash or Card):`);
    if (!paymentMethod || (paymentMethod.toLowerCase() !== "cash" && paymentMethod.toLowerCase() !== "card")) {
        alert("Invalid payment method. Booking cancelled.");
        return;
    }

    const paymentDetails = paymentMethod.toLowerCase() === "card" ? prompt("Enter card details:") : "Pay with Cash";
    if (paymentDetails || paymentMethod.toLowerCase() === "cash") {
        bookings.push({ tutor: tutorName, location, paymentMethod, paymentDetails });
        alert("Booking successful!");
    }
}

// Tutor Sign-Up
document.getElementById("sign-up-tutor-btn").addEventListener("click", () => {
    document.getElementById("tutor-signup-modal").style.display = "block";
});

document.getElementById("close-signup-modal").addEventListener("click", () => {
    document.getElementById("tutor-signup-modal").style.display = "none";
});

document.getElementById("tutor-signup-form").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("tutor-name").value;
    const email = document.getElementById("tutor-email").value;
    const subject = document.getElementById("tutor-subject").value;
    const picture = document.getElementById("tutor-picture").value || "https://via.placeholder.com/100";
    const bio = document.getElementById("tutor-bio").value;

    tutors.push({ name, email, subject, picture, bio });
    alert("Tutor registered successfully!");
    loadTutors();
    document.getElementById("tutor-signup-modal").style.display = "none";
});

// Admin Login
document.getElementById("admin-dashboard-btn").addEventListener("click", () => {
    document.getElementById("admin-login-modal").style.display = "block";
});

document.getElementById("admin-login-btn").addEventListener("click", () => {
    const password = document.getElementById("admin-password").value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById("admin-login-modal").style.display = "none";
        openAdminDashboard();
    } else {
        alert("Incorrect password!");
    }
});

document.getElementById("close-admin-modal").addEventListener("click", () => {
    document.getElementById("admin-login-modal").style.display = "none";
});

function openAdminDashboard() {
    const bookingsList = document.getElementById("bookings-list");
    const signupsList = document.getElementById("signups-list");

    bookingsList.innerHTML = bookings.map(
        (booking, i) => `<li>${i + 1}. Tutor: ${booking.tutor}, Location: ${booking.location}, Payment: ${booking.paymentMethod}, Details: ${booking.paymentDetails}</li>`
    ).join("");

    signupsList.innerHTML = tutors.map(
        (tutor, i) => `<li>${i + 1}. Name: ${tutor.name}, Subject: ${tutor.subject}, Email: ${tutor.email}</li>`
    ).join("");

    document.getElementById("admin-dashboard").style.display = "block";
}

document.getElementById("close-dashboard").addEventListener("click", () => {
    document.getElementById("admin-dashboard").style.display = "none";
});

// Load tutors on page load
window.onload = loadTutors;
