<?php
    $dbini = parse_ini_file("../db.ini");
    $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $id = $_POST['name'];

    $sql = "DELETE FROM comercialanny_products.products";
    
    if($stmt = $conn->query($sql)){

        $resultarray = array();
        if($stmt->affected_rows > 0){
            $resultarray['response'] = "Delete All Successful";
        }else{
            $resultarray['response'] = "Delete All Failed";
        }

    }else{
        $resultarray['response'] = $conn->error;
    }
    $conn->close();
    echo json_encode($resultarray);
?>
