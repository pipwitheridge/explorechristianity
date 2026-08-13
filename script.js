// ========================================
// Load Components
// ========================================

async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}


// ========================================
// Hero
// ========================================

loadComponent("hero", "components/hero.html")
    .then(() => {
        setupHeroForm();
    });


function setupHeroForm() {

    const heroNumber = document.getElementById("heroNumber");

    if (!heroNumber) return;

    heroNumber.addEventListener("submit", e => {

        e.preventDefault();

        fetch("https://script.google.com/macros/s/AKfycbz0JFeTLUZ5nqKlvTnjshJQAu-P5XlbFkf9qFnMLDOY8E3n2E2si1RZhkRHsvmxfGNr/exec", {
            method: "POST",
            body: new FormData(e.target)
        });

        alert("Thanks!");

    });
}

// ========================================
// Register
// ========================================

loadComponent("register", "components/register.html").then(() => {
        setupRegisterForm();
    });

// ========================================
// Registration Form
// ========================================


function setupRegisterForm() {

    const registerForm = document.getElementById("registerForm");

    if (!registerForm) return;

    registerForm.addEventListener("submit", e => {

        e.preventDefault();
        
        fetch("https://script.google.com/macros/s/AKfycbz0JFeTLUZ5nqKlvTnjshJQAu-P5XlbFkf9qFnMLDOY8E3n2E2si1RZhkRHsvmxfGNr/exec", {
            method: "POST",
            body: new FormData(e.target)
        });

        alert("Thanks!");

    });
}


// ========================================
// Welcome Video
// ========================================

loadComponent("welcome-video", "components/welcome-video.html");

const welcomeVideo = document.querySelector("#welcome-video");

function animateVideo() {
    const rect = welcomeVideo.getBoundingClientRect();

    // Centre of the video
    const videoCenter = rect.top + rect.height / 2;

    // Centre of the viewport
    const viewportCenter = window.innerHeight / 2;

    // Distance from viewport centre
    const distance = videoCenter - viewportCenter;

    // How far away the animation can operate
    const range = window.innerHeight * 0.5;

    // Convert distance to 0 → 1
    let progress = 1 - Math.abs(distance) / range;

    // Keep between 0 and 1
    progress = Math.max(0, Math.min(1, progress));

    // -5deg → 0deg
    const skew = -5 * (1 - progress);

    welcomeVideo.style.transform = `skewY(${skew}deg)`;

    requestAnimationFrame(animateVideo);
}

animateVideo();

// ========================================
// Meet team
// ========================================

loadComponent("meet-team", "components/meet-team.html");


// ========================================
// Testimonials
// ========================================

loadComponent("testimonials", "components/testimonials.html")
    .then(() => {
        setupTestimonialCarousel();
    });


function setupTestimonialCarousel() {

    const carousel = document.getElementById("testimonialCarousel");

    if (!carousel) return;

    const cards = carousel.querySelectorAll(".card");
    const dots = document.querySelectorAll(".progress-dot");

    console.log("Carousel detected");


    carousel.addEventListener("scroll", () => {

        console.log("SCROLLING");

        const carouselCentre =
            carousel.scrollLeft + carousel.offsetWidth / 2;

        let closestCard = 0;
        let closestDistance = Infinity;


        cards.forEach((card, index) => {

            const cardCentre =
                card.offsetLeft + card.offsetWidth / 2;

            const distance =
                Math.abs(cardCentre - carouselCentre);

            if (distance < closestDistance) {

                closestDistance = distance;
                closestCard = index;

            }

        });


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === closestCard
            );

        });

    });

}

// ========================================
// FAQ
// ========================================

loadComponent("faq", "components/faq.html")
    .then(() => {
        setupFAQCarousel();
    });


function setupFAQCarousel() {

    const carousel = document.getElementById("faqCarousel");

    if (!carousel) return;

    const cards = carousel.querySelectorAll(".card");
    const dots = document.querySelectorAll(".progress-dot");

    console.log("Carousel detected");


    carousel.addEventListener("scroll", () => {

        console.log("SCROLLING");

        const carouselCentre =
            carousel.scrollLeft + carousel.offsetWidth / 2;

        let closestCard = 0;
        let closestDistance = Infinity;


        cards.forEach((card, index) => {

            const cardCentre =
                card.offsetLeft + card.offsetWidth / 2;

            const distance =
                Math.abs(cardCentre - carouselCentre);

            if (distance < closestDistance) {

                closestDistance = distance;
                closestCard = index;

            }

        });


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === closestCard
            );

        });

    });

}


// ========================================
// Session Overview
// ========================================

loadComponent("session-overview", "components/session-overview.html");

// ========================================
// Gallery
// ========================================

loadComponent("gallery", "components/gallery.html");

