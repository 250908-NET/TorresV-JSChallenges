function greetUser() {
  let name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "!");
  }
}

function inputColor() {
   let color = document.getElementById("colorInput").value;
   if (color.trim() === "") {
    alert("Please enter a valid color!");
   } else {
    alert("Your Favorite color is: " + color + "!");
   }

}

document.getElementById("greetBtn").addEventListener("click", greetUser);
document.getElementById("colorBtn").addEventListener("click", inputColor);

//Add a second input field for the user’s **favorite color**.
//When the button is clicked, greet the user *and* mention their color in the message.