/* Your JS here. */
console.log('Hello World!')

const nav = document.querySelector("nav");
const links = document.querySelectorAll("a.navigate");
const sections = document.querySelectorAll(
    "#intro, #description, #genetics, #uses"
);
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");

const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentSlide = 0;

const modal = document.querySelector("#genetics-modal");
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");


function updateNavigation() {
    const navBottom = nav.getBoundingClientRect().bottom;
    let activeIndex = 0;

    sections.forEach(function(section, index) {
        const sectionPosition = section.getBoundingClientRect();

        if (
            sectionPosition.top <= navBottom &&
            sectionPosition.bottom > navBottom
        ) {
            activeIndex = index;
        }
    });

    const atPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1;

    if (atPageBottom) {
        activeIndex = links.length - 1;
    }

    links.forEach(function(link) {
        link.classList.remove("active");
    });

    links[activeIndex].classList.add("active");
}

function resizeNavigation() {
    if (window.scrollY === 0) {
        nav.classList.add("at_top");
    } else {
        nav.classList.remove("at_top");
    }
}

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}

previousButton.addEventListener("click", function() {
    showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", function() {
    showSlide(currentSlide + 1);
});

openModalButton.addEventListener("click", () => {
    modal.showModal();
});

closeModalButton.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});


window.addEventListener("scroll", updateNavigation);
window.addEventListener("resize", updateNavigation);
window.addEventListener("scroll", resizeNavigation);

updateNavigation();
resizeNavigation();

