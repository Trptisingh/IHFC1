// var name = "John"; //Old way of declaring a variable
// var name = "Doe";
// console.log(name);
// let city = "New York"; //New way of declaring a variable (ES6) Cannot be redeclared
// console.log(city);
// city = "Los Angeles"; //Can be reassigned
// console.log(city);
// const country = "USA"; //Constant variable, cannot be reassigned or redeclared
// console.log(country);
// country = "Canada"; // This will throw an error
// //Types of scope
// function testScope() {  
//     var age = 25; //Function scope
//     let state = "Texas";
//     const zip = "75001";
//     console.log(age);
//     console.log(state);
//     console.log(zip);
// }
// testScope();
// console.log(age); // This will throw an error
// console.log(state); // This will throw an error

//Block scope
// if (true) {
//     let blockVar = "I am inside a block";
//     console.log(blockVar);
// }

//Operators
// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus

// Comparison Operators
console.log(a == b); // Equal to
console.log(a != b);            
console.log(a === b); // Strict equal to
console.log(a !== b); // Strict not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to   
// Logical Operators
console.log(a > 5 && b < 10);       
console.log(a > 5 || b < 5);
console.log(!(a > 5));

// Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log(c);
c -= 5; // c = c - 5
console.log(c);
c *= 5; // c = c * 5
console.log(c);
c /= 5; // c = c / 5        
console.log(c);
c %= 5; // c = c % 5
console.log(c); 
// Ternary Operator


//If...Else Statement
let age = 18;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

//For LOOP
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}   

//While LOOP
let j = 0;
while (j < 10) {
    console.log("Happy Learning: " + j);
    j++;
}   
