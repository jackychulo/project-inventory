<?php
    $dbini = parse_ini_file("../db.ini");
    $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $id = $_POST['name'];

    $sql = "SELECT type, img, ctns, qty, import, importprice,
            export, exportprice, notes
            FROM comercialanny_products.products
            WHERE name=?;";

    
    if($stmt = $conn->prepare($sql)){
        $stmt->bind_param(
            "s", $id
        );
        $stmt->execute();
        
        $stmt->bind_result($type, $img, $ctns, $qty, $import,
                            $importprice,  $export, $exportprice,
                            $notes);

        $resultarray = array();

        $counter = 0;
        while($stmt->fetch()){
            $resultarray['data'] = array(
                'type' => $type,
                'img' => $img,
                'ctns' => $ctns,
                'quantity' => $qty,
                'entrydate' => $import,
                'entryprice' => $importprice,
                'exportctns' => $export,
                'exportprice' => $exportprice,
                'notes' => $notes
            );
            $counter++;
        }
        if($counter != 0){
            $resultarray['response'] = "找到了";
        }else{
            $resultarray['response'] = "找不到";
        }
    }else{
        $resultarray['response'] = "ID Invalid: ". $conn->error;
    }
    $conn->close();
    echo json_encode($resultarray);
?>
