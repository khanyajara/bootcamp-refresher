// Exercise 1: Numbers
let number1 = 10;
let number2 = 3.5;

let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let modulus = number1 % number2;
let exponentiation = number1 ** number2;

console.log("Number1: " + number1); // prints 10
console.log("Number2: " + number2); // prints 3.5
console.log("Addition: " + addition); // prints 13.5
console.log("Subtraction: " + subtraction); // prints 6.5
console.log("Multiplication: " + multiplication); // prints 35
console.log("Division: " + division); // prints 2.857142857142857
console.log("Modulus: " + modulus); // prints 3.5
console.log("Exponentiation: " + exponentiation); // prints 316.22776601683796

// Exercise 2: Boolean and Operators
let x = 8;
let y = 12;

let comparison1 = x > y;
let comparison2 = x <= y;
let comparison3 = x == y;
let comparison4 = x != y;

console.log("x > y: " + comparison1); // prints false
console.log("x <= y: " + comparison2); // prints true
console.log("x == y: " + comparison3); // prints false
console.log("x != y: " + comparison4); // prints true

let a = true;
let b = false;

let logicalAnd = a && b;
let logicalOr = a || b;
let logicalNot = !a;

console.log("a AND b: " + logicalAnd); // prints false
console.log("a OR b: " + logicalOr); // prints true
console.log("NOT a: " + logicalNot); // prints false

let p = 10;
p += 5;
console.log("p += 5: " + p); // prints 15

p -= 3;
console.log("p -= 3: " + p); // prints 12

p *= 2;
console.log("p *= 2: " + p); // prints 24

p /= 4;
console.log("p /= 4: " + p); // prints 6

p %= 3;
console.log("p %= 3: " + p); // prints 0
