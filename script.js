function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}
function substract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
}
let num1 = prompt("Primer valor");
let num2 = prompt("Segundo valor");
let result = add(num1, num2);
console.log(result);
let result2 = substract(num1, num2);
console.log(result2);
let result3 = divide(num1, num2);
console.log(result3);
let result4 = multiply(num1, num2);
console.log(result4);