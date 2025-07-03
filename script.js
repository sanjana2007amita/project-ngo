document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if (name && email && message) {
    msg.textContent = "Thank you for contacting us, " + name + "!";
    msg.style.color = "green";
    this.reset();
  } else {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
  }
});