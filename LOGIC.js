//https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator

//STATIC 
let num1 = [];
let num2 = [];
let operand = [""];
document.getElementById("answer").innerHTML = 0;

//EQUALS FUNCTION 
//Using number() causes issues with floating decimals...maybe refactor with an if statement to use parseFloat if arr[0] is a decimal and parseNum if arr[0] is anything else
let equalsFunc = () => {
  if (operand == "+") {
    document.getElementById("answer").innerHTML = Number(num1.join("")) + Number(num2.join(""))
  }
  if (operand == "-") {
    document.getElementById("answer").innerHTML = Number(num1.join("")) - Number(num2.join(""))
  }
  if (operand == "*") {
    document.getElementById("answer").innerHTML = Number(num1.join("")) * Number(num2.join(""))
  }
  if (operand == "/" && num2 !== 0) {
    document.getElementById("answer").innerHTML = Number(num1.join("")) / Number(num2.join(""))
  }
  //NEED TO FIGURE OUT HOW TO AVOID DOUBLE DIVIDE TRIGGERING ERROR
  if (operand == "/" && num2 == 0) {
    document.getElementById("answer").innerHTML = "Error. Click AC."
  }
};

//ONCLICKS
//ZERO
zero.onclick = function () {
  if (num1 == 0) {
    return document.getElementById("answer").innerHTML = 0;
}
  if (operand == "") {
    num1.push(0);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(0);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};
//ONE
one.onclick = function () {
  if (operand == "") {
    num1.push(1);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(1);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};


//TWO
two.onclick = function () {
  if (operand == "") {
    num1.push(2);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(2);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};
//THREE
three.onclick = function () {
  if (operand == "") {
    num1.push(3);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(3);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//FOUR
four.onclick = function () {
  if (operand == "") {
    num1.push(4);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(4);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//FIVE
five.onclick = function () {
  if (operand == "") {
    num1.push(5);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(5);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//SIX
six.onclick = function () {
  if (operand == "") {
    num1.push(6);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(6);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//SEVEN
seven.onclick = function () {
  if (operand == "") {
    num1.push(7);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(7);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//EIGHT
eight.onclick = function () {
  if (operand == "") {
    num1.push(8);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(8);
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//NINE
nine.onclick = function () {
  if (operand == "") {
    num1.push(9);
    document.getElementById("answer").innerHTML = num1.join("");
  } else if (operand == "*" || "+" || "-" || "/") {
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
  } else if (operand == "*" || "+" || "-" || "/") {
    num2.push(".");
    document.getElementById("answer").innerHTML = num2.join("");
  }
};

//PLUS MINUS
//Need to ensure that number that is a result of two nums being added can be made negative/positive on click 
plusMinus.onclick = function () {
  if (num1 == 0) {
    return document.getElementById("answer").innerHTML = 0;
  }
  if (num1.length > 0 && operand == "") {
    if (num1.includes('-') === false) {
      num1.unshift('-');
      document.getElementById("answer").innerHTML = num1.join("");
    } else if (num1.includes('-') === true) {
      1
      num1.shift();
      document.getElementById("answer").innerHTML = num1.join("");
    }
  }
  else if (operand !== "") {
    if (num2.includes('-') === false) {
      num2.unshift('-');
      document.getElementById("answer").innerHTML = num2.join("");
    } else if (num2.includes('-') === true) {
      num2.shift();
      document.getElementById("answer").innerHTML = num2.join("");
    }
  }
}


//OPERATORS
add.onclick = function () {
  if (operand == "*" || "+" || "-" || "/") {
    equalsFunc();
    num1 = (document.getElementById("answer").innerHTML).split('')
    num2 = [];
    operand = "";
  };
  operand = "+"
};

//SUBTRACT
subtract.onclick = function () {
  if (operand == "*" || "+" || "-" || "/") {
    equalsFunc();
    num1 = (document.getElementById("answer").innerHTML).split('');
    num2 = [];
    operand = "";
  }
  operand = "-";
};

//MULTIPLY
multiply.onclick = function () {
  if (operand == "*" || "+" || "-" || "/") {
    equalsFunc();
    num1 = (document.getElementById("answer").innerHTML).split('');
    num2 = [];
    operand = "";
  }
  operand = "*";
};

//DIVIDE
divide.onclick = function () {
  if (operand == "*" || "+" || "-" || "/") {
    equalsFunc();
    num1 = (document.getElementById("answer").innerHTML).split('');
    num2 = [];
    operand = "";
  }
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
equals.onclick = function () {
  equalsFunc();
};

