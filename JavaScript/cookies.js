document.addEventListener("DOMContentLoaded", function() {
    let acceptCookie = document.getElementById('accept-cookie');
    let declineCookie = document.getElementById('decline-cookie');
    const cookiesBtn = document.getElementsByClassName('cookie-button-container');
    const cookiebox = document.getElementById('cookie-alert');
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
        if (confirm("Tak fordi du har accepteret cookie"))
            {
                cookiebox.style.display = 'none';
            }
    });

    declineCookie.addEventListener('click', function() {
        if (confirm("du er ved at decline cookies er du sikker på du vil det?")) 
        {
            cookiebox.style.display = 'none';   
            

        }
    });

   

    window.onload = fadeIn; // Make sure fadeIn is defined before assigning it to window.onload
});