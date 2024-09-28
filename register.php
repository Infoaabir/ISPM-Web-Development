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
<body>
    <div id="header"></div>

<?php
// Include database configuration
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

    // Validate inputs
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }

    if ($password !== $c_password) {
        echo "Passwords do not match";
        exit();
    }

    // Hash the password for secure storage
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Check if the email is already registered
    $check_email_sql = "SELECT * FROM register WHERE email = ?";
    if ($stmt = $con->prepare($check_email_sql)) {
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo "Someone already registered using this email.";
            exit();
        }
        $stmt->close();
    }

    // Insert the new user into the database
    $sql = "INSERT INTO register (Title, firstName, lastName, email, password, confirmPassword, date, NIC, language, phoneNumber) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    if ($stmt = $con->prepare($sql)) {
        // Bind parameters to the SQL statement
        $stmt->bind_param("ssssssssss", $title, $f_name, $l_name, $email, $password, $password, $date, $NIC, $language, $p_Number);

        // Execute the statement and check if successful
        if ($stmt->execute()) {
            echo 'Registered successfully. You can <a href="login.php">login now</a>.';
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Error preparing SQL statement: " . $con->error;
    }
}

// Close the database connection
$con->close();
?>


 <!--#include file="footer.html" -->

<div id="footer"></div>
</body>
</html>
