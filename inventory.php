<!DOCTYPE html>
<html>
<header>
    <title> Anny 's Inventory</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style/style.css" rel="stylesheet" type="text/css">
    <link href="style/shortcutsfunctions.css" rel="stylesheet" type="text/css">
    <link href="style/dbselection.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="style/searchdb.css" class="css">
    <link rel="stylesheet" href="style/sidebar.css">
</header>

<body>
    <div id="content" class="content">
        <div class="sidebar">
            <ul>
                <li>
                    <a href="#">
                        <img src="imgs/dashboard_white_24dp.svg" alt="dashboard" width="40px" height="40px">
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="imgs/dashboard_white_24dp.svg" alt="dashboard" width="40px" height="40px">
                        <span>Exit</span>
                    </a>
                </li>
            </ul>
        </div>
        <nav class="navbar">Inventory</nav>


        <!-- <section id="modal" class="modal">
            <button style='padding: 10px 0px 10px 0px;' onclick="shortcutsfunctions.modalclose()"> 关闭 </button>
        </section>

        <section id="shortcutscontainer" class="shortcutscontainer">
            <section class="shortcuts">
                <button id="add" onclick="shortcutsfunctions.adddata()"> 添加 </button>
                <button id="delete" onclick="shortcutsfunctions.deletedata()"> 清除 </button>
                <button id="update" onclick="shortcutsfunctions.updatedata()"> 更新 </button>
                <button id="deleteall" disabled> 全部清除 </button>
                <button id='backup' onclick="location.href='classes/backup.php'" ;> 备份数据 </button>
                <button disabled> HISTORY </button>
                <button id="refresh" onclick="shortcutsfunctions.refreshselectedtable()"> 刷新 </button>
            </section>

        </section>

        <section id="dbselection"></section>

        <section id="selectedbtabletitle" class="selectedbtabletitle"></section>

        <section id="searchbar"></section>
        <section id="inventorydisplay" class="inventorydisplay"></section> -->

    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="js/shortcutsfunctions.js"></script>
    <script src="js/dbselection.js"></script>
    <script src="js/searchdb.js"></script>
    <script src="js/sidebar.js"></script>
    <script>
        let dbselectionobj = dbselection();
        document.getElementById("dbselection").append(dbselectionobj);

        let searchdbobj = searchdb();
        document.getElementById("dbselection").append(searchdbobj);

        let sc = document.getElementById("shortcutscontainer");
        let sticky = document.getElementById("shortcutscontainer").offsetTop;
        window.onscroll = () => {
            if (window.pageYOffset >= sticky) {
                document.getElementById("shortcutscontainer").classList.add('sticky');
            } else {
                document.getElementById("shortcutscontainer").classList.remove('sticky');
            }
        }
    </script>
</body>

</html>