<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="res/css/styles.css">
    <link rel="stylesheet" href="res/css/reg.css">
    <script src="https://code.jquery.com/jquery-3.3.1.js"
            integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
            crossorigin="anonymous"></script>
    <script>
        $(function(){
            $("#header").load("header.html"); 
            $("#footer").load("footer.html"); 
        });
    </script>
</head>
<body>
    <div id="header"></div>

    <?php
    // Include database configuration
    include("config.php");

    if (isset($_POST['submit'])) {
        // Retrieve form data and sanitize inputs
        $title = htmlspecialchars(trim($_POST["Title"]));
        $f_name = htmlspecialchars(trim($_POST["firstName"]));
        $l_name = htmlspecialchars(trim($_POST["lastName"]));
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $password = $_POST["password"];
        $c_password = $_POST["confirmPassword"];
        $date = htmlspecialchars(trim($_POST["date"]));
        $NIC = htmlspecialchars(trim($_POST["NIC"]));
        $language = htmlspecialchars(trim($_POST["language"]));
        $p_Number = htmlspecialchars(trim($_POST["phoneNumber"]));

        // Validate inputs
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo '<div class="error-message">Invalid email format</div>';
            exit();
        }

        if ($password !== $c_password) {
            echo '<div class="error-message">Passwords do not match</div>';
            exit();
        }

        // Hash the password for secure storage
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Check if the email is already registered
        $check_email_sql = "SELECT * FROM register WHERE email = ?";
        if ($stmt = $con->prepare($check_email_sql)) {
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                echo '<div class="error-message">Someone already registered using this email.</div>';
                exit();
            }
            $stmt->close();
        }

        // Insert the new user into the database
        $sql = "INSERT INTO register (Title, firstName, lastName, email, password, confirmPassword, date, NIC, language, phoneNumber) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        if ($stmt = $con->prepare($sql)) {
            // Bind parameters to the SQL statement
            $stmt->bind_param("ssssssssss", $title, $f_name, $l_name, $email, $hashed_password, $hashed_password, $date, $NIC, $language, $p_Number);

            // Execute the statement and check if successful
            if ($stmt->execute()) {
                echo '<div class="register-success">Registered successfully. You can <a href="login.php" class="btn">login now</a></div>';
            } else {
                echo '<div class="error-message">Error: ' . $stmt->error . '</div>';
            }

            $stmt->close();
        } else {
            echo '<div class="error-message">Error preparing SQL statement: ' . $con->error . '</div>';
        }
    }

    // Close the database connection
    $con->close();
    ?>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div id="footer"></div>
</body>
</html>
