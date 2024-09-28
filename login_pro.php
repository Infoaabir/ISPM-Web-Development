<?php
include("config.php");

// Initialize error variable
$error = "";

// Check if the login form is submitted
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // SQL query to check if the username and password exist in the database
    $sql = "SELECT * FROM register WHERE email='$email' AND password='$password'";
    $result = mysqli_query($con, $sql);

    // Check if the query returned any rows
    if (mysqli_num_rows($result) == 1) {
        // Login successful, redirect to the home page
        header("Location: index2.html");
        exit();
    } else {
        // Login failed, set error message
        $error = "Invalid username or password!";
    }
}

// Pass the error message to the HTML file using a session variable
session_start();
$_SESSION['error'] = $error;
header("Location: login.php");
exit();
?>

