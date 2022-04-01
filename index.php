<!DOCTYPE html>
<html>
<header>
    <title> Anny 's Inventory</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style/style.css" rel="stylesheet" type="text/css">
    <link href="style/shortcutsfunctions.css" rel="stylesheet" type="text/css">
</header>

<body>
    <div id="content" class="content">

        <nav class="navbar">Inventory</nav>

        <section id="modal" class="modal">
            <button style='padding: 10px 0px 10px 0px;' onclick="modalclose()"> 关闭 </button>
        </section>

        <section id="shortcutscontainer" class="shortcutscontainer">
            <section class="shortcuts">
                <button id="add"> Add </button>
                <button id="delete"> Delete </button>
                <button id="update"> Update </button>
                <button id="deleteall"> Delete All </button>
                <button onclick="location.href='classes/backup.php'";> Backup </button>
                <button> HISTORY </button>
                <button id="refresh"> Refresh </button>
            </section>
            <button id="displayshortcutsbutton" class="displaybutton">S/H</button>
        </section>

        <section id="inventorydisplay" class="inventorydisplay"></section>

    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="js/shortcutsfunctions.js"></script>
    <script>
        //refresh table
        document.getElementById("inventorydisplay").innerHTML = 
            "<h1 style='color: white; width: 100%; text-Align: center;'>LOADING</h1>";
        shortcutsfunctions.refresh();

        var displayshortscutbutton = document.getElementById("displayshortcutsbutton");
        displayshortscutbutton.onclick = () => {
            if (document.getElementById("shortcutscontainer").offsetTop <= -72) {
                showshortcuts();
            } else {
                hideshortcuts();
            }
        }

        function showshortcuts() {
            let pos = 140;
            console.log(document.getElementById("shortcutscontainer").offsetTop);
            let transition = setInterval(() => {
                if (pos <= 0) {
                    clearInterval(transition);
                } else {
                    pos -= 20;
                    document.getElementById("shortcutscontainer").style.bottom = pos + "px";
                    document.getElementById("shortcutscontainer").style.marginBottom = -pos + "px";
                    console.log(document.getElementById("shortcutscontainer").offsetTop);
                }
            }, 5);
        }

        function hideshortcuts() {
            let pos = 0;
            let transition = setInterval(() => {
                if (pos >= 140) {
                    clearInterval(transition);
                    console.log(document.getElementById("shortcutscontainer").offsetTop);
                } else {
                    pos += 20;
                    document.getElementById("shortcutscontainer").style.bottom = pos + "px";
                    document.getElementById("shortcutscontainer").style.marginBottom = -pos + "px";
                }
            }, 5);
        }

        function modalclose() {
            let modal = document.getElementById("modal");
            modal.style.display = "none";
            modal.removeChild(modal.lastChild);
            //document.getElementById("inventorydisplay").innerHTML = 
            //    "<h1 style='color: black; width: 100%; text-Align: center;'>LOADING</h1>";
            //shortcutsfunctions.refresh();
        }
        
        document.getElementById("add").onclick = () => {
            adddata();
        }

        document.getElementById("delete").onclick = () => {
            deletedata();
        }

        document.getElementById("update").onclick = () => {
            updatedata();
        }

        document.getElementById("refresh").onclick = () => {
            refresh();
        }
        
        document.getElementById("deleteall").onclick = () => {
            let modal = document.getElementById("modal");
            modal.style.display = "block";
            modal.appendChild(shortcutsfunctions.deleteall());
        }

        function adddata(){
            let modal = document.getElementById("modal");
            modal.style.display = "block";
            modal.appendChild(shortcutsfunctions.add());
        }
        
        function refresh(){
            document.getElementById("inventorydisplay").innerHTML = 
                "<h1 style='color: black; width: 100%; text-Align: center;'>LOADING</h1>";
            shortcutsfunctions.refresh();
        }

        function updatedata(name){
            let modal = document.getElementById("modal");
            modal.style.display = "block";
            modal.appendChild(shortcutsfunctions.update(name));
        }

        function deletedata(name){
            let modal = document.getElementById("modal");
            modal.style.display = "block";
            modal.appendChild(shortcutsfunctions.delete(name));
        }


    </script>
</body>

</html>
