// Kontaktformular
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            showConfirmationMessage();
        }
    });

    function validateForm() {
        let fields = ["name", "email", "message"];
        let errors = {};

        let validationRules = {
            "name": "Hov! Dit navn mangler!",
            "email": "Hov! Din email mangler!",
            "message": "Hov! Du mangler at skrive en besked!"
        };

        fields.forEach(function(field) {
            let value = document.getElementById(field).value.trim();

            if (value === "") {
                errors[field] = validationRules[field];
            } else if (field === "email" && !validateEmail(value)) {
                errors[field] = "Hov! Du har indtastet din email forkert!";
            } else {
                errors[field] = "";
            }

            document.getElementById(field + "Error").innerHTML = errors[field];
        });

        if (document.getElementById("workplaceError")) {
            document.getElementById("workplaceError").innerHTML = "";
        }

        return Object.values(errors).every(error => error === "");
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function showConfirmationMessage() {
        confirmationMessage.style.display = "block";
    }

    window.closeConfirmationMessage = function() {
        confirmationMessage.style.display = "none";
        clearForm();
    };

    function clearForm() {
        form.reset();

        let errorFields = ["nameError", "emailError", "messageError", "workplaceError"];
        errorFields.forEach(function(errorField) {
            if (document.getElementById(errorField)) {
                document.getElementById(errorField).innerHTML = "";
            }
        });
    }
});
