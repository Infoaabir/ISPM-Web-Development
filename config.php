<?php
$servername = "localhost";  // Your server name
$username = "root";         // Your MySQL username
$password = "";             // Your MySQL password
$dbname = "project";  // The database you want to create/use

// Create connection to MySQL without selecting a database
$con = new mysqli($servername, $username, $password);

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

// Check if the database exists, and create it if not
$db_selected = mysqli_select_db($con, $dbname);

if (!$db_selected) {
    // If database does not exist, create it
    $sql = "CREATE DATABASE $dbname";
    if ($con->query($sql) === TRUE) {
        echo "Database created successfully.<br>";
    } else {
        die("Error creating database: " . $con->error);
    }

    // Select the newly created database
    mysqli_select_db($con, $dbname);
}

// Now, ensure the table `register` exists
$table_check = $con->query("SHOW TABLES LIKE 'register'");
if ($table_check->num_rows == 0) {
    // Create the `register` table if it doesn't exist
    $create_table_sql = "
    CREATE TABLE register (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Title VARCHAR(10),
        firstName VARCHAR(50),
        lastName VARCHAR(50),
        email VARCHAR(100) UNIQUE,
        password VARCHAR(255),
        confirmPassword VARCHAR(255),
        date DATE,
        NIC VARCHAR(20),
        language VARCHAR(50),
        phoneNumber VARCHAR(15)
    )";
    
    if ($con->query($create_table_sql) === TRUE) {
        echo "Table `register` created successfully.<br>";
    } else {
        die("Error creating table: " . $con->error);
    }
}
?>
