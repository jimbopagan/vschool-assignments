function addFunk() {
    var addNum1 = document.getElementById("addNum1");
    var addNum2 = document.getElementById("addNum2");
    var add1 = parseInt(addNum1.value);
    var add2 = parseInt(addNum2.value);

    var total = add1 + add2;
    // create empty <p> tag
    var p = document.createElement("p");
    // create text node with text of numbers
    var txtNode = document.createTextNode(total);
    // append txtNode to the p element
    p.appendChild(txtNode);

    // get the html and attach p as the child of the html
    var myBod = document.getElementById("total");
    myBod.appendChild(p);
}

function subtractFunk() {
    var subtractNum1 = document.getElementById("subtractNum1");
    var subtractNum2 = document.getElementById("subtractNum2");
    var subtract1 = parseInt(subtractNum1.value);
    var subtract2 = parseInt(subtractNum2.value);

    var total = subtract1 - subtract2;
    // create empty <p> tag
    var p = document.createElement("p");
    // create text node with text of numbers
    var txtNode = document.createTextNode(total);
    // append txtNode to the p element
    p.appendChild(txtNode);

    // get the html and attach p as the child of the html
    var myBod = document.getElementById("total");
    myBod.appendChild(p);
}

function multiplyFunk() {
    var multiplyNum1 = document.getElementById("multiplyNum1");
    var multiplyNum2 = document.getElementById("multiplyNum2");
    var multiply1 = parseInt(multiplyNum1.value);
    var multiply2 = parseInt(multiplyNum2.value);

    var total = multiply1 * multiply2;
    // create empty <p> tag
    var p = document.createElement("p");
    // create text node with text of numbers
    var txtNode = document.createTextNode(total);
    // append txtNode to the p element
    p.appendChild(txtNode);

    // get the html and attach p as the child of the html
    var myBod = document.getElementById("total");
    myBod.appendChild(p);
}
