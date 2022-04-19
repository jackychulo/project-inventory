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
    $result = $conn->query("SELECT * FROM comercialanny_products.products");
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = array(
                'name' => $row['name'],
                'type' => $row['type'],
                'img' => $row['img'],
                'ctns' => $row['ctns'],
                'qty' => $row['qty'],
                'import' => $row['import'],
                'importprice' => $row['importprice'],
                'export' => $row['export'],
                'exportprice' => $row['exportprice'],
                'notes' => $row['notes'],
            );
        }
        $data = json_encode($data);
        if (file_put_contents("../backup/data.json", $data)) {
            echo 'Json file created';
        } else {
            echo 'An error occured in creating the file';
        }
        $conn->close();
    } else {
        $conn->close();
    }
    ?>

</body>

</html>