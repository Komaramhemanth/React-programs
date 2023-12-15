// Function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Function invocation
greet("John"); // Output: Hello, John!

// Function with a return statement
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8

// Function expression
let multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 6)); // Output: 24

// Arrow function
let subtract = (p, q) => p - q;

console.log(subtract(10, 7)); // Output: 3

// Function with default parameter
function exponent(base, power = 2) {
  return Math.pow(base, power);
}

console.log(exponent(3)); // Output: 9
console.log(exponent(2, 4)); // Output: 16

// Function with rest parameter
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
