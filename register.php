<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>

<?php
// Include the config.php file for database connection and setup
include("config.php");

// Check if form is submitted
if (isset($_POST['submit'])) {

    // Form data
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

    // Check if the password and confirm password match
    if ($password !== $c_password) {
        echo "Passwords do not match.";
        exit();
    }

    // Check if email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit();
    }

    // Check if the email is already in use
    $check_email_query = "SELECT * FROM register WHERE email = ?";
    $stmt = $con->prepare($check_email_query);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        echo "Someone already registered using this email.";
        exit();
    }

    // Prepared statement to insert data
    $sql = "INSERT INTO register (Title, firstName, lastName, email, password, confirmPassword, date, NIC, language, phoneNumber) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepare the SQL statement
    $stmt = $con->prepare($sql);

    // Bind parameters
    $stmt->bind_param('ssssssssss', $title, $f_name, $l_name, $email, $password, $c_password, $date, $NIC, $language, $p_Number);

    // Execute the query
    if ($stmt->execute()) {
        echo 'Registered successfully. You can <a href="login.php">login now</a>.';
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
}

// Close connection
$con->close();
?>

<!-- Registration Form -->
<form method="POST" action="register.php">
    <label>Title:</label><input type="text" name="Title" required><br>
    <label>First Name:</label><input type="text" name="firstName" required><br>
    <label>Last Name:</label><input type="text" name="lastName" required><br>
    <label>Email:</label><input type="email" name="email" required><br>
    <label>Password:</label><input type="password" name="password" required><br>
    <label>Confirm Password:</label><input type="password" name="confirmPassword" required><br>
    <label>Date of Birth:</label><input type="date" name="date" required><br>
    <label>NIC:</label><input type="text" name="NIC" required><br>
    <label>Language:</label><input type="text" name="language" required><br>
    <label>Phone Number:</label><input type="text" name="phoneNumber" required><br>
    <input type="submit" name="submit" value="Register">
</form>

</body>
</html>
