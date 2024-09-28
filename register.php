<!DOCTYPE html>
<html>
<link rel="stylesheet" href="res/css/styles.css">
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

if (isset($_POST['submit']))
{
    $title = $_POST["Title"];
    $f_name = $_POST["firstName"];
    $l_name = $_POST["lastName"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $c_password = $_POST["confirmPassword"];
    $date = $_POST["date"];
    $NIC = $_POST["NIC"];
    $language = $_POST["language"];
    $p_Number = $_POST["phoneNumber"];

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
        
    }
    else{
        echo "Someone already register using this email";
    }

}
$con->close();
?>

 <!--#include file="footer.html" -->

 <div id="footer"></div>
</body>
</html>