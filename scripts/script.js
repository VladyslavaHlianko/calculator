// -------------------------------------------------Калькулятор, выводит результат в консоль------------------------------------------
// ? с использованием оператора if else, значения вводит пользователь

// function calculator() {
//     var result;
//     var num1 = Number(document.getElementById("firstNumber").value);
//     var num2 = Number(document.getElementById("secondNumber").value);
//     var operator = document.getElementById("operator").value;
//     if (operator === "+") {
//         result = num1 + num2;
//     }
//     else if (operator === "-") {
//         result = num1 - num2;
//     }
//     else if (operator === "*") {
//         result = num1 * num2;
//     }
//     else if (operator === "/") {
//         result = num1 / num2;
//     }
//     else{
//         result = "none";
//     }
//     console.log(result);
// } 

// ! с использованием тернарного оператора, без ввода

// function calculator(num1, num2, op) {
//     result = op === "+" ? num1 + num2 : op === "-" ? num1 - num2 : op === "*" ? num1 * num2 : op === "/" ? num1 / num2 : "none";
//     return(result);
// }
// console.log(calculator(5, 4, "+"));
// console.log(calculator(5, 4, "-"));
// console.log(calculator(5, 4, "*"));
// console.log(calculator(5, 4, "/"));

// * с использованием оператора switch, значения вводит пользователь

// function calculator() {
//     var result;
//     var num1 = Number(document.getElementById("firstNumber").value);
//     var num2 = Number(document.getElementById("secondNumber").value);
//     var operator = document.getElementById("operator").value;
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default: 
//             result = "none";
//     }
//     console.log(result);
// }

// с использованием тернарного оператора, значения вводит пользователь

function calculator() {
    var result;
    var num1 = Number(document.getElementById("firstNumber").value);
    var num2 = Number(document.getElementById("secondNumber").value);
    var op = document.getElementById("operator").value;
    result = op === "+" ? num1 + num2 : op === "-" ? num1 - num2 : op === "*" ? num1 * num2 : op === "/" ? num1 / num2 : "none";
    console.log(result);
}