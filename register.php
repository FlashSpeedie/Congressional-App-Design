<?php
include 'config.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = mysqli_real_escape_string($conn, $_POST['fullName']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into the database
    $sql = "INSERT INTO users (fullName, email, phone, password) VALUES ('$fullName', '$email', '$phone', '$hashedPassword')";
    
    if (mysqli_query($conn, $sql)) {
        echo "Registration successful!"; // In practice, redirect to login page.
        header("Location: graph.html");
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>
