function sayHello() {
  alert("Hello from the external file!");
}

// Connect the function to the button
let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

function sayGoodbye() {
  alert("Bye bye from the external file!");
}

let goodbyeBtn = document.getElementById("goodBye");
goodbyeBtn.addEventListener("click", sayGoodbye);

//Add another button labeled that triggers a `sayGoodbye()` function from your `script.js` file