// (1)

let value1 = Number(prompt("(1. About average value) First value:"));
let value2 = Number(prompt("(1. About average value) Second value:"));
let value3 = Number(prompt("(1. About average value) Third value:"));

console.log("1) (" + value1 + " + " + value2 + " + " + value3 + ")/3 = " + ((value1+value2+value3)/3) + ";");

// (2)

value1 = prompt("(2. About equals) First value:");
value2 = prompt("(2. About equals) Second value:");

console.log("2) It is " + (value1 === value2) + " that " + value1 + " === " + value2 + ";");

// (3)

value1 = Number(prompt("(3. About Discount) First value:"));

console.log("3) 12999 - (12999 * " + value1 + " / 100) = " + (12999-(12999*value1/100)) + ".");