
/* =================================
   TULIP GIRLS STAY - JAVASCRIPT
================================= */

// Mobile navigation menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label",
        isOpen ? "Close navigation" : "Open navigation");

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu when a navigation link is clicked

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});

// Display current year in footer

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

// Demo enquiry form

const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();

    formMessage.textContent =
        "Thank you, " + visitorName +
        "! Your demo enquiry has been validated.";

    formMessage.style.color = "#39845a";

    enquiryForm.reset();

});
