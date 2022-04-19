function dbselection(obj){

    var content = document.createElement("div")
    content.classList.add("dbselection");

    content.currentdbtable = "none";
    content.currenttitle = "none";

    let arr = obj || [
        {
            title: "新货7月2021",
            tablename: "comercialanny_products.products" 
        },
        {
            title: "旧货",
            tablename: "comercialanny_products.oldproducts"
        },
        {
            title: "empty",
            tablename: "comercialanny_products.oldproducts"
        },
        {
            title: "empty",
            tablename: "comercialanny_products.oldproducts"
        },
        {
            title: "empty",
            tablename: "comercialanny_products.oldproducts"
        },
        {
            title: "empty",
            tablename: "comercialanny_products.oldproducts"
        },
        {
            title: "empty",
            tablename: "comercialanny_products.oldproducts"
        }
    ];

    for(var i = 0; i < arr.length ; i++){
        var btn = document.createElement("button");
        var displaytext = document.createElement("h5");
        btn.onclick = (function (db){
            return () => {
                shortcutsfunctions.refresh(db.tablename);
                content.currentdbtable = db.tablename;
                content.currenttitle = db.title;
                document.getElementById("selectedbtabletitle").innerHTML = dbselectionobj.currenttitle;
                
                searchdbobj.setfinput("");
            };
        })(arr[i]);

        displaytext.innerHTML = arr[i].title;
        btn.appendChild(displaytext);
        content.appendChild(btn);
    }


    
    return content;
}