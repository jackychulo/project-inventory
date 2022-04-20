function dashboard(props) {
    let div = document.createElement("div");
    div.classList.add("dashboard")

    let nav = document.createElement("nav");
    div.append(nav);

    let h3 = document.createElement("h2");
    h3.innerHTML = props?.title || "Dashboard";
    nav.append(h3);

    let content = document.createElement("div");
    div.append(content);

    let ul = document.createElement("ul");
    ul.classList.add("nav-links");
    const links = ["Summary", "Statistic", "Overview", "Account"];
    const buttons = [];
    //block level scope
    for (const [i, title] of links.entries()) {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerHTML = title;
        buttons.push(btn);
        btn.addEventListener('click', e => {
            document.querySelector(".nav-links").childNodes.forEach((e, i) => {
                e.classList.remove("active-nav-link");
            });
            li.classList.add("active-nav-link");
            content.innerHTML = "";
            content.append(window[title.toLowerCase()]({ txt: title }));
        });
        if (i == 1) {
            li.classList.add("active-nav-link");
            content.innerHTML = "";
            content.append(window[title.toLowerCase()]({ txt: title }));
        }
        li.append(btn);
        ul.append(li);
    }
    nav.append(ul);
    return div;
}

function summary(props) {
    let content = document.createElement("div");
    content.classList.add("summary");

    let blocks = document.createElement("div");
    blocks.classList.add("blocks")
    content.append(blocks);

    let nproduct = ["Total Product", "Total Shipped", "Total Unshipped"];
    let ndataproduct = [123, 50];
    for (const [i, title] of nproduct.entries()) {
        let block = document.createElement("div");
        block.style.marginRight = "2rem";
        block.classList.add("block")
        blocks.append(block);

        let h4 = document.createElement("h4");
        h4.innerHTML = title;
        block.append(h4);

        //axios call, graphs TODO
        switch (title) {
            case "Total Product":
                console.log("hello1");
                let data1 = document.createElement("p");
                //change
                data1.innerHTML = ndataproduct[0];
                block.append(data1);
                let items1 = document.createElement("span");
                items1.innerHTML = "items"
                data1.append(items1);
                break;
            case "Total Shipped":
                console.log("hello2");
                let data2 = document.createElement("p");
                //change
                data2.innerHTML = ndataproduct[1];
                block.append(data2);
                let items2 = document.createElement("span");
                items2.innerHTML = "items"
                data2.append(items2);
                break;
            case "Total Unshipped":
                console.log("hello3");
                let data3 = document.createElement("p");
                //change
                data3.innerHTML = ndataproduct[0] - ndataproduct[1];
                block.append(data3);
                let items3 = document.createElement("span");
                items3.innerHTML = "items"
                data3.append(items3);
                break;
            default:
                break;
        }
    }
    //create chart
    let block = document.createElement("div");
    block.classList.add("block");
    blocks.append(block);
    let h4 = document.createElement("h4");
    h4.innerHTML = "Products";
    block.append(h4);
    let chart = document.createElement("div");
    chart.classList.add("chart");
    block.append(chart);
    chart.append(ntopproductchart());

    //blocks2
    let blocks2 = document.createElement("div");
    blocks2.classList.add("blocks");
    content.append(blocks2);
    //top products block
    let blocktopnproduct = document.createElement("div");
    blocktopnproduct.classList.add("topnproduct");
    blocks2.append(blocktopnproduct);
    let topnproducttitle = document.createElement("h4");
    topnproducttitle.innerHTML = "Top Products";
    blocktopnproduct.append(topnproducttitle);
    let ntopproduct = ["Apple", "Mazana", "Cookiie", "Iphone", "Something"]
    for (const [i, product] of ntopproduct.entries()) {
        let block = document.createElement("div");
        block.classList.add("block")
        blocktopnproduct.append(block);

        let img = document.createElement("img");
        img.src = "http://placekitten.com/200/300";
        block.append(img);

        let h4 = document.createElement("h4");
        h4.innerHTML = product;
        block.append(h4);

        let btn = document.createElement("button");
        btn.innerHTML = ">";
        block.append(btn);
    }

    let renvenue = document.createElement("div");
    renvenue.classList.add("renvenue");
    blocks2.append(renvenue);
    let nrenvenue = ["Number of Sales", "Revenue", "Profit", "Cost", "125215"];
    let ndatarenvenue = ["200", "150,009", "39,709", "110,300", "5125125"]
    for (const [i, item] of nrenvenue.entries()) {
        let block = document.createElement("div");
        block.classList.add("block");
        renvenue.append(block)

        let h4 = document.createElement("h4");
        h4.innerHTML = item;
        block.append(h4);

        let h3 = document.createElement("h3");
        h3.innerHTML = ndatarenvenue[i];
        block.append(h3);
    }

    return content;
}

function overview(props) {
    let content = document.createElement("div");

    let block = document.createElement("div");
    block.innerHTML = props?.txt || "hello";
    content.append(block);

    return content;
}

function account(props) {
    let content = document.createElement("div");

    let block = document.createElement("div");
    block.innerHTML = props?.txt || "hello";
    content.append(block);

    return content;
}

function getproducts() {

}