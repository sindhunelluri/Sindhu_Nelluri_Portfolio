const hamburger = document.querySelector(".hamburger");
const menu_bar = document.querySelector(".navbar-menu .menu-bar");

hamburger.addEventListener("click", () => {

    menu_bar.classList.toggle("show");

    if(menu_bar.classList.contains("show")){
        hamburger.innerHTML = "✕";
    }else{
        hamburger.innerHTML = "☰";
    }

});
const navbar = document.querySelector(".navbar");

const menuLinks = document.querySelectorAll(".navbar-menu .menu-bar a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu_bar.classList.remove("show");
    });
});

const images = [
    "assets/Melanoma Detection.png",
    "assets/project-image2.png",
    "assets/project-image3.png",
    "assets/project-image4.png",
    "assets/project-image5.png"
];

let current = 0;

const image = document.getElementById("project-image");

document.querySelector(".next").addEventListener("click", () => {

    current++;

    if(current >= images.length){
        current = 0;
    }

    image.src = images[current];

});

const words = [
    "Software Engineer",
    "Python Developer",
    "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


window.addEventListener("scroll",()=>{

const reveals=document.querySelectorAll(".reveal");

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

}

});

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-bar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const mobileLogo = document.querySelector(".navbar-menu .logo");
const homeSection = document.getElementById("home");

window.addEventListener("scroll", () => {

    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

    if (window.scrollY >= homeBottom - 120) {
        mobileLogo.classList.add("hide");
    } else {
        mobileLogo.classList.remove("hide");
    }

});