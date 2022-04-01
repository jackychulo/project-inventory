"use strict";

var shortcutsfunctions = {};

(function() {

    shortcutsfunctions.add = function() {
        var content = document.createElement("div");
        content.classList.add("modalcontent")

        var title = document.createElement("label");
        title.style.fontSize = "20px";
        title.style.flex = "1 0 100%";
        title.style.width = "100%";
        title.style.margin = "0px 0px 10px 0px";
        title.style.textAlign = "center";
        title.innerHTML = "添加";
        content.appendChild(title);

        const br = document.createElement('br');
        content.appendChild(br);

        var name = document.createElement("label");
        name.innerHTML = "名字";
        content.appendChild(name);

        var nameinput = document.createElement("input");
        content.appendChild(nameinput);
        
        content.appendChild(br);

        var type = document.createElement("label");
        type.innerHTML = "品种";
        content.appendChild(type);

        var typeinput = document.createElement("input");
        content.appendChild(typeinput);
        
        content.appendChild(br);
        
        var img = document.createElement("label");
        img.innerHTML = "图片地址";
        content.appendChild(img);

        var imginput = document.createElement("input");
        content.appendChild(imginput);

        var ctns = document.createElement("label");
        ctns.innerHTML = "箱数";
        content.appendChild(ctns);

        var ctnsinput = document.createElement("input");
        content.appendChild(ctnsinput);

        var quantity = document.createElement("label");
        quantity.innerHTML = "箱量";
        content.appendChild(quantity);

        var quantityinput = document.createElement("input");
        content.appendChild(quantityinput);
        
        /*var total = document.createElement("label");
        total.innerHTML = "总数量";
        content.appendChild(total);

        var totalinput = document.createElement("input");
        content.appendChild(totalinput); */

        var entrydate = document.createElement("label");
        entrydate.innerHTML = "进货日";
        content.appendChild(entrydate);

        var entrydateinput = document.createElement("input");
        content.appendChild(entrydateinput);
        
        var entryprice = document.createElement("label");
        entryprice.innerHTML = "进货价";
        content.appendChild(entryprice);

        var entrypriceinput = document.createElement("input");
        content.appendChild(entrypriceinput);

        var exportctns = document.createElement("label");
        exportctns.innerHTML = "出货箱数";
        content.appendChild(exportctns);

        var exportctnsinput = document.createElement("input");
        content.appendChild(exportctnsinput);
        
        var exportprice = document.createElement("label");
        exportprice.innerHTML = "出货价";
        content.appendChild(exportprice);

        var exportpriceinput = document.createElement("input");
        content.appendChild(exportpriceinput);

        var notes = document.createElement("label");
        notes.innerHTML = "附注";
        content.appendChild(notes);

        var notesinput = document.createElement("input");
        content.appendChild(notesinput);

        var errormsg = document.createElement("summary");
        errormsg.innerHTML = "???????";
        content.appendChild(errormsg);

        var submit = document.createElement("button");
        submit.style.marginTop = "20px";
        submit.style.padding = "10px";
        submit.innerHTML = "OK";
        content.appendChild(submit);

        submit.onclick = () => {
            if(nameinput.value === ""){
                errormsg.innerHTML = "至少输入货名";
            }else{
                var inputs = {
                    "name": nameinput.value,
                    "type": typeinput.value,
                    "img": imginput.value,
                    "ctns": ctnsinput.value,
                    "quantity": quantityinput.value,
                    "importdate": entrydateinput.value,
                    "importprice": entrypriceinput.value,
                    "exportctns": exportctnsinput.value,
                    "exportprice": exportpriceinput.value,
                    "notes": notesinput.value
                };

                console.log(inputs);

                $.ajax({
                    type: 'POST',
                    url: "http://comercialanny.com/inventory/classes/insert.php",
                    data: inputs,
                    dataType: 'json',
                    success: function(result) {
                        errormsg.innerHTML = "服务器+： " + result.response;
                        shortcutsfunctions.refresh();
                    },
                    error: function(xhr, status, error){
                        errormsg.innerHTML = "服务器-： " + xhr + "</br>" + status + "</br>" + error;
                    }
                });
            }
        }

        return content;
    }

    shortcutsfunctions.delete = function(inputname){
        var content = document.createElement("div");
        content.classList.add("modalcontent")

        var title = document.createElement("label");
        title.style.flex = "1 0 100%";
        title.style.marginLeft = "0px";
        title.style.marginTop = "0px";
        title.style.textAlign = "center";
        title.innerHTML = "删除";
        content.appendChild(title);
        
        //search 
        var name = document.createElement("label");
        name.innerHTML = "名字";
        content.appendChild(name);

        var nameinput = document.createElement("input");
        if(inputname!==null){
            nameinput.value = inputname;
        }
        content.appendChild(nameinput);

        var type = document.createElement("label");
        type.innerHTML = "品种";
        content.appendChild(type);

        var typeinput = document.createElement("input");
        typeinput.disabled = true;
        content.appendChild(typeinput);
        
        var img = document.createElement("label");
        img.innerHTML = "图片地址";
        content.appendChild(img);

        var imginput = document.createElement("input");
        imginput.disabled = true;
        content.appendChild(imginput);


        var ctns = document.createElement("label");
        ctns.innerHTML = "箱数";
        content.appendChild(ctns);

        var ctnsinput = document.createElement("input");
        ctnsinput.disabled = true;
        content.appendChild(ctnsinput);

        var quantity = document.createElement("label");
        quantity.innerHTML = "箱量";
        content.appendChild(quantity);

        var quantityinput = document.createElement("input");
        quantityinput.disabled = true;
        content.appendChild(quantityinput);
        
        var total = document.createElement("label");
        total.innerHTML = "总数量";
        content.appendChild(total);

        var totalinput = document.createElement("input");
        totalinput.disabled = true;
        content.appendChild(totalinput);

        var entrydate = document.createElement("label");
        entrydate.innerHTML = "进货日";
        content.appendChild(entrydate);

        var entrydateinput = document.createElement("input");
        entrydateinput.disabled = true;
        content.appendChild(entrydateinput);
        
        var entryprice = document.createElement("label");
        entryprice.innerHTML = "进货价";
        content.appendChild(entryprice);

        var entrypriceinput = document.createElement("input");
        entrypriceinput.disabled = true;
        content.appendChild(entrypriceinput);

        var exportctns = document.createElement("label");
        exportctns.innerHTML = "出货箱数";
        content.appendChild(exportctns);

        var exportctnsinput = document.createElement("input");
        exportctnsinput.disabled = true;
        content.appendChild(exportctnsinput);
        
        var exportprice = document.createElement("label");
        exportprice.innerHTML = "出货价";
        content.appendChild(exportprice);

        var exportpriceinput = document.createElement("input");
        exportpriceinput.disabled = true;
        content.appendChild(exportpriceinput);
        
        var currenttotal = document.createElement("label");
        currenttotal.innerHTML = "现总箱数";
        content.appendChild(currenttotal);

        var currenttotalinput = document.createElement("input");
        currenttotalinput.disabled = true;
        content.appendChild(currenttotalinput);

        var notes = document.createElement("label");
        notes.innerHTML = "附注";
        content.appendChild(notes);

        var notesinput = document.createElement("input");
        notesinput.disabled = true;
        content.appendChild(notesinput);

        var errormsg = document.createElement("summary");
        errormsg.innerHTML = "???????";
        content.appendChild(errormsg);

        var submit = document.createElement("button");
        submit.style.marginTop = "20px";
        submit.style.padding = "10px";
        submit.innerHTML = "OK";
        content.appendChild(submit);

        submit.onclick = () => {
            if(nameinput.value === ""){
                errormsg.innerHTML = "至少输入货名";
            }else{
                $.ajax({
                    type: 'POST',
                    url: "http://comercialanny.com/inventory/classes/delete.php",
                    data: {name:nameinput.value},
                    dataType: 'json',
                    success: function(result) {
                        errormsg.innerHTML = "服务器+： " + result.response;
                        shortcutsfunctions.refresh();
                    },
                    error: function(xhr, status, error){
                        errormsg.innerHTML = "服务器-： " + xhr + "</br>" + status + "</br>" + error;
                        console.log("xhr");
                        console.log(xhr);
                    }
                });
            }
        }
        if(nameinput.value !== null){
            $.ajax({
                type: 'POST',
                url: "http://comercialanny.com/inventory/classes/select.php",
                data: {"name": nameinput.value},
                dataType: 'json',
                success: function(result) {
                        if(result.response !== "找不到"){
                            errormsg.innerHTML = "服务器+： " + result.response;
                            typeinput.value = result['data'].type;
                            imginput.value = result['data'].img;
                            ctnsinput.value = result['data'].ctns;
                            quantityinput.value = result['data'].quantity;
                            totalinput.value = result['data'].ctns * result['data'].quantity;
                            entrydateinput.value = result['data'].entrydate;
                            entrypriceinput.value = result['data'].entryprice;
                            exportctnsinput.value = result['data'].exportctns;
                            exportpriceinput.value = result['data'].exportprice;
                            currenttotalinput.value = result['data'].ctns - result['data'].exportctns;
                        }else{
                            errormsg.innerHTML = "服务器+： " + result.response;
                            typeinput.value = "";
                            imginput.value = "";
                            ctnsinput.value = "";
                            quantityinput.value = "";
                            totalinput.value = "";
                            entrydateinput.value = "";
                            entrypriceinput.value = "";
                            exportctnsinput.value = "";
                            exportpriceinput.value = "";
                            currenttotalinput.value = "";
                        }
                        
                        
                    },
                    error: function(xhr, status, error){
                        errormsg.innerHTML = "服务器-： " + error;
                    }
            });
        }

        nameinput.onkeyup = () => {
            $.ajax({
                type: 'POST',
                url: "http://comercialanny.com/inventory/classes/select.php",
                data: {"name": nameinput.value},
                dataType: 'json',
                success: function(result) {
                        if(result.response !== "找不到"){
                            errormsg.innerHTML = "服务器+： " + result.response;
                            typeinput.value = result['data'].type;
                            imginput.value = result['data'].img;
                            ctnsinput.value = result['data'].ctns;
                            quantityinput.value = result['data'].quantity;
                            totalinput.value = result['data'].ctns * result['data'].quantity;
                            entrydateinput.value = result['data'].entrydate;
                            entrypriceinput.value = result['data'].entryprice;
                            exportctnsinput.value = result['data'].exportctns;
                            exportpriceinput.value = result['data'].exportprice;
                            currenttotalinput.value = result['data'].ctns - result['data'].exportctns;
                        }else{
                            errormsg.innerHTML = "服务器+： " + result.response;
                            typeinput.value = "";
                            imginput.value = "";
                            ctnsinput.value = "";
                            quantityinput.value = "";
                            totalinput.value = "";
                            entrydateinput.value = "";
                            entrypriceinput.value = "";
                            exportctnsinput.value = "";
                            exportpriceinput.value = "";
                            currenttotalinput.value = "";
                        }
                        
                        
                    },
                    error: function(xhr, status, error){
                        errormsg.innerHTML = "服务器-： " + error;
                    }
            });
        }
        
        return content;
    }

    shortcutsfunctions.refresh = () => {
        $.get(
            "classes/displaydb.php",
            (data) => {
                $( '#inventorydisplay' ).html(data);
            }
        )
        
    }

    shortcutsfunctions.update = (inputname) => {
        var content = document.createElement("div");
        content.classList.add("modalcontent")
        
        var title = document.createElement("label");
        title.style.flex = "1 0 100%";
        title.style.marginLeft = "0px";
        title.style.marginTop = "0px";
        title.style.textAlign = "center";
        title.innerHTML = "更新";
        content.appendChild(title);
        
        //search 
        var name = document.createElement("label");
        name.innerHTML = "名字";
        content.appendChild(name);

        var nameinput = document.createElement("input");
        if(inputname!== null){
            nameinput.value = inputname;
        }
        content.appendChild(nameinput);

        var type = document.createElement("label");
        type.innerHTML = "品种";
        content.appendChild(type);

        var typeinput = document.createElement("input");
        content.appendChild(typeinput);
        
        var img = document.createElement("label");
        img.innerHTML = "图片地址";
        content.appendChild(img);

        var imginput = document.createElement("input");
        content.appendChild(imginput);

        var ctns = document.createElement("label");
        ctns.innerHTML = "箱数";
        content.appendChild(ctns);

        var ctnsinput = document.createElement("input");
        content.appendChild(ctnsinput);

        var quantity = document.createElement("label");
        quantity.innerHTML = "箱量";
        content.appendChild(quantity);

        var quantityinput = document.createElement("input");
        content.appendChild(quantityinput);
        
        var total = document.createElement("label");
        total.innerHTML = "总数量";
        content.appendChild(total);

        var totalinput = document.createElement("input");
        totalinput.disabled = true;
        content.appendChild(totalinput);

        var entrydate = document.createElement("label");
        entrydate.innerHTML = "进货日";
        content.appendChild(entrydate);

        var entrydateinput = document.createElement("input");
        content.appendChild(entrydateinput);
        
        var entryprice = document.createElement("label");
        entryprice.innerHTML = "进货价";
        content.appendChild(entryprice);

        var entrypriceinput = document.createElement("input");
        content.appendChild(entrypriceinput);

        var exportctns = document.createElement("label");
        exportctns.innerHTML = "出货箱数";
        content.appendChild(exportctns);

        var exportctnsinput = document.createElement("input");
        content.appendChild(exportctnsinput);
        
        var exportprice = document.createElement("label");
        exportprice.innerHTML = "出货价";
        content.appendChild(exportprice);

        var exportpriceinput = document.createElement("input");
        content.appendChild(exportpriceinput);
        
        var currenttotal = document.createElement("label");
        currenttotal.innerHTML = "现总箱数";
        content.appendChild(currenttotal);

        var currenttotalinput = document.createElement("input");
        currenttotalinput.disabled = true;
        content.appendChild(currenttotalinput);

        var notes = document.createElement("label");
        notes.innerHTML = "附注";
        content.appendChild(notes);

        var notesinput = document.createElement("input");
        content.appendChild(notesinput);

        var errormsg = document.createElement("summary");
        errormsg.innerHTML = "???????";
        content.appendChild(errormsg);

        var submit = document.createElement("button");
        submit.style.marginTop = "20px";
        submit.style.padding = "10px";
        submit.innerHTML = "OK";
        content.appendChild(submit);

        submit.onclick = () => {
            if(nameinput.value === ""){
                errormsg.innerHTML = "至少输入商品名字";
            }else{
                var inputs = {
                    "name": nameinput.value,
                    "type": typeinput.value,
                    "img": imginput.value,
                    "ctns": ctnsinput.value,
                    "quantity": quantityinput.value,
                    "importdate": entrydateinput.value,
                    "importprice": entrypriceinput.value,
                    "exportctns": exportctnsinput.value,
                    "exportprice": exportpriceinput.value,
                    "notes": notesinput.value
                };
                console.log(inputs);
                $.ajax({
                    type: 'POST',
                    url: "http://comercialanny.com/inventory/classes/update.php",
                    data: inputs,
                    dataType: 'json',
                    success: function(result) {
                        errormsg.innerHTML = "服务器+： " + result.response;
                        shortcutsfunctions.refresh();
                    },
                    error: function(xhr, statuts, error){
                        errormsg.innerHTML = "服务器-： " + xhr + " " +error;
                    }
                });
            }
        }

        if(nameinput.value !== null){
            $.ajax({
                type: 'POST',
                url: "http://comercialanny.com/inventory/classes/select.php",
                data: {"name": nameinput.value},
                dataType: 'json',
                success: function(result) {
                        if(result.response !== "找不到"){
                            errormsg.innerHTML = "服务器+： " + result.response;
                            typeinput.value = result['data'].type;
                            imginput.value = result['data'].img;
                            ctnsinput.value = result['data'].ctns;
                            quantityinput.value = result['data'].quantity;
                            totalinput.value = result['data'].ctns * result['data'].quantity;
                            entrydateinput.value = result['data'].entrydate;
                            entrypriceinput.value = result['data'].entryprice;
                            exportctnsinput.value = result['data'].exportctns;
                            exportpriceinput.value = result['data'].exportprice;
                            currenttotalinput.value = result['data'].ctns - result['data'].exportctns;
                        }else{
                            errormsg.innerHTML = "服务器+： " + result.response;
                            typeinput.value = "";
                            imginput.value = "";
                            ctnsinput.value = "";
                            quantityinput.value = "";
                            totalinput.value = "";
                            entrydateinput.value = "";
                            entrypriceinput.value = "";
                            exportctnsinput.value = "";
                            exportpriceinput.value = "";
                            currenttotalinput.value = "";
                        }
                        
                        
                    },
                    error: function(xhr, status, error){
                        errormsg.innerHTML = "服务器-： " + error;
                    }
            });
        }

        nameinput.onkeyup = () => {
            $.ajax({
                type: 'POST',
                url: "http://comercialanny.com/inventory/classes/select.php",
                data: {"name": nameinput.value},
                dataType: 'json',
                success: function(result) {
                        if(result.response !== "找不到"){
                            errormsg.innerHTML = "服务器+： " + result.response;
                            typeinput.value = result['data'].type;
                            imginput.value = result['data'].img;
                            ctnsinput.value = result['data'].ctns;
                            quantityinput.value = result['data'].quantity;
                            totalinput.value = result['data'].ctns * result['data'].quantity;
                            entrydateinput.value = result['data'].entrydate;
                            entrypriceinput.value = result['data'].entryprice;
                            exportctnsinput.value = result['data'].exportctns;
                            exportpriceinput.value = result['data'].exportprice;
                            currenttotalinput.value = result['data'].ctns - result['data'].exportctns;
                        }else{
                            errormsg.innerHTML = "服务器+： " + result.response;
                            typeinput.value = "";
                            imginput.value = "";
                            ctnsinput.value = "";
                            quantityinput.value = "";
                            totalinput.value = "";
                            entrydateinput.value = "";
                            entrypriceinput.value = "";
                            exportctnsinput.value = "";
                            exportpriceinput.value = "";
                            currenttotalinput.value = "";
                        }
                        
                        
                    },
                    error: function(xhr, status, error){
                        errormsg.innerHTML = "服务器-： " + error;
                    }
            });
        }
        return content;
    }
    
    shortcutsfunctions.deleteall = () => {
        var content = document.createElement("div");
        content.classList.add("modalcontent")
        content.style.width = "100%";
        content.style.height = "100px";

        var title = document.createElement("label");
        title.style.fontSize = "20px";
        title.style.flex = "none";
        title.style.margin = "0px 10px 0px 0px";
        title.innerHTML = "全部清除?";
        content.appendChild(title);
        
        var password = document.createElement("input");
        content.appendChild(password);
        
        var comfirmbtn = document.createElement("btn");
        comfirmbtn.innerHTML = "OK";
        comfirmbtn.style.margin = "0px 0px 0px 10px";
        comfirmbtn.style.border = "2px solid red";
        comfirmbtn.style.padding = "10px";
        content.appendChild(comfirmbtn);
        
        /*comfirmbtn.onclick = () => {
            $.ajax({
                url: "http://comercialanny.com/inventory/classes/deleteall.php",
                success: () => {
                    alert("清除成功");
                    shortcutsfunctions.refresh();
                }
            })
        }*/
        
        return content;
    }
}());