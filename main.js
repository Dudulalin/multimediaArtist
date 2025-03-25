
        
//-------------------------------------cv button-----------------------------------
const btnCv = document.querySelector(".cv-button");


btnCv.addEventListener("click", () => {
    const pdfUrl = "./media/file/cv_yi_sitmonternna.pdf"; // Replace with your actual PDF URL
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

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    // Toggle active class
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');

    const filterValue = filter.getAttribute('data-filter');

    projects.forEach(project => {
      if (filterValue === 'all' || project.classList.contains(filterValue)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Show all projects by default
document.querySelector('.filter[data-filter="all"]').click();