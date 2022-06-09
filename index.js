let sum = "";

function addNum(num) {
  sum += num;
  document.getElementById("output").innerHTML = sum;
}

function calc() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}

function clearCalc() {
  let sum = 0;
  document.getElementById("output").innerHTML = sum;
}
