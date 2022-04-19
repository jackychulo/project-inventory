<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $dbini = parse_ini_file("../db.ini");
    $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $data = array();
    if ($result = $conn->query("show tables from comercialanny_products;")) {
        while ($row = $result->fetch_array()) {
            $data[] = $row[0];
        }
    }else{
        echo "dead";
    }

    echo $data;
    $conn->close();
    ?>
</body>

</html>