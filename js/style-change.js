// syntax for function

/*

function nameOfFunction( you will have parameters ) {
    statements;
}

*/

function changeColor() {
    document.getElementById('box').style.backgroundColor = "red";
}

function defaultColor() {
    document.getElementById('box').style.backgroundColor = "blue";
}

function changeSize() {
    document.getElementById('box').style.width = "100px";
    document.getElementById('box').style.height = "100px";
    document.getElementById('box').style.backgroundColor = "red";
}

function bigSize() {
    document.getElementById('box').style.width = "500px";
    document.getElementById('box').style.height = "500px";
    document.getElementById('box').style.backgroundColor = "blue";
}