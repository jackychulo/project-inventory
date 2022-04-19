function searchdb(){
    var content = document.createElement("div");
    content.classList.add("searchdb");

    var form = document.createElement("form");
    content.appendChild(form);

    var finput = document.createElement("input");
    finput.placeholder = "查找";
    form.appendChild(finput);

    finput.onkeyup = () => {
        if(finput.value){
            shortcutsfunctions.refresh(dbselectionobj.currentdbtable, finput.value);
        }else{
            shortcutsfunctions.refresh(dbselectionobj.currentdbtable);
        }
    }

    content.setfinput = (newinput) => {
        finput.value = newinput;
    }

    return content;
}