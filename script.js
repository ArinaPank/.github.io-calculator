var first = 0;
var second = 0;

function addDigit(digitToAdd){
    if (document.getElementById('result').value == 0){
        document.getElementById('result').value = digitToAdd;
    }
    else{
        document.getElementById('result').value +=digitToAdd;
    }
}

function operation(code){
    first = document.getElementById('result').value;
    document.getElementById('fir').value = first;
    codes = code;
    clear();
}

function clear(){
    document.getElementById('result').value=0;
}

function rsr(){
    first = document.getElementById('result').value;
    document.getElementById('fir').value = first;
    document.getElementById('oper').value = '/2';
    second=2
    itog = parseFloat(first) / parseFloat(second);
    document.getElementById('sec').value = second;
    document.getElementById('result').value = itog;
}

function calc(){
    second=document.getElementById('result').value;
    if(codes == 1){
        document.getElementById('oper').value = '*';
        itog =parseInt(first) * parseInt(second);
    }
    else if(codes == 0){
        document.getElementById('oper').value = '/';
        itog =parseInt(first) / parseInt(second);
    }
    else if(codes == 2){
        document.getElementById('oper').value = '+';
        itog =parseInt(first) + parseInt(second);
    }
    else if(codes == 3){
        document.getElementById('oper').value = '-';
        itog =parseInt(first) - parseInt(second);
    }
    document.getElementById('sec').value = second;
    document.getElementById('result').value = itog;
}

function cle(){
    clear();
}