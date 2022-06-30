
var val1 = document.getElementById("value1");
var val2 = document.getElementById("value2");
var answerbtn = document.getElementById("answer");


document.getElementById("A").addEventListener("click", function() {
    answerbtn.innerHTML = sum(val1,val2);
});

document.getElementById("S").addEventListener("click", function() {
    answerbtn.innerHTML = sub(val1,val2);
});

document.getElementById("M").addEventListener("click", function() {
    answerbtn.innerHTML = Mul(val1,val2);
});

document.getElementById("D").addEventListener("click", function() {
    answerbtn.innerHTML = Div(val1,val2);
});


function sum(val1,val2){
    var v1=val1.value;
    var v2=val2.value;
   return +v1 + +v2 ;
   // usually v1 value is considered as string by default to convert that into number we have to add "+" before variable name like "+v1"
};


function sub(val1,val2){
    var v1=val1.value;
    var v2=val2.value;
   return +v1 - +v2 ;
   // usually v1 value is considered as string by default to convert that into number we have to add "+" before variable name like "+v1"
};


function Mul(val1,val2){
    var v1=val1.value;
    var v2=val2.value;
   return +v1 * +v2 ;
   // usually v1 value is considered as string by default to convert that into number we have to add "+" before variable name like "+v1"
};


function Div(val1,val2){
    var v1=val1.value;
    var v2=val2.value;
   return +v1 / +v2 ;
   // usually v1 value is considered as string by default to convert that into number we have to add "+" before variable name like "+v1"
};