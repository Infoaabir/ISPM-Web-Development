<!DOCTYPE html>
<html>
<link rel="stylesheet" href="res/css/styles.css">
<link rel="stylesheet" href="res/css/reg.css">
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
  
<?php
include("config.php");

if (isset($_POST['submit'])) {
    // Retrieve form data and sanitize inputs
    $title = htmlspecialchars(trim($_POST["Title"]));
    $f_name = htmlspecialchars(trim($_POST["firstName"]));
    $l_name = htmlspecialchars(trim($_POST["lastName"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"];
    $c_password = $_POST["confirmPassword"];
    $date = htmlspecialchars(trim($_POST["date"]));
    $NIC = htmlspecialchars(trim($_POST["NIC"]));
    $language = htmlspecialchars(trim($_POST["language"]));
    $p_Number = htmlspecialchars(trim($_POST["phoneNumber"]));

    $sql = "INSERT INTO register VALUES ( '$title', '$f_name', '$l_name', '$email',
     '$password', '$c_password', '$date', '$NIC', '$language', '$p_Number')";
    $result = mysqli_query($con, $sql);
?>
<body>
    <div id="header"></div>
<?php
if ($result)
    {
        echo 'Registered successfully. You can <a href="login.php">login now</a>.';
    } else {
        echo "Error: Someone already registered using this email.";
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$con->close();
?>

 <!--#include file="footer.html" -->

 <div id="footer"></div>
</body>
</html>

