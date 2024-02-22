"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const emailField = document.getElementById("mail");
    const confirmEmailField = document.getElementById("confirm-mail");
    const emailMatchText = document.createElement("p");
    emailMatchText.style.marginTop = "5px";
    confirmEmailField.parentNode.appendChild(emailMatchText);

    confirmEmailField.addEventListener("input", function () {
        if (confirmEmailField.value === emailField.value) {
            emailMatchText.textContent = "Emails match";
            emailMatchText.style.color = "green";
        } else {
            emailMatchText.textContent = "Emails don't match";
            emailMatchText.style.color = "red";
        }
    });
});

