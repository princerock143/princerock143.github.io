// Mobile navigation menu

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}

// Automatically update copyright year

document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        const navLinks = document.querySelector(".nav-links");

        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});
