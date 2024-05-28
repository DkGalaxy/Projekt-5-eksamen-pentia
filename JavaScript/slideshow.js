
const leftButton = document.querySelector('.fa-chevron-left');
const rightButton = document.querySelector('.fa-chevron-right');
const imageElement = document.querySelector('.computerskærm-img');
const textElement = document.querySelector('.slideshow-container > section > div > p');
const h1Element = document.querySelector('.slideshow-container > section > h1');
const indicators = document.querySelectorAll('.indicator');


const slides = [
    {
        image: 'images/computer1.png',
        text: 'FriGo til admins er med sit simple design godt <span class="break"> til at holde overblikket over medarbejderne, køleskabet og det tekniske.</span>',
        h1Text: 'Adminprogram til FriGo'
    },
    {
        image: 'images/computer-2.png',
        text: 'Med FriGos adminstrative forside kan du hurtigt <span class="break"> finde overblik over dine medarbejdere og deres indkøb.</span>',
        h1Text: 'Overblik over medarbejdere'
    },
    {
        image: 'images/computer-3.png',
        text: 'Gennem FriGo kan hurtigt ændre på priser og udbuddet af <span class="break"> snacks og drikkevarer i køleskabet, så dine medarbejdere kan få sig noget koldt drikke!</span>',
        h1Text: 'Sortiment opsætning'
    }
];

let currentSlideIndex = 0;function updateSlide(index) {
    imageElement.src = slides[index].image;
    textElement.innerHTML = slides[index].text;
    h1Element.innerText = slides[index].h1Text; 
    updateIndicators(index); 
}


function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}


function showNextSlide() {
    currentSlideIndex++; 
    if (currentSlideIndex >= slides.length) { 
        currentSlideIndex = 0; 
    }
    updateSlide(currentSlideIndex);
}

function showPreviousSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; 
    }
    updateSlide(currentSlideIndex);
}


leftButton.addEventListener('click', showPreviousSlide);
rightButton.addEventListener('click', showNextSlide);


updateSlide(currentSlideIndex);

async function autoSlide() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 10000)); 
        showNextSlide();
    }
}


autoSlide();

