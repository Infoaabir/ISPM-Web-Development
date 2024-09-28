<?php
// Database credentials
$servername = "localhost"; // Usually localhost for XAMPP
$username = "root";         // Default username for XAMPP
$password = "";             // Default password for XAMPP is empty
$dbname = "network_security_quiz"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the AJAX POST request
$user_id = $_POST['user_id'];
$answers = $_POST['answers']; // This will be an array of question_id => answer

// Loop through each answer and insert into the database
foreach ($answers as $question_id => $answer) {
    $stmt = $conn->prepare("INSERT INTO quiz_answers (user_id, question_id, answer) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $user_id, $question_id, $answer);
    $stmt->execute();
}

$stmt->close();
$conn->close();

echo "Answers saved successfully!";
?>
