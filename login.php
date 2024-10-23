<?php
include 'config.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Check if the user exists in the database
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        // Verify the password
        if (password_verify($password, $row['password'])) {
            // Redirect to edit.html on successful login
            header('Location: edit.html');
            exit(); // Always call exit after using header to stop script execution
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "User not found!";
    }
}
?>