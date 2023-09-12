document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Reset previous error messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Validate Name
        if (nameInput.value.trim() === "") {
            valid = false;
            nameError.textContent = "Please enter your name.";
            nameInput.focus();
        }

        // Validate Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            valid = false;
            emailError.textContent = "Please enter a valid email address.";
            emailInput.focus();
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            valid = false;
            messageError.textContent = "Please enter your message.";
            messageInput.focus();
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});