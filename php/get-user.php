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

// SQL-Abfrage zur Auswahl aller Benutzer
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

// Ergebnis in JSON format konvertieren und zurückgeben
$jsonData = array();
while ($row = $result->fetch_assoc()) {
    $jsonData[] = array(
        'id' => $row['id'],
        'name' => $row['name'],
        'email' => $row['email']
    );
}
echo json_encode($jsonData);
$conn->close();
?>