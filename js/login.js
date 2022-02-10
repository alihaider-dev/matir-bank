document.getElementById('login-submit').addEventListener('click', function () {
  //Get User Email
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;

  //Get User Password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;

  //Check Email and Password
  if (userEmail == 'ali@gmail.com' && userPassword == 'secret') {
    console.log('Valid User');
    window.location.href = 'banking.html';
  }
  else {
    console.log('Invalid User');
  }
})