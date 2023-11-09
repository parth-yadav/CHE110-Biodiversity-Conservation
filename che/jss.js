// JavaScript code
document.getElementById("learn-more-button").addEventListener("click", function() {
    alert("Biodiversity conservation is the practice of protecting and preserving the variety of life on Earth. It involves efforts to conserve species, ecosystems, and genetic diversity. Biodiversity is essential for ecological balance and the well-being of all living organisms.");
});
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});