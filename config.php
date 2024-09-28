<?php
$servername = "localhost";  // Your server name
$username = "root";         // Your MySQL username
$password = "";             // Your MySQL password
$dbname = "project";        // The database name

// Create connection to MySQL
$con = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

// echo "database Connected successfully.<br>";
?>
