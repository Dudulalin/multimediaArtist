
        
//-------------------------------------cv button-----------------------------------
const btnCv = document.querySelector(".cv-button");


btnCv.addEventListener("click", () => {
    const pdfUrl = "./media/file/cv_yi_sitmonternna.pdf"; // Replace with your actual PDF URL
    window.open(pdfUrl, "_blank");
});
//-------------------------------------go up-----------------------------------
const logo = document.querySelector("h1");

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("h1");
    logo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});