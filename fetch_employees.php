<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "admin_system");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch employees
$sql = "SELECT employee_id, employee_name, employee_email, last_login FROM employees";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['employee_id'] . "</td>";
        echo "<td>" . $row['employee_name'] . "</td>";
        echo "<td>" . $row['employee_email'] . "</td>";
        echo "<td>" . $row['last_login'] . "</td>";
        echo "<td>
                <form action='delete_employee.php' method='POST' onsubmit='return confirmDelete();'>
                    <input type='hidden' name='employee_id' value='" . $row['employee_id'] . "'>
                    <button type='submit' class='btn delete-btn'>Delete</button>
                </form>
              </td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='5'>No employees found</td></tr>";
}

$conn->close();
?>
