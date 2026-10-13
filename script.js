
const form = document.getElementById("rescueForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const problem = document.getElementById("problem").value;
    const location = document.getElementById("location").value.trim();

    if (!name || !problem || !location) {
        message.textContent = "Please fill in all required fields.";
        return;
    }

    message.textContent =
        "Demo request submitted successfully, " + name +
        "! Emergency: " + problem +
        ". Location: " + location + ".";

    form.reset();
});
