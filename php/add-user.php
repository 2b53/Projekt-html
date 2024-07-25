<?php
// Verbindung zur Datenbank herstellen
$servername = "localhost";
$username = "**";
$password = "*";
$dbname = "***";

$conn = new mysqli($servername, $username, $password, $dbname);

// Prüfen, ob die Verbindung erfolgreich war
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL-Abfrage zum Hinzufügen eines neuen Benutzers
$name = $_GET['name'];
$email = $_GET['email'];

$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false));
}
$conn->close();
?>