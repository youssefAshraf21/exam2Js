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


