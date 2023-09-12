// const inputNumber = prompt("input your number ");
const inputNumber = document.createElement("input");
inputNumber.placeholder = "write here your number ";
let container = document.querySelector(".container");
container.appendChild(inputNumber);
let button = document.createElement("button");
button.innerText = "click me";
container.append(button);
console.log("asdfadf", inputNumber.value);

function convertor(inputNumber) {
  const myObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (let value in myObject) {
    while (inputNumber >= myObject[value]) {
      result += value;
      inputNumber -= myObject[value];
    }
  }
  return result;
}

let paragraph = document.createElement("p");


const result = document.getElementById("result");
result.append(paragraph);

console.log(convertor(inputNumber));
button.addEventListener("click", function () {
  const inputValue = parseInt(inputNumber.value);
  console.log(inputValue, "inputValue");
  const romanNumeral = convertor(inputValue);
  console.log(romanNumeral);
  return (paragraph.innerText = romanNumeral);
});
