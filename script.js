let sum = "";
let allowComa = true;

function buildSum(char) {
  sum += char;
  document.getElementById("result").innerHTML += char;
}

// function displaydot(num) {
//     if (allowComa === true) {
//         result.value = result.value + num;
//         allowComa = false
//     }
// }

function calculate() {
  sum = eval(sum);
  document.getElementById("result").innerHTML = sum;
}

function reset() {
  sum = "";
  document.getElementById("result").innerHTML = "";
}

function del (){
    result.innerHTML = result.innerHTML.slice(0,-1);
}