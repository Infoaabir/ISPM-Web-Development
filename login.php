<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login page</title>
    <link rel="stylesheet" href="res/css/styles.css">
    <link rel="stylesheet" href="res/css/login.css">


    <!--#include file="header.html" -->
<script
    src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous">
</script>
<script> 
$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});
</script> 
</head>
<body>
    <div id="header"></div>
  <h2>Login Page</h2>

  
  <div class="container">  
    <div class="left-side">
      <div class="login-box">
     
      <h2 class="header">Alredy a member? </h2>
     
      <form action="login_pro.php" method="post"> 
        
        <h5 class="sign">sign in with your email account </h6>
     <!-- <?php
        session_start();
        if (isset($_SESSION['error'])) { 
            $error = $_SESSION['error']; 
            echo '<p class="error-message">' . $error . '</p>';
            unset($_SESSION['error']);
        } 
        ?>  --> 
       <label>Email</label>
      <input type="email" name="email" placeholder="Email" />
      <label>password</label>
      <input type="password" name="password" placeholder="Password" />
      <a href="register_acc.php"><h5>New? sign up here |</a>
      <a href="#">Forgot Password? |</a> 
      <a href="adminlogin.php">Admin</a><br></br>
       
      <div class="checkbox-container">
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember Me</label>
        </div>  
      <button class="submit" name="login" onclick="showlogin()">Sign In</button>
    </div>
    <script>
            function showlogin() {
                alert("Are you sure want to login?");
            }

        </script>
    </form>
    </div>
    <div class="right-side">
      <div class="options">
        <div class="login-box">
        <h2 class="header">Sign in</h2>
        <h5 class="sign">sign in with your social<br>account </h6>
        <button class="button">
          <img class="icon" src="img/facebook_icon.png" alt="Facebook" />
           Facebook
        </button>
        <button class="button">
          <img class="icon" src="img/google.png" alt="Google" />
          Google
        </button>
        <button class="button">
          <img class="icon" src="img/apple.png" alt="Apple" />
           Apple
        </button>
        <button class="buttonsu" button onclick="window.location.href = 'register.html';">Sign Up</button></div>
      </div>
      </div>
    </div>

    <!--#include file="footer.html" -->

  <div id="footer"></div>
  <script>

// Handle form submission and session storage for login
$("#login-form").on("submit", function(e) {
    e.preventDefault();

    // Here you should add your form validation and login processing logic
    // For now, we simply simulate successful login:
    sessionStorage.setItem("isLoggedIn", true);

});
</script>
</body>
</html>