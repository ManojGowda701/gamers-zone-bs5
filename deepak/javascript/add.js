
function add(event){
    console.log("Add called")
    event.preventDefault();
    var a = parseInt(document.getElementById("inputA").value);
    var b = parseInt(document.getElementById("inputB").value);
    var result =  a + b;
    document.getElementById("results").innerHTML = result;
}

function sub(event){
    event.preventDefault();
    var a = parseInt(document.getElementById("inputA").value);
    var b = parseInt(document.getElementById("inputB").value);
    var result =  Math.abs(a - b);
    document.getElementById("results").innerHTML = result;
}

function multiply(event){
    event.preventDefault();
    var a = parseInt(document.getElementById("inputA").value);
    var b = parseInt(document.getElementById("inputB").value);
    var result =  a * b;
    document.getElementById("results").innerHTML = result;
}

function divide(event){
    event.preventDefault();
    var a = parseInt(document.getElementById("inputA").value);
    var b = parseInt(document.getElementById("inputB").value);
    var result =  a / b;
    document.getElementById("results").innerHTML = result;
}