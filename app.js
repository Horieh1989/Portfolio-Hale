(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



/* form send message */
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const formData = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value,
    };

    // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function(response) {
            document.getElementById("form-message").innerText = "Message sent successfully!";
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            document.getElementById("form-message").innerText = "Failed to send message. Please try again.";
            console.log("FAILED...", error);
        });

    // Reset the form
    this.reset();
});