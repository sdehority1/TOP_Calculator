//STATIC 
let num1 = [];
let num2 = [];
let operand = [""];
document.getElementById("answer").innerHTML = 0;

//EQUALS FUNCTION 
let equalsFunc = () => {
  if (operand == "+"){
    document.getElementById("answer").innerHTML = Number(num1.join("")) + Number(num2.join(""))
 } 
 if (operand == "-"){
  document.getElementById("answer").innerHTML = Number(num1.join("")) - Number(num2.join(""))
 } 
  if (operand == "*"){
    document.getElementById("answer").innerHTML = Number(num1.join("")) * Number(num2.join(""))
 } 
  if (operand == "/"){
    document.getElementById("answer").innerHTML = Number(num1.join("")) / Number(num2.join(""))
 } 
};

//ONCLICKS
//ZERO
zero.onclick = function () {
  if (operand == "") {
    num1.push(0);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(0);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};
//ONE
one.onclick = function () {
  if (operand == "") {
    num1.push(1);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(1);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};
//TWO
two.onclick = function () {
  if (operand == "") {
    num1.push(2);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(2);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};
//THREE
three.onclick = function () {
  if (operand == "") {
    num1.push(3);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(3);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//FOUR
four.onclick = function () {
  if (operand == "") {
    num1.push(4);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(4);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//FIVE
five.onclick = function () {
  if (operand == "") {
    num1.push(5);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(5);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//SIX
six.onclick = function () {
  if (operand == "") {
    num1.push(6);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(6);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//SEVEN
seven.onclick = function () {
  if (operand == "") {
    num1.push(7);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(7);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//EIGHT
eight.onclick = function () {
  if (operand == "") {
    num1.push(8);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(8);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//NINE
nine.onclick = function () {
  if (operand == "") {
    num1.push(9);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(9);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//DECIMAL
//Need to add code to make sure number doesn't already have a decimal
decimal.onclick = function () {
  if (operand == "") {
    num1.push(".");
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand ==  "*"||"+"||"-"||"/") {
    num2.push(".");
    document.getElementById("answer").innerHTML = num2.join("");
  }
};



//OPERATORS
//ADD This is working as intended but you might need to refactor what's above to ensure that you can keep adding indefinitely 
add.onclick = function () {
  if (operand ==  "*"||"+"||"-"||"/"){
   equalsFunc(); 
  }
  operand = "+"
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

//EQUALS KEY 
equals.onclick = function(){ 
  equalsFunc();
};