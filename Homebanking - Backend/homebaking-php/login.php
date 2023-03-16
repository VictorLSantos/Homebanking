<?php

include_once("db_connect.php");

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {

    $request = json_decode($postdata);

    $email = mysqli_real_escape_string($conn, trim($request->email));
    $password = mysqli_real_escape_string($conn, trim($request->password));

    $query_users = mysqli_query($conn, "SELECT * FROM `users` where email = '$email' AND password = '$password'");


    if ($row  = mysqli_num_rows($query_users) > 0) {
        // Sessão sendo criada com $_SESSION
        session_start();
        $user = mysqli_fetch_assoc($query_users);
        $_SESSION["user_id"] = $user["id"];

        // Fechamento do codigo

        // Dado passado para JSON para ser interpretado no Anuglar
        $data = array('message' => 'sucess', 'email' => $email);
        echo json_encode($data);
        // Fechamento do codigo

    } else if ($email == '' || $password == '') {
        // Dado passado para JSON para ser interpretado no Anuglar
        $data = array('message' => 'empty');
        echo json_encode($data);
        // Fechamento do codigo
    } else {
        // Dado passado para JSON para ser interpretado no Anuglar
        $data = array('message' => 'failed');
        echo json_encode($data);
        // Fechamento do codigo
    }
}
