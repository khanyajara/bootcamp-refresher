/*
Part 1 : using if-else statements
*/

// Temperature check using if-else statements
let temperature = 18; // You can change this value to test different conditions

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

