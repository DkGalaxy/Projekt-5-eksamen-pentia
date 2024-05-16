// Kontaktformular

function validateForm() {
    let fields = ["name", "email", "message"];
    let errors = {};
  
    let validationRules = {
        "name": "Navn er påkrævet",
        "email": "Email er påkrævet",
        "message": "Besked er påkrævet"
    };
  
    fields.forEach(function(field) {
        let value = document.getElementById(field).value.trim();
  
        if (value === "") {
            errors[field] = validationRules[field]; 
        } else if (field === "email" && !validateEmail(value)) {
            errors[field] = "Ugyldig email-format";
        } else {
            errors[field] = ""; 
        }
  
        document.getElementById(field + "Error").innerHTML = errors[field];
    });
  
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
  