<?php
        $dbini = parse_ini_file("../db.ini");
        $conn = new mysqli($dbini['servername'], $dbini['username'], $dbini['password']);

        if ($conn->connect_error) {
            echo "<h1>"."connectoin failed: " . $conn->connect_error . "</h1>";
        }

        $result = $conn->query("SELECT * FROM comercialanny_products.products");

        $dbtable = "";
        $dbtable = "<table id='table'>";
        $dbtable .= '<tr>
                <th>Name</th>
                <th>Product Type</th>
                <th>Image</th>
                <th>CTN</th>
                <th>QTY</th>
                <th>Total</th>
                <th>Shipped In Date</th>
                <th>Purchase Price</th>
                <th>Shipped Out Date</th>
                <th>Shipping Price</th>
                <th>Current CTN</th>
                <th>Note</th>
            </tr>';

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $dbtable .= "<tr>" .
                        "<td>". $row['name'].
                             '</br><button style="margin-Top: 10px;width: 50px; height: 25px;border: 1px solid black; border-radius: 0px;"onclick="updatedata(\''.$row['name']. '\')">修改</button>
                             <button style="margin-Top: 10px;width: 50px; height: 25px;border: 1px solid black; border-radius: 0px;"onclick="deletedata(\''.$row['name']. '\')">清除</button>' .
                        "<td>". $row['type']. "</td>" .
                        "<td><img src='". $row['img']. "'></td>" .
                        "<td>". $row['ctns']. "</td>" .
                        "<td>". $row['qty']. "</td>" .
                        "<td>". ($row['ctns']*$row['qty']). "</td>" .
                        "<td>". $row['import']. "</td>" .
                        "<td>". $row['importprice']. "</td>" .
                        "<td>". $row['export']. "</td>" .
                        "<td>". $row['exportprice']. "</td>" .
                        "<td>". ($row['ctns']-$row['export']). "</td>" .
                        "<td>". $row['notes']. "</td>" .
                    "</tr>";
            }
        } else {
            $dbtable .= "<h1 style='color: black; width: 100%; text-Align: center;'>Empty...</h1>";
            $conn->close();
        }

        $dbtable .= "</table>";
        echo $dbtable;
?>