let sum = "";
function buildSum(char) {
  sum += char;
  document.getElementById("result").innerHTML += char;
}
function calculate() {
  sum = eval(sum);
  document.getElementById("result").innerHTML = sum;
}
function reset() {
  sum = "";
  document.getElementById("result").innerHTML = "";
}