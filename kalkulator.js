'use strict';
function display (val) {
    document.getElementById('rezalt').value += val;
    return val;
}
function solve() {
    let x =document.getElementById('rezalt').value;
    let y =eval(x)
    document.getElementById('rezalt').value = y;
    return y;
}
function clearScreen() {
    document.getElementById('rezalt').value='';
}