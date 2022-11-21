const clearEl = document.getElementById("clear");
clearEl.style.backgroundColor = "orange";
const eqlEl = document.getElementById("eqlEl");
eqlEl.style.backgroundColor = "red";
//clear function
//summation function
//mult function
//display function
const displayInputEl = document.getElementById("display");


function displayChar(clickVal) {
    displayInputEl.value += clickVal;
    return clickVal;
}
function clearScreen() {
    displayInputEl.value = "";
}
function result () {
    displayInputEl.value = eval(displayInputEl.value);
}
