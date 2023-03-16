<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accepted");
header("Content-Type: application/json; charset=UTF-8");

$db_host = "localhost";
$db_pwd  = "root";
$db_usernmae = "root";
$db_name = "homebanking";

$conn = new mysqli($db_host, $db_pwd, $db_usernmae, $db_name);

if ($conn->connect_error) {
    die('Error: (' . $conn->connect_errno . ') ' . $conn->connect_error);
}
