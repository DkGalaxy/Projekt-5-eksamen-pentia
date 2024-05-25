// Kontaktformular

function validateForm() {
    let fields = ["name", "email", "message"];
    let errors = {};

    let validationRules = {
        "name": "Name is required",
        "email": "Email is required",
        "message": "Message is required"
    };

    fields.forEach(function(field) {
        let value = document.getElementById(field).value.trim();

        if (value === "") {
            errors[field] = validationRules[field];
        } else if (field === "email" && !validateEmail(value)) {
            errors[field] = "Invalid email format";
        } else {
            errors[field] = "";
        }

        document.getElementById(field + "Error").innerHTML = errors[field];
    });

    // Clear workplace error if any
    document.getElementById("workplaceError").innerHTML = "";

    if (Object.values(errors).every(error => error === "")) {
        showConfirmationMessage();
    }

    return false;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function showConfirmationMessage() {
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.style.display = "block";
}
