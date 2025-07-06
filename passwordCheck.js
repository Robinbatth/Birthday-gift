function checkPassword() {
  const correctPassword = "I am Bujj"; // set your actual password here
  const enteredPassword = document.getElementById("password-input").value;

  if (enteredPassword === correctPassword) {
    window.location.href = "Page2.html"; // redirect to main page
  } else {
    document.getElementById("errorMsg").textContent = "Wrong password. Try again!";
  }
}
