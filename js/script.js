document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get email and password values
      const email = document.getElementById('exampleInputEmail1').value;
      const password = document.getElementById('exampleInputPassword1').value;
  
      // Check if credentials match
      if (email === 'admin1234@gmail.com' && password === '123456') {
        // Redirect to home page
        window.location.href = 'home.html';
      } else {
        // Show an alert or handle incorrect login
        alert('Incorrect email or password.');
      }
    });
});
