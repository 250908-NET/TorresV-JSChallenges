function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Result: " + sum;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);

function subNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sub = n1 - n2;

  document.getElementById("result").textContent = "Result: " + sub;
}

document.getElementById("subBtn").addEventListener("click", subNumbers)

function multiNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let multi = n1 * n2;

  document.getElementById("result").textContent = "Result: " + multi;
}

document.getElementById("multiBtn").addEventListener("click", multiNumbers)

function divNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let div = n1 / n2;

  document.getElementById("result").textContent = "Result: " + div;
}

document.getElementById("divBtn").addEventListener("click", divNumbers)

//Add buttons for **Subtract**, **Multiply**, and **Divide**
//each calling their own function.