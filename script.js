let displayvalue = "";
let screen = document.querySelector(".screen");
screen.textContent = "0";
const operands = document.querySelectorAll(".operand");
for(let i =0; i<operands.length; i++){
    operands[i].addEventListener("click", function(){
        displayvalue = displayvalue+operands[i].textContent;
        screen.textContent = displayvalue;
    });
}
const operators = document.querySelectorAll(".final");
for(let i=0; i<operators.length; i++){
    operators[i].addEventListener("click" , function(){
        displayvalue = displayvalue+operators[i].textContent;
        screen.textContent = displayvalue;
    });
}
const equal = document.querySelector(".equal");

equal.addEventListener("click" , function(){
  
    let result = eval(displayvalue);

    
    if (isNaN(result)) {
        screen.textContent = "Error"; 
        displayvalue = ""; 
    } else {
        displayvalue = result; 
        screen.textContent = displayvalue;
    }
});
let clear = document.querySelector(".clear");
clear.addEventListener("click" , function(){
    displayvalue = ""; 
    screen.textContent = displayvalue;
});

