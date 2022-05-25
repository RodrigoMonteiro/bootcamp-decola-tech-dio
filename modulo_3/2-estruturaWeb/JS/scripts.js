var currentNumberWrapper = window.document.getElementById("currentNumber");
var currentNumber = 0;

var result = "";
var currentResultWrapper = window.document.getElementById("resultado");

function somar() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  resultado()
}
function subtrair() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  resultado()
}
function resultado() {
  if (currentNumber % 2 == 0) {
    result = "O número atual é par!";
    currentResultWrapper.innerHTML = result;
  } else {
    result = "O número atual é ímpar!";
    currentResultWrapper.innerHTML = result;
  }
}
