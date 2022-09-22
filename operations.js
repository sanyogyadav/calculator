var num1, num2, add, sub, mul, div;

function addition(){
    num1 = eval(document.getElementById("firstnumber").value);
    num2 = eval(document.getElementById("secondnumber").value);
    add = num1 + num2;
    document.getElementById("result").value = add;
    document.getElementById("firstnumber").value="";
    document.getElementById("secondnumber").value="";
}

function subtraction(){
    num1 = eval(document.getElementById("firstnumber").value);
    num2 = eval(document.getElementById("secondnumber").value);
    sub = num1 - num2;
    document.getElementById("result").value = sub;
    document.getElementById("firstnumber").value="";
    document.getElementById("secondnumber").value="";
}

function multiplication(){
    num1 = eval(document.getElementById("firstnumber").value);
    num2 = eval(document.getElementById("secondnumber").value);
    mul = num1 * num2;
    document.getElementById("result").value = mul;
    document.getElementById("firstnumber").value="";
    document.getElementById("secondnumber").value="";
}

function division(){
    num1 = eval(document.getElementById("firstnumber").value);
    num2 = eval(document.getElementById("secondnumber").value);
    div = num1/num2;
    document.getElementById("result").value = div;
    document.getElementById("firstnumber").value="";
    document.getElementById("secondnumber").value="";
}