"use strict";
var cal = "";
var btn_val,fast,second,cinno,result;
function tx(y){
    var x = document.querySelector(".btn_"+y);
    x.addEventListener("click",function(){
        btn_val =x.value;
        cal = cal + btn_val;
        document.querySelector(".tx").value = cal;
    })
}
for(var i = 0; i<10; i++){
    tx(i);
}

tx("dot");

document.querySelector(".btn_C").addEventListener("click",function(){
    cal = "";
    document.querySelector(".tx").value = cal;
})

document.querySelector(".btn_DEL").addEventListener("click",function(){
    var indz = cal.length-1;
    cal = cal.slice(0,indz);
    document.querySelector(".tx").value = cal;
})




function mat(o){
    var a = document.querySelector(".btn_"+o);
    a.addEventListener("click",function(){
        fast = document.querySelector(".tx").value;
        btn_val = a.value;
        cinno = btn_val
        cal = ""
        document.querySelector(".tx").value = btn_val;
    })
}

mat("divide");
mat("plus");
mat("minus");
mat("x");
mat("moduls");

document.querySelector(".btn_equal").addEventListener("click",function(){
    second = document.querySelector(".tx").value;
    switch(cinno){
        case ("+") :
            result = parseFloat(fast) + parseFloat(second);
            break;
        case ("-") :
                result = parseFloat(fast) - parseFloat(second);
                break;
        case ("/") :
                result = parseFloat(fast) / parseFloat(second);
                break;
        case ("X") :
                result = parseFloat(fast) * parseFloat(second);
                break;
        default :
            result = (parseFloat(second)/fast) * parseFloat(100);
            break;

    }
    document.querySelector(".tx").value = result;
})

