let num1 = [];
let num2 = [];
let operand = [""];
document.getElementById("answer").innerHTML = 0;

let equalsFunc = () => {
  if (operand == "+"){
    document.getElementById("answer").innerHTML = (parseInt(num1, 10)) + (parseInt(num2, 10));
 } 
 if (operand == "-"){
    document.getElementById("answer").innerHTML = (parseInt(num1, 10)) - (parseInt(num2, 10));
 } 
  if (operand == "*"){
    document.getElementById("answer").innerHTML = (parseInt(num1, 10)) * (parseInt(num2, 10));
 } 
  if (operand == "/"){
    document.getElementById("answer").innerHTML = (parseInt(num1, 10)) / (parseInt(num2, 10));
 } 
};

//ONCLICKS

//ZERO
zero.onclick = function () {
  if (operand == "") {
   num1 += "0";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "0";
   document.getElementById("answer").innerHTML = num2;
 }
};
//ONE
one.onclick = function () {
 if (operand == "") {
   num1 += "1";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand == "*"||"+"||"-"||"/") {
   num2 += "1";
   document.getElementById("answer").innerHTML = num2;
 }
};
//TWO
two.onclick = function () {
 if (operand == "") {
   num1 += "2";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "2";
   document.getElementById("answer").innerHTML = num2;
 }
};
//THREE
three.onclick = function () {
 if (operand == "") {
   num1 += "3";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "3";
   document.getElementById("answer").innerHTML = num2;
 }
};

//FOUR
four.onclick = function () {
 if (operand == "") {
   num1 += "4";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "4";
   document.getElementById("answer").innerHTML = num2;
 }
};

//FIVE
five.onclick = function () {
 if (operand == "") {
   num1 += "5";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "5";
   document.getElementById("answer").innerHTML = num2;
 }
};

//SIX
six.onclick = function () {
 if (operand == "") {
   num1 += "6";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "6";
   document.getElementById("answer").innerHTML = num2;
 }
};

//SEVEN
seven.onclick = function () {
 if (operand == "") {
   num1 += "7";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "7";
   document.getElementById("answer").innerHTML = num2;
 }
};

//EIGHT
eight.onclick = function () {
 if (operand == "") {
   num1 += "8";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "8";
   document.getElementById("answer").innerHTML = num2;
 }
};

//NINE
nine.onclick = function () {
 if (operand == "") {
   num1 += "9";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += "9";
   document.getElementById("answer").innerHTML = num2;
 }
};

//DECIMAL
//Need to add code to make sure number doesn't already have a decimal
decimal.onclick = function () {
 if (operand == "") {
   num1 += ".";
   document.getElementById("answer").innerHTML = num1;
 } else if (operand ==  "*"||"+"||"-"||"/") {
   num2 += ".";
   document.getElementById("answer").innerHTML = num2;
 }
};

//DECIMAL
//Need to add code to make sure number doesn't already have a decimal
decimal.onclick = function () {
  let testRegex = /'.'/;
  
  if (testRegex.test(num1) == false){
    num1 += ".";
    return document.getElementById("answer").innerHTML = num1;
    console.log("regexWorks")} else{
   return document.getElementById("answer").innerHTML = num1;}
}; 

//OPERATORS
//ADD
add.onclick = function () {
  operand = "+";
};

//SUBTRACT
subtract.onclick = function () {
  operand = "-";
};

//MULTIPLY
multiply.onclick = function () {
  operand = "*";
};

//DIVIDE
divide.onclick = function () {
  operand = "/";
};


//CLEAR
AC.onclick = function () {
  num1 = [];
  num2 = [];
  operand = [""];
  document.getElementById("answer").innerHTML = 0;
};

//EQUALS
equals.onclick = function(){ 
  equalsFunc();
};