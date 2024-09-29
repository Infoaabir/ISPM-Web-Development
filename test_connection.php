<?php
$conn = new mysqli('localhost', 'root', '', 'admin_system');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully!";
?>
