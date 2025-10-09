//Create an array of **even numbers only**
//from this list using `.filter()` and an arrow function:
const numbers = [10, 15, 20, 25, 30];

// Use filter with arrow function to get even numbers only
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [10, 20, 30]