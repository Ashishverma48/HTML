// CL 

let result = document.getElementById('result');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

function addBtn(){
    let num1_Value  = parseInt(num1.value);
    let num2_Value  = parseInt(num2.value);
    result.value = sum(num1_Value,num2_Value)
   
}
function subBtn(){
    let num1_Value  = parseInt(num1.value);
    let num2_Value  = parseInt(num2.value);
    result.value = sub(num1_Value,num2_Value)
}

function mulBtn(){
    let num1_Value  = Number(num1.value);
    let num2_Value  = Number(num2.value);
    result.value = mul(num1_Value,num2_Value)
}
function divBtn(){
    let num1_Value  = Number(num1.value);
    let num2_Value  = Number(num2.value);
    result.value = div(num1_Value,num2_Value)
}

// BLL FUNCTION

function sum(num1,num2){
    let res = num1 + num2
    return res
    
}
function sub(num1,num2){
    let res =  num1-num2
    return res
}
function mul(num1,num2){
    return num1*num2
    
    
}
function div(num1,num2){
    return num1/num2
}