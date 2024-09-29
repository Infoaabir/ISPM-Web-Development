<?php


// Database connection
$host = 'localhost'; // or your database host
$dbname = 'admin_system'; // name of your database
$username = 'root'; // your database username
$password = ''; // your database password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Get the POST data
$employeeId = $_POST['employee_id'];
$score = $_POST['score'];
$totalQuestions = $_POST['total_questions'];

// Insert the score into the database
$query = "INSERT INTO quiz_results (employee_id, score, total_questions, date_taken) VALUES (:employee_id, :score, :total_questions, NOW())";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':employee_id', $employeeId);
$stmt->bindParam(':score', $score);
$stmt->bindParam(':total_questions', $totalQuestions);

if ($stmt->execute()) {
    echo "Score submitted successfully!";
} else {
    echo "Error submitting score.";
}
?>
