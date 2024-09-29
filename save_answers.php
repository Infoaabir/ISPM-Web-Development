<?php
// Database connection
$host = 'localhost'; // or your database host
$dbname = 'network_security_quiz'; // name of your database
$username = 'root'; // your database username
$password = ''; // your database password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Validate POST data
if (!isset($_POST['user_id']) || !isset($_POST['answers'])) {
    die("Invalid POST data");
}

$userId = $_POST['user_id'];
$answers = $_POST['answers']; // This is an associative array of user answers

// Iterate through each question and store the user's answers
$query = "INSERT INTO quiz_answers (user_id, question_id, user_answer, date_taken) VALUES (:user_id, :question_id, :user_answer, NOW())";
$stmt = $pdo->prepare($query);

foreach ($answers as $question => $answer) {
    $stmt->bindParam(':user_id', $userId);
    $stmt->bindParam(':question_id', $question);
    $stmt->bindParam(':user_answer', $answer);
    
    // Execute the insert for each answer
    if (!$stmt->execute()) {
        echo "Error saving answer for question $question.";
    }
}

echo "Answers submitted successfully!";
?>