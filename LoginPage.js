document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    alert("Login successful! Redirecting to the game...");
    window.location.href = "MainPage.html";
  } else {
    alert("Invalid username or password.");
  }
});
