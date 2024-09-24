<!DOCTYPE html>
<html>
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
    $country = $_POST["Country"];
    $language = $_POST["language"];
    $p_Number = $_POST["phoneNumber"];

    $sql = "INSERT INTO register VALUES ( '$title', '$f_name', '$l_name', '$email',
     '$password', '$c_password', '$date', '$country', '$language', '$p_Number')";
    $result = mysqli_query($con, $sql);
?>
<body>
<?php
if ($result)
    {
        echo 'Registered successfully. You can <a href="login-aabir.php">login now</a>.';
        
    }
    else{
        echo "Someone already register using this email";
    }

}
$con->close();
?>
</body>
</html>