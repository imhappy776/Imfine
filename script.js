function showMessage() {
  alert("Welcome to HoopZone 🏀 - Let's play!");
}

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("msg").innerText =
    "Message sent! We'll get back to you soon 🏀";
  return false;
}