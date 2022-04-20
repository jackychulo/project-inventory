function statistic(props) {
    let content = document.createElement("div");
    content.classList.add("statistic")

    let block = document.createElement("div");
    block.innerHTML = props?.txt || "hello";
    content.append(block);



    return content;
}