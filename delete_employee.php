<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "project");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if employee_id is set in POST request
if (isset($_POST['employee_id'])) {
    $employee_id = $_POST['employee_id'];

    // Prepare and execute deletion query
    $stmt = $conn->prepare("DELETE FROM employees WHERE employee_id = ?");
    $stmt->bind_param("i", $employee_id);

    if ($stmt->execute()) {
        // Show success message and redirect back to admin dashboard
        echo "<script>alert('Employee deleted successfully.'); window.location.href='admin.php';</script>";
    } else {
        echo "<script>alert('Error deleting employee.'); window.location.href='admin.php';</script>";
    }

    $stmt->close();
}

$conn->close();
?>
