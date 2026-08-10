/* =========================
   MOBILE NAVBAR
========================= */

const hamburger =
    document.querySelector(".hamburger");

const menuBar =
    document.querySelector(".navbar-menu .menu-bar");

if (hamburger && menuBar) {

    hamburger.addEventListener("click", () => {

        menuBar.classList.toggle("show");

        hamburger.textContent =
            menuBar.classList.contains("show")
                ? "✕"
                : "☰";
    });

    const menuLinks =
        document.querySelectorAll(
            ".navbar-menu .menu-bar a"
        );

    menuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuBar.classList.remove("show");

            hamburger.textContent = "☰";
        });

    });
}


/* =========================
   PROJECT IMAGE SLIDER
========================= */

const images = [

    "assets/Melanoma Detection.png",

    "assets/project-image2.png",

    "assets/project-image3.png",

    "assets/project-image4.png",

    "assets/project-image5.png"

];

let current = 0;

const projectImage =
    document.getElementById("project-image");

const nextButton =
    document.querySelector(".next");

if (projectImage && nextButton) {

    nextButton.addEventListener("click", () => {

        current =
            (current + 1) % images.length;

        projectImage.src =
            images[current];
    });
}


/* =========================
   TYPING EFFECT
========================= */

const words = [

    "Software Engineer",

    "Python Developer",

    "Frontend Developer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typingElement =
    document.getElementById("typing");

function typeEffect() {

    if (!typingElement) {
        return;
    }

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex
            );

        charIndex++;

        if (
            charIndex >
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex
            );

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

            charIndex = 0;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* =========================
   REVEAL ANIMATION
   Using IntersectionObserver
   instead of scroll event
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList
                        .add("active");

                    revealObserver
                        .unobserve(
                            entry.target
                        );
                }

            });

        },
        {
            threshold: 0.08
        }
    );

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
   Using IntersectionObserver
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".menu-bar a"
    );

const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    const id =
                        entry.target
                            .getAttribute(
                                "id"
                            );

                    navLinks.forEach(
                        (link) => {

                            link.classList
                                .toggle(

                                    "active",

                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                );
                        }
                    );
                }

            });

        },
        {
            rootMargin:
                "-30% 0px -60% 0px",

            threshold: 0
        }
    );

sections.forEach((section) => {

    sectionObserver.observe(
        section
    );

});


/* =========================
   MOBILE LOGO
========================= */

const mobileLogo =
    document.querySelector(
        ".navbar-menu .logo"
    );

const homeSection =
    document.getElementById("home");

if (
    mobileLogo &&
    homeSection
) {

    const homeObserver =
        new IntersectionObserver(
            (entries) => {

                const isHomeVisible =
                    entries[0].isIntersecting;

                mobileLogo.classList.toggle(
                    "hide",
                    !isHomeVisible
                );

            },
            {
                threshold: 0.1
            }
        );

    homeObserver.observe(
        homeSection
    );
}


/* =========================
   CUSTOM CURSOR
========================= */

const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );

const cursorCircle =
    document.querySelector(
        ".cursor-circle"
    );

if (
    cursorDot &&
    cursorCircle
) {

    let mouseX = 0;

    let mouseY = 0;

    let circleX = 0;

    let circleY = 0;


    document.addEventListener(
        "mousemove",
        (e) => {

            mouseX = e.clientX;

            mouseY = e.clientY;

            cursorDot.style.transform =
                `translate3d(
                    ${mouseX}px,
                    ${mouseY}px,
                    0
                )
                translate(-50%, -50%)`;
        }
    );


    function animateCursor() {

        circleX +=
            (mouseX - circleX)
            * 0.2;

        circleY +=
            (mouseY - circleY)
            * 0.2;


        cursorCircle.style.transform =
            `translate3d(
                ${circleX}px,
                ${circleY}px,
                0
            )
            translate(-50%, -50%)`;


        requestAnimationFrame(
            animateCursor
        );
    }


    animateCursor();
}
