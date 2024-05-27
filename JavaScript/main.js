
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

// Accordion 
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const btn = item.querySelector('.accordion-btn');
      const content = item.querySelector('.accordion-content');
      const chevron = item.querySelector('.chevron');
  
      btn.addEventListener('click', function() {
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.querySelector('.accordion-btn').classList.remove('active');
            otherItem.querySelector('.accordion-content').style.display = 'none';
            otherItem.querySelector('.chevron').classList.remove('rotate');
          }
        });
  
        btn.classList.toggle('active');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        chevron.classList.toggle('rotate');
      });
    });
  });
  