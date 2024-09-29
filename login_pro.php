<?php
include("config.php");
session_start();

// Initialize error variable
$error = "";

// Check if the login form is submitted
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare the SQL query to retrieve the hashed password for the entered email
    $sql = "SELECT email, password FROM register WHERE email=?";
    if ($stmt = $con->prepare($sql)) {
        // Bind the email parameter
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        
        // If the email exists, fetch the hashed password
        if ($stmt->num_rows == 1) {
            $stmt->bind_result($email, $stored_hashed_password);
            $stmt->fetch();
            
            // Verify the entered password with the stored hashed password
            if (password_verify($password, $stored_hashed_password)) {
                // Password is correct, set session variables
                $_SESSION['loggedin'] = true;
                $_SESSION['email'] = $email;

                // Redirect to the home page
                header("Location: index2.html");
                exit();
            } else {
                // Incorrect password
                $error = "Invalid username or password!";
            }
        } else {
            // Email not found
            $error = "Invalid username or password!";
        }
        $stmt->close();
    } else {
        // SQL error occurred
        $error = "Database error: Could not prepare statement";
    }
}

// Pass the error message to the HTML file using a session variable
$_SESSION['error'] = $error;
header("Location: login.php");
exit();
?>
