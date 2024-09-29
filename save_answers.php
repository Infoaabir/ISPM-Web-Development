<?php
// Database connection
$host = 'localhost'; // your database host
$dbname = 'network_quiz'; // updated database name
$username = 'root'; // your database username
$password = ''; // your database password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Get the POST data
$email = $_POST['user_email']; // User's email
$score = $_POST['score'];      // Final score
$totalQuestions = $_POST['total_questions']; // Total number of questions

// Insert the score into the database
$query = "INSERT INTO quiz_results (user_email, score, total_questions, date_taken) VALUES (:email, :score, :total_questions, NOW())";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':score', $score);
$stmt->bindParam(':total_questions', $totalQuestions);

// Execute the statement and check if the data was inserted successfully
if ($stmt->execute()) {
    echo "Score submitted successfully!";
} else {
    echo "Error submitting score.";
}
?>
