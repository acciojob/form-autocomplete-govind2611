//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Load form data from Local Storage (if available) and pre-fill the form fields
    if (localStorage.getItem("formData")) {
        const formData = JSON.parse(localStorage.getItem("formData"));
        nameInput.value = formData.name || "";
        emailInput.value = formData.email || "";
    }

    // Save form data to Local Storage when the form is submitted
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            name: nameInput.value,
            email: emailInput.value,
        };

        localStorage.setItem("formData", JSON.stringify(formData));

        alert("Form data has been saved!");

   
    });
});
