document.addEventListener("DOMContentLoaded", function() {
    let acceptCookie = document.getElementById('accept-cookie');
    let declineCookie = document.getElementById('decline-cookie');
    const cookiesBtn = document.getElementsByClassName('cookie-button-container');
    const cookiebox = document.getElementById('cookie-alert');
    const frames = 60;
    let opacity = 0;

    const acceptCookieMessage =
    [
        "Tak for at accepterer cookies!",
        "Vi sætter pris på din samtykke!",
        "Dit samtykke hjælper med at forbedre din oplevelse!",
        "Dejligt, at du også har lyst til cookies!"
    ];
    const declineCookieMessage =
    [
        "Er du sikker på du gerne vil takke nej til cookies?",
        "At takke nej til cookies har måske en effekt på din oplevelse.",
        "Har du virkelig ikke lyst til cookies?",
        "Du har fravalgt cookies!"
    ];

    function fadeIn() {
        for (let i = 0; i <= frames; i++) {
            setTimeout(() => {
                opacity = i / frames;
                for (const button of cookiesBtn) {
                    button.style.opacity = opacity;
                }
            }, i * 30);
        }
    }
    function getRandomMessage(arr) {
        return arr[Math.floor(Math.random()* arr.length)];
    }
    acceptCookie.addEventListener('click', function() {
        if (confirm(getRandomMessage(acceptCookieMessage)))
            {
                cookiebox.style.display = 'none';
            }
    });

    declineCookie.addEventListener('click', function() {
        if (confirm(getRandomMessage(declineCookieMessage))) 
        {
            cookiebox.style.display = 'none';   
            

        }
    });

   

    window.onload = fadeIn; // Make sure fadeIn is defined before assigning it to window.onload
});