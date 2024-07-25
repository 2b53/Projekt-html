<?php
// Verbindung zur Datenbank herstellen
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Prüfen, ob die Verbindung erfolgreich war
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL-Abfrage zur Aktualisierung eines Benutzers
$id = $_GET['userId'];
$name = $_GET['name'];
$email = $_GET['email'];

$sql = "UPDATE users SET name='$name', email='$email' WHERE id=$id";
if ($conn->query($sql) === TRUE) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false));
}
$conn->close();
?>