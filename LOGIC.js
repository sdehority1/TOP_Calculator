let num1 = [];
let num2 = [];
let operand = [""];
document.getElementById("answer").innerHTML = 0;

//ONCLICKS

//ZERO
zero.onclick = function () {
    num1 += "0";
    document.getElementById("answer").innerHTML = num1;
};
//ONE
one.onclick = function () {
    num1 += "1";
    document.getElementById("answer").innerHTML = num1;
};

//TWO
two.onclick = function () {
    num1 += "2";
    document.getElementById("answer").innerHTML = num1;
};
//THREE
three.onclick = function () {
    num1 += "3";
    document.getElementById("answer").innerHTML = num1;
};

//FOUR
four.onclick = function () {
    num1 += "4";
    document.getElementById("answer").innerHTML = num1;
};

//FIVE
five.onclick = function () {

    num1 += "5";
    document.getElementById("answer").innerHTML = num1;
};

//SIX
six.onclick = function () {
    num1 += "6";
    document.getElementById("answer").innerHTML = num1;
};

//SEVEN
seven.onclick = function () {
    num1 += "7";
    document.getElementById("answer").innerHTML = num1;
};

//EIGHT
eight.onclick = function () {
    num1 += "8";
    document.getElementById("answer").innerHTML = num1;
};

//NINE
nine.onclick = function () {
    num1 += "9";
    document.getElementById("answer").innerHTML = num1;
};

//DECIMAL
//Need to add code to make sure number doesn't already have a decimal
decimal.onclick = function () {
  let testRegex = /'.'/;
  console.log(testRegex.test(num1));
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
equals.onclick = function () {
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
