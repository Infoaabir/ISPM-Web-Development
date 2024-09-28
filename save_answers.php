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

// ... (rest of your code)

// Calculate the score based on correct answers
$correctAnswers = [
    'q1' => 'b',
    'q2' => 'b',
    'q3' => 'b',
    // ... (add more correct answers)
];

$score = 0;
foreach ($answers as $question_id => $answer) {
    if ($answer === $correctAnswers[$question_id]) {
        $score++;
    }
}

// Insert the answer and score into the database
$stmt = $conn->prepare("INSERT INTO quiz_answers (user_id, question_id, answer, score) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssi", $user_id, $question_id, $answer, $score);
$stmt->execute();



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
