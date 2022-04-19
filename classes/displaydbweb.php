<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <title>Document</title>
</head>
<body>
    <?php
        $dbini = parse_ini_file("../db.ini");
        $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

        if ($conn->connect_error) {
            echo "<h1>" . "connectoin failed: " . $conn->connect_error . "</h1>";
        }

        $result = $conn->query("SELECT * FROM comercialanny_products.products");

        $dbtable = "";
        $dbtable = "<table id='table'>";
        $dbtable .= '<tr>
                        <th>名字</th>
                        <th>品种</th>
                        <th>图片</th>
                        <th>箱数</th>
                        <th>箱量</th>
                        <th>总数量</th>
                        <th>进货日</th>
                        <th>进货价</th>
                        <th>出货箱数</th>
                        <th>出货价</th>
                        <th>现总箱数</th>
                        <th>附注</th>
                    </tr>';

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $dbtable .= "<tr>" .
                    "<td>" . $row['name'] .
                    '</br><button style="margin-Top: 10px;width: 50px; height: 25px;border: 1px solid black; border-radius: 0px;"onclick="updatedata(\'' . $row['name'] . '\')">修改</button>
                                    <button style="margin-Top: 10px;width: 50px; height: 25px;border: 1px solid black; border-radius: 0px;"onclick="deletedata(\'' . $row['name'] . '\')">清除</button>' .
                    "<td>" . $row['type'] . "</td>" .
                    "<td><img src='" . $row['img'] . "'></td>" .
                    "<td>" . $row['ctns'] . "</td>" .
                    "<td>" . $row['qty'] . "</td>" .
                    "<td>" . ($row['ctns'] * $row['qty']) . "</td>" .
                    "<td>" . $row['import'] . "</td>" .
                    "<td>" . $row['importprice'] . "</td>" .
                    "<td>" . $row['export'] . "</td>" .
                    "<td>" . $row['exportprice'] . "</td>" .
                    "<td>" . ($row['ctns'] - $row['export']) . "</td>" .
                    "<td>" . $row['notes'] . "</td>" .
                    "</tr>";

                "<input type=‘submit’ name=‘name’ value=‘delete’ onclick=\“Show(’$image’)\”>";
            }
        } else {
            $dbtable .= "<h1 style='color: black; width: 100%; text-Align: center;'>什么都没有</h1>";
            $conn->close();
        }

        $dbtable .= "</table>";
        echo $dbtable;
    ?>
</body>
</html>