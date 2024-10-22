<?php
include 'config.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the input from the form
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate and sanitize inputs
    $email = mysqli_real_escape_string($conn, $data['email']);
    $jsonFile = mysqli_real_escape_string($conn, $data['jsonFile']);

    // Check if the user already exists in the database
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // User exists, update their information
        $sql = "UPDATE users SET jsonFile='$jsonFile' WHERE email='$email'";
        if (mysqli_query($conn, $sql)) {
            echo json_encode(["message" => "User information updated successfully."]);
        } else {
            echo json_encode(["error" => "Error updating user information: " . mysqli_error($conn)]);
        }
    } else {
        // User does not exist, handle accordingly
        echo json_encode(["error" => "User not found."]);
    }

    // Redirect or display a message
    // Note: Since we're using AJAX with JSON response, you may want to remove this line
    // header("Location: graph.html");
    // exit;
}
?>
