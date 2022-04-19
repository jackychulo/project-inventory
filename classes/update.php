<?php
    $dbini = parse_ini_file("../db.ini");
    $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $dbtable = $_POST['dbtable'];
    $name = $_POST['name'];
    $type = $_POST['type'];
    $img = $_POST['img'];
    $ctns = $_POST['ctns'];
    $quantity = $_POST['quantity'];
    $importdate = $_POST['importdate'];
    $importprice = $_POST['importprice'];
    $exportctns = $_POST['exportctns'];
    $exportprice = $_POST['exportprice'];
    $notes = $_POST['notes'];

    $sql = "UPDATE " . $dbtable . " 
            SET type=?, img=?, ctns=?, qty=?, import=?, importprice=?,
            export=?, exportprice=?, notes=?
            WHERE name= ?";

    $resultarray = array();
    if($stmt = $conn->prepare($sql)){
        $stmt->bind_param(
            "ssiisiiiss", 
            $type, $img, $ctns, $quantity, $import, $importprice, $export, 
            $exportprice, $notes, $name
        );
        if($stmt->execute()){
            $resultarray['response'] = "更新《" . $name ."》成功";
        }else{
            $resultarray['response'] = "更新《". $name . "》失败: ". $stmt->error;
        }

    }else{
        $resultarray['response'] = $conn->error;
    }
    $conn->close();
    echo json_encode($resultarray);
?>
