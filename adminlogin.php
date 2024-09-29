<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security Policies Awareness</title>
    <!-- dont change this css line add another line if you need to link-->
    <link rel="stylesheet" href="res/css/styles.css">
    <link rel="stylesheet" href="res/css/admin.css">
   
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
<div id="header">
</div>
<div class="menu">
     
    </div>
  </header>
  <div class="container">  
  <img src="img/user.png" class="user">
      <div class="login-box">
     
      <h2 class="header"><br>login as a Admin User</h2>
     
      <form action="Admin_pro.php" method="post"> 
        
        <?php
        session_start();
        if (isset($_SESSION['error'])) { 
            $error = $_SESSION['error']; 
            echo '<p class="error-message">' . $error . '</p>';
            unset($_SESSION['error']);
        } 
        ?>    
       <label>Email</label>
      <input type="email" name="email" placeholder="Email" />
      <label>password</label>
      <input type="password" name="password" placeholder="Password" />
      <a href="login-aabir.php"><h5>user's login page</a>
     <div class="checkbox-container">
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember Me</label>
        </div>  
      <button class="submit" name="login">Sign In</button>
    </div>
    </form>
      </div>
    </div>


<!--#include file="footer.html" -->

<div id="footer"></div>
</body>
</html>