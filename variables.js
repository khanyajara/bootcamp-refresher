/*
Variables in Js
- a variable is an abstract location paired with an associated symbolic name,which cotains
    some known or unknown quantity of data or object to as a value 
-  Variables are containers that store data 

var let const keywords to declare variables
examples:
    var x = 30 , var _x = 30 
    var 2x = 30 #wrong 

Why avoid the var keyword:
 - When you declare a var variable , its scope is not limited to the block in which is defined. 
   Its limited to the function it is declared in. 
   
   
*/


// 1. Declare a variable ‘name’ and assign your name to it.
let name = "Khanya Jara";

// 2. Declare a variable ‘age’ and assign your age to it.
let age = 21;

// 3. Declare a variable ‘isStudent’ and assign it to a boolean value indicating whether you are a student or not.
let isStudent = true;

// 4. Print all three variables
console.log(name); // Correct: prints "Khanya jara"
console.log(age); // Correct: prints 21
console.log(isStudent); // Correct: prints true

// 1. Declare a variable ‘favoriteColour’ and assign your favourite colour to it.
let favoriteColour = "Blue";

// 2. Print the value of favoriteColour.
console.log(favoriteColour); // prints "Blue"

// 3. Reassign favouriteColour to a different colour.
favoriteColour = "Green";

// 4. Print the new value of favoriteColour.
console.log(favoriteColour); // prints "Green"

// 1. Declare two variables ‘num1’ and ‘num2’ and assign them any two numbers.
let num1 = 8;
let num2 = 4;

// 2. Declare variables to store the sum, difference, product, and quotient of num1 and num2.
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// 3. Print the results of these arithmetic operations.
console.log("Sum: " + sum); // prints "Sum: 12"
console.log("Difference: " + difference); // prints "Difference: 4"
console.log("Product: " + product); // prints "Product: 32"
console.log("Quotient: " + quotient); // prints "Quotient: 2"

