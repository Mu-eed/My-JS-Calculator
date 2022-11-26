let sum = "";
let allowComa = true;


function buildSum(char) {
  sum += char;
  document.getElementById("result").innerHTML += char;
}

function buildSumOperators(op) {
    sum += op;
    document.getElementById("result").innerHTML += op; 
    allowComa = true
}

function buildSumDecimal() {
    if (allowComa) {
        sum += '.';
        document.getElementById("result").innerHTML += '.';
        allowComa = false   
    }
}


function calculate() {
  sum = eval(sum);
  document.getElementById("result").innerHTML = sum;
  if (document.getElementById("result").innerHTML.includes('.')) {
    allowComa = false
  } else allowComa = true
}

function reset() {
  sum = "";
  document.getElementById("result").innerHTML = "";
  allowComa = true
}

function del (){
    if (result.innerText[result.innerText.length-1] == '.') {
        allowComa = true
    } else allowComa = false
    result.innerHTML = result.innerHTML.slice(0,-1);
}