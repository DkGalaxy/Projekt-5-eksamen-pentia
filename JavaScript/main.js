document.addEventListener("DOMContentLoaded", function() {
    // Get all sections
    var sections = document.querySelectorAll(".section");

    // Function to check if element is in viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to fade in sections when they come into view
    function fadeInSections() {
        sections.forEach(function(section) {
            if (isInViewport(section)) {
                section.classList.add("fade-in");
            }
        });
    }

    // Add scroll event listener to fade in sections on scroll
    window.addEventListener("scroll", fadeInSections);

    // Initial check for sections in view on page load
    fadeInSections();
});

