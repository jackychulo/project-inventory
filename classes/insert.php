<?php
    $dbini = parse_ini_file("../db.ini");
    $conn = new mysqli($dbini['servernames'], $dbini['username'], $dbini['password']);

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

    $sql = "INSERT INTO `comercialanny_products`.`products` 
        (`name`, `type`, `img`, `ctns`, `qty`, `import`,
            `importprice`, `export`, `exportprice`, `notes`) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ";


    $resultarray = array();
    if($stmt = $conn->prepare($sql)){
        $stmt->bind_param(
            "sssiisdiis", 
            $name, $type, $img, $ctns, $quantity, $importdate, $importprice,
            $exportctns, $exportprice, $notes
        );
        if($stmt->execute()){
            $resultarray['response'] = "提交成功: 名字 >> ". $name;
        }else{
            $resultarray['response'] = "提交失败: 名字 >> ". $name . "</br>" . $stmt->error;
        }
    }else{
        $resultarray['response'] = "提交失败: ". $conn->error;
    }
    $conn->close();
    echo json_encode($resultarray);
?>
