let aboutLink = document.getElementById("aboutLink");
let homeLink = document.getElementById("homeLink");
let worksLink = document.getElementById("worksLink");
let experienceLink = document.getElementById("experienceLink");
let testimonialsLink = document.getElementById("testimonialsLink");
let contactLink = document.getElementById("contactLink");
let themeToggleButton = document.querySelector(".themeToggleButton");
let htmlTag = document.getElementById("htmlTag");
const portfolioFilters = document.querySelectorAll(".portfolioFilters");
const portfolioItem = document.querySelectorAll(".portfolioItem");
const scrollToTop = document.getElementById("scrollToTop");

const track = document.getElementById("testimonials-track");
const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.getElementById("next-testimonial");
const prevBtn = document.getElementById("prev-testimonial");
const indicatorsContainer = document.getElementById("carousel-indicators");

// make the links active when arrived 

document.addEventListener("scroll", function (e) {
    console.log(e.target.scrollingElement.scrollTop)
    if (e.target.scrollingElement.scrollTop >= 0 && e.target.scrollingElement.scrollTop < 650) {
        homeLink.classList.add("active");
        aboutLink.classList.remove("active");
    }else if 
    (e.target.scrollingElement.scrollTop >= 650 && e.target.scrollingElement.scrollTop < 1300) {
        homeLink.classList.remove("active");
        aboutLink.classList.add("active");
        worksLink.classList.remove("active");
    }else if
    (e.target.scrollingElement.scrollTop >= 2675 && e.target.scrollingElement.scrollTop < 4844) {
        aboutLink.classList.remove("active");
        worksLink.classList.add("active");
        experienceLink.classList.remove("active");
    }else if 
    (e.target.scrollingElement.scrollTop >= 4844 && e.target.scrollingElement.scrollTop < 6830) {
        worksLink.classList.remove("active");
        experienceLink.classList.add("active");
        testimonialsLink.classList.remove("active");
    }else if
    (e.target.scrollingElement.scrollTop >= 6830 && e.target.scrollingElement.scrollTop < 8000){
        experienceLink.classList.remove("active");
        testimonialsLink.classList.add("active");
        contactLink.classList.remove("active");
    }else if
    (e.target.scrollingElement.scrollTop >= 8000){
        testimonialsLink.classList.remove("active");
        contactLink.classList.add("active");
    }
})



// toggle the menu when the button is clicked

themeToggleButton.addEventListener("click", function () {
    if(htmlTag.classList.contains("dark")){
        htmlTag.classList.remove("dark");
        htmlTag.classList.add("light");
    }else {
        htmlTag.classList.remove("light");
        htmlTag.classList.add("dark");
    }
})

// nav and taps in works section

portfolioFilters.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        portfolioFilters.forEach(btn => {
            btn.classList.remove(
                "bg-linear-to-r",
                "from-primary",
                "to-secondary",
                "text-white",
                "active"
            );

            btn.classList.add(
                "bg-white",
                "dark:bg-slate-800",
                "text-slate-600",
                "dark:text-slate-300"
            );

            btn.setAttribute("aria-pressed", "false");
        });

        button.classList.remove(
            "bg-white",
            "dark:bg-slate-800",
            "text-slate-600",
            "dark:text-slate-300"
        );

        button.classList.add(
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "active"
        );

        button.setAttribute("aria-pressed", "true");
        button.classList.add("active");
        portfolioItem.forEach(item => {
            if (filter === "all" || item.dataset.category === filter) {
                item.classList.remove("hidden");

            }else {
                item.classList.add("hidden");
            }
        })
    })
})


// handle the testimonials carousel

let currentIndex = 0;
function getVisibleCards() {
    if (window.innerWidth >= 1024) {
        return 3;
    } else if (window.innerWidth >= 640) {
        return 2;
    }

    return 1;
}

    function getMaxIndex() {
    return Math.max(0, cards.length - getVisibleCards());
}


    function createIndicators() {
    indicatorsContainer.innerHTML = "";

    const totalIndicators = getMaxIndex() + 1;

    for (let i = 0; i < totalIndicators; i++) {
        const button = document.createElement("button");

        button.className =
        "carousel-indicator w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600 transition-all duration-300 hover:scale-125 cursor-pointer";

        button.setAttribute("data-index", i);
        button.setAttribute("role", "tab");
        button.setAttribute("aria-label", `التوصية ${i + 1}`);
        button.setAttribute("type", "button");

        button.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
        });

        indicatorsContainer.appendChild(button);
    }
    }

    function updateCarousel() {
    currentIndex = Math.min(currentIndex, getMaxIndex());

    const firstCard = cards[0];
    const currentCard = cards[currentIndex];

    const position = firstCard.offsetLeft - currentCard.offsetLeft;

    track.style.transform = `translateX(${position}px)`;

    const indicators = document.querySelectorAll(".carousel-indicator");

    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
        indicator.classList.add("bg-accent", "scale-125");
        indicator.classList.remove("bg-slate-400", "dark:bg-slate-600");
        indicator.setAttribute("aria-selected", "true");
        } else {
        indicator.classList.remove("bg-accent", "scale-125");
        indicator.classList.add("bg-slate-400", "dark:bg-slate-600");
        indicator.setAttribute("aria-selected", "false");
        }
    });
    }

    nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex > getMaxIndex()) {
        currentIndex = 0;
    }

    updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = getMaxIndex();
    }

    updateCarousel();
    });

    window.addEventListener("resize", () => {
    createIndicators();
    updateCarousel();
    });

    createIndicators();
    updateCarousel();



// hande the scroll to top button

window.addEventListener("scroll", function () {
    if(window.scrollY >= 652){
        scrollToTop.classList.remove("opacity-0", "invisible");
        console.log("show")
    }else {
        scrollToTop.classList.add("opacity-0", "invisible");
    }
})

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


//handle gear icon click
