URL = "http://localhost:9002/api/v1/actor/register-user"
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const username = document.getElementById("userNameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const phoneNumber = document.getElementById("phoneNumberInput").value;

    // Create data object
    const formData = {
        username: username,
        email: email,
        password: password,
        phoneNumber: phoneNumber
    };

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        alert("successful login");
        // Handle success (e.g., redirect to another page)
        window.location.href = "noteTaking.html";
    })
    .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
        alert("Registration failed, please try again.");
    });

    // Option 2: If you prefer traditional form submission, just remove `event.preventDefault()`
    // and allow the form to submit normally.
});




