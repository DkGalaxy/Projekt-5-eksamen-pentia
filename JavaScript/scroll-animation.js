// Scroll animation  (kilde: https://www.youtube.com/watch?v=T33NN_pPeNI&list=PLAI-Y0y6XsV_YGCcQ1-3uIwNprIbAYZJq&index=17)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))
