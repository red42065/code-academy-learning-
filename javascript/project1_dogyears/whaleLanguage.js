let input = "turpentine and turtles";
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

let resultArrayCap = [];

for (let k = 0; k < resultArray.length; k++) {
  resultArrayCap.push(resultArray[k].toUpperCase());
}

resultString = resultArrayCap.join("");

console.log(resultString);
