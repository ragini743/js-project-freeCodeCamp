const container = document.querySelector(".container");
const input = document.createElement("input");
input.placeholder = "write here";
container.appendChild(input);

function isPalindrome(string) {
  const length = string.length;
  const pattern = /[^a-zA-Z0-9\s]/g;
  string = string.toLowerCase().replace(/ /g, "").replace(pattern, "");
  for (let i = 0; i < length; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return "it is not palindrome";
    }
    return "it is palindrome";
  }
}

const button = document.createElement("button");
button.innerText = "click me";
container.appendChild(button);
button.addEventListener("click", () => {
  string = input.value;
  console.log(string);
  const result = isPalindrome(string);
  alert(result);
});
