document.addEventListener("DOMContentLoaded", function() {
    let acceptCookie = document.getElementById('accept-cookie');
    let declineCookie = document.getElementById('decline-cookie');
    const cookiesBtn = document.getElementsByClassName('cookie-button-container');
    const frames = 60;
    let opacity = 0;

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

    acceptCookie.addEventListener('click', function() {
        acceptCookiebtn();
    });

    declineCookie.addEventListener('click', function() {
        if (confirm("Are you sure you want to decline cookies?")) {
            // Code to handle declining cookies goes here
            console.log("Cookies declined.");
        }
    });

    function acceptCookiebtn() {
        // Code to handle accepting cookies goes here
        console.log("Cookies accepted.");
    }

    window.onload = fadeIn; // Make sure fadeIn is defined before assigning it to window.onload
});