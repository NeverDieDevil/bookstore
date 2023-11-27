<?php
	header('Access-Control-Allow-Origin: http://localhost:8080/home');
    if (isset($_POST["name"])) {
        $user = $_POST["name"];
	echo ("Hello from server: $user");
    } else {
        echo ($_POST["name"]);
	echo ("Hello from server: no name provided");

        return;
    
    }
	
?>
