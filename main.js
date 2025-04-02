
        
//-------------------------------------cv button-----------------------------------
const btnCv = document.querySelector(".cv-button");


btnCv.addEventListener("click", () => {
    const pdfUrl = "./media/documents/cv.pdf"; // Replace with your actual PDF URL
    window.open(pdfUrl, "_blank");
});
//-------------------------------------go up-----------------------------------
const logo = document.querySelector(".header-logo");

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".header-logo");
    logo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});

//--------------------------------projet filter-----------------------------------

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.projet');
const projectsSection = document.getElementById('projects');

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        const filterValue = filter.getAttribute('data-filter');

        // Toggle active class
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        // Filter projects
        projects.forEach(proj => {
            if (filterValue === 'all' || proj.classList.contains(filterValue)) {
                proj.style.display = 'block';
            } else {
                proj.style.display = 'none';
            }
        });

        // Count visible projects
        const visibleProjects = Array.from(projects).filter(proj => proj.style.display === 'block').length;

        // Adjust section height based on visible projects
        projectsSection.style.height = `${visibleProjects * 180}vh`;
    });
});

// Trigger default filter to show all on load and set correct height
window.addEventListener('load', () => {
    document.querySelector('.filter[data-filter="all"]').click();
});

