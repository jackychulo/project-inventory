<?php
    $dbini = parse_ini_file("../db.ini");
    $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $id = $_POST['name'];
    $dbtable = $_POST['dbtable'];

    $sql = "DELETE FROM ". $dbtable ." WHERE name=?;";
    
    if($stmt = $conn->prepare($sql)){
        $stmt->bind_param(
            "s", $id
        );
        $stmt->execute();
        
        $resultarray = array();
        if($stmt->affected_rows > 0){
            $resultarray['response'] = "清除《". $id . "》成功";
        }else{
            $resultarray['response'] = "清除《". $id . "》不成功";
        }

    }else{
        $resultarray['response'] = $conn->error;
    }
    $conn->close();
    echo json_encode($resultarray);
?>
