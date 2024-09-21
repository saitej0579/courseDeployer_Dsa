const userId = document.querySelector("input[data-allow1]"); // Select the ID input field
const userPass = document.querySelector("input[data-allow2]"); // Select the password input field
const button = document.querySelector("button[data-button]"); // Select the submit button
const section = document.querySelector(".allowSection"); // Select the login section
const contentSection = document.querySelector(".contentSection"); // Select the content section

// Check sessionStorage for saved state when the page loads
window.addEventListener("DOMContentLoaded", function() {
    const isHidden = sessionStorage.getItem("hiddenSection"); // Get the value from sessionStorage
    if (isHidden === "true") { // If the section was hidden during the session
        section.classList.remove("active"); // Hide login section
        contentSection.classList.add("active"); // Show content section
    }
});

function change() {
    if (userId.value === "0579" && userPass.value === "tej") { // Check if credentials match
        section.classList.remove("active"); // Hide login section
        contentSection.classList.add("active"); // Show content section
        sessionStorage.setItem("hiddenSection", "true"); // Save the hidden state in sessionStorage
    } else {
        window.alert("Username or Password not matching."); // Display error if credentials are incorrect
    }
}

// Add event listener to button
button.addEventListener("click", change);


