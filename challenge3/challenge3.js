function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Taylor");

function add(a, b) {
  return a + b;
}

console.log(add(3, 7));

// Write a function called `square()` that takes a number and returns its square.
// Example: `square(4)` → `16`
function square(number = 5) {
    return number * number; 
}

const resultDefault = square(); 
console.log(`The square of is : ${resultDefault}`); 
