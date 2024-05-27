//Skaber variabler med dom så det nemmere at skabe struktur i koden
const leftButton = document.querySelector('.fa-chevron-left');
const rightButton = document.querySelector('.fa-chevron-right');
const imageElement = document.querySelector('.computerskærm-img');
const textElement = document.querySelector('.slideshow-container > section > div > p');

//her laver vi 3 slides den kan skifte imellem altså slide 1 2 og 3 hvilket indholder et img src og text hvilket også er arrayet
const slides = [
    {
        image: 'images/computer1.png',
        text: 'Når du som arbejdsgiver skal holde styr på dine medarbejders forbrug samt opdatering af køleskabets indhold, er der lavet et program til dig, så du nemt kan rette, tilføje og fjerne medarbejdere og indhold i køleskabet.'
    },
    {
        image: 'images/computer-2.png',
        text: 'Med frigos admintrastive forside kan du hurtigt finde overblik over dine medarbejders indkøb'
    },
    {
        image: 'images/computer-3.png',
        text: 'Gennem frigos  kan hurtigt ændres på priser og udbudet af snacks og drikkevare i køleskabet så dine medarbejdere kan få sig en kold drikkevare'
    }
];
//når vi arbejder med array vil den altid starte på 0 hvilket vi saetter det start slide til at være
let currentSlideIndex = 0;
//functionen update slide tager og tager og tilføjer tilsvarende tekst og billede src
function updateSlide(index) {
    
    imageElement.src = slides[index].image;
    textElement.innerHTML = slides[index].text;
}
//functionen til at skifte slides som bliver kaldet på når knappen for videre bliver trykket på 
function showNextSlide() {
    currentSlideIndex++; //starter simpelt med at tilføje 1 til det aktive slide så hvis den er på 1 bliver den 2 og så videre
    if (currentSlideIndex >= slides.length) { //her checker den så om at hvis den er over 2 at den så sætter den tilbage til 0 så den ikke kommer op hvor der ikke er flere slides
        currentSlideIndex = 0; 
    }
    updateSlide(currentSlideIndex);// her køre den update slide og derved tilføjer teksten og billedet fra slide indexet tilsvarende det slide man er på 
}
//show previous gør lige præcis det modsatte af overstående kode så hvis den er på 0 og man prøver at gå baglæns at den så går op til 2
function showPreviousSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; 
    }
    updateSlide(currentSlideIndex);
}

// her tilføjer vi en event listner som holder øje med om de 2 knapper bliver klikket på og hvis de så gør det kalder den en af de 2 øvre funktioner
leftButton.addEventListener('click', showPreviousSlide);
rightButton.addEventListener('click', showNextSlide);

// Sørger for at det første slide bliver vist som det først når hjemmesiden bliver loadet
updateSlide(currentSlideIndex);
//hover funtion til tekst forstørelse
let isHovering = false;// sætter den til negativ til at starte med for mussen ikke er over billedet
while (true) { // er et loop der køre når musen bliver holdt over billedet
    imageElement.addEventListener('mouseenter', function() { // tilføjer en event listner på billedet som tjekker om mussen er på billedet og når den er det skal den køre koden herunder
        isHovering = true; // her sætter den til at variablen ishovering til true 
        textElement.style.fontSize = '1.2em'; // når den hover så forstørres teksten til 1,2 em
    });
//checker om musen ikke er på billedet hvis ikke så har den font størelsen 1em
    imageElement.addEventListener('mouseleave', function() {
        isHovering = false;
        textElement.style.fontSize = '1em'; // 
    });

    // Bruger logical symbol til tjekke om at hvis musen ikke er på billedet så fortsætter loopet ikke i uendeligheder
    if (!isHovering) break;
}