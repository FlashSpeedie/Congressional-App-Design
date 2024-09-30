<?php
include 'config.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the input from the form
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate and sanitize inputs
    $email = mysqli_real_escape_string($conn, $data['email']);

    // Check if the user already exists in the database
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $sql);

    // Check if any rows were returned
    if (mysqli_num_rows($result) > 0) {
        // Fetch the user data from the result as an associative array
        $userData = mysqli_fetch_assoc($result);
        
        // Access the jsonFile field
        $jsonFile = $userData['jsonFile']; // Get the value of jsonFile

        // If you want to return it in JSON format
        echo json_encode([
            "jsonFile" => $jsonFile
        ]);
    } else {
        echo json_encode(["error" => "User not found."]); // No user with that email
    }

}
?>
