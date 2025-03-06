document.addEventListener("DOMContentLoaded", () => {
  // Scroll to Top Button
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    scrollToTopButton.style.opacity = window.scrollY > 200 ? "1" : "0";
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Form Validation
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let isValid = true;
    
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    // Clear previous error messages
    document.querySelectorAll(".error").forEach((el) => el.remove());

    if (!name) {
      showError(nameField, "Name is required.");
      isValid = false;
    }

    if (!email) {
      showError(emailField, "Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      showError(emailField, "Enter a valid email address.");
      isValid = false;
    }

    if (!message) {
      showError(messageField, "Message cannot be empty.");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

  function showError(inputField, message) {
    const error = document.createElement("small");
    error.classList.add("error");
    error.style.color = "red";
    error.textContent = message;
    inputField.parentElement.appendChild(error);
  }
});
