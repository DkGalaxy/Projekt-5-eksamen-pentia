
const leftButton = document.querySelector('.fa-chevron-left');
const rightButton = document.querySelector('.fa-chevron-right');
const imageElement = document.querySelector('.computerskærm-img');
const textElement = document.querySelector('.slideshow-container > section > div > p');
const h1Element = document.querySelector('.slideshow-container > section > h1');
const indicators = document.querySelectorAll('.indicator');


const slides = [
    {
        image: 'images/computer1.png',
        text: 'FriGo til admins er med sit simple<br> design godt til at ...',
        h1Text: 'Adminprogram '
    },
    {
        image: 'images/computer-2.png',
        text: 'Med frigos admintrastive forside<br> kan du hurtigt finde overblik over dine medarbejders indkøb',
        h1Text: 'Indkløbs overblik'
    },
    {
        image: 'images/computer-3.png',
        text: 'Gennem frigos kan hurtigt ændres på priser<br> og udbudet af snacks og drikkevare i køleskabet<br> så dine medarbejdere kan få sig en kold drikke',
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

