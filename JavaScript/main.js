// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

// Scroll button
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('scrolledButton');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.classList.add('scroll-btn');
        } else {
            button.classList.remove('scroll-btn');
        }
    });
});

// Scroll arrow
document.addEventListener("DOMContentLoaded", function() {
    const scrollArrow = document.querySelector('.scroll-arrow a');
    scrollArrow.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
