document.addEventListener("DOMContentLoaded", function () {
    const loginSection = document.getElementById("loginSection");
    const signupSection = document.getElementById("signupSection");
    const loggedInSection = document.getElementById("loggedInSection");
    const loggedInUsername = document.getElementById("loggedInUsername");
    const logoutBtn = document.getElementById("logoutBtn");
  
    loginSection.style.display = "block";
    signupSection.style.display = "block";
    loggedInSection.style.display = "none";
  
    // Handle login form submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      // Send login request to the server for validation (backend handling needed).
      // After successful login, show the private section and hide login and signup sections.
      if (username == "Eyad" && password == "0!!@jf7&.&n23n.987fn32874e5n9d787dd.@@!") {
        loggedInUsername.textContent = username;
        loginSection.style.display = "none";
        signupSection.style.display = "none";
        loggedInSection.style.display = "block";
      } else {
        showMessage('Invalid token login. Please try again.');
      }
    });
  
    // Handle signup form submission
    document.getElementById("signupForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("signupUsername").value;
      const password = document.getElementById("signupPassword").value;
      // Send signup request to the server for registration (backend handling needed).
      // After successful signup, show the private section and hide login and signup sections.
      loggedInUsername.textContent = username;
      loginSection.style.display = "none";
      signupSection.style.display = "none";
      loggedInSection.style.display = "block";
    });
  
    // Handle logout button click
    logoutBtn.addEventListener("click", function () {
      // Send logout request to the server to clear session (backend handling needed).
      // After logout, show login and signup sections, and hide the private section.
      loginSection.style.display = "block";
      loggedInSection.style.display = "none";
    });
  });
  function showMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
  }