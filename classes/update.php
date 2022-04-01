<?php
    $dbini = parse_ini_file("../db.ini");
    $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

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

    $sql = "UPDATE comercialanny_products.products 
            SET type=?, img=?, ctns=?, qty=?, import=?, importprice=?,
            export=?, exportprice=?, notes=?
            WHERE name= ?";

    
    if($stmt = $conn->prepare($sql)){
        $stmt->bind_param(
            "ssiisdiiss", 
            $type, $img, $ctns, $quantity, $importdate, $importprice, $exportctns, 
            $exportprice, $notes, $name
        );
        if($stmt->execute()){
            $resultarray['response'] = "更新《" . $name ."》成功";
        }else{
            $resultarray['response'] = "更新《". $name . "》失败: ". $stmt->error;
        }

    }else{
        $resultarray['response'] = "名字无效: ". $conn->error;
    }
    $conn->close();
    echo json_encode($resultarray);
?>
