<?php
    $dbini = parse_ini_file("../db.ini");
    $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $id = $_POST['name'];

    $sql = "DELETE FROM comercialanny_products.products WHERE name=?;";
    
    if($stmt = $conn->prepare($sql)){
        $stmt->bind_param(
            "s", $id
        );
        $stmt->execute();
        
        $resultarray = array();
        if($stmt->affected_rows > 0){
            $resultarray['response'] = "Delete《". $id . "》Successful";
        }else{
            $resultarray['response'] = "Delete《". $id . "》Failed";
        }

    }else{
        $resultarray['response'] = $conn->error;
    }
    $conn->close();
    echo json_encode($resultarray);
?>
