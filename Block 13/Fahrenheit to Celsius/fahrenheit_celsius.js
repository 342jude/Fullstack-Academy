function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function createMessage(input, convertedCelsius) {
  let message = [];
  if (input < 95) {
    message = " You have hypothermia";
  } else if (input > 95 && input < 100) {
    message = "You have normal temparature";
  } else if (input > 100 && input < 103) {
    message = "You have a fever";
  } else {
    message = "See a doctor. You have high fever";
  }
  return `This is ${input} °F converted to ${convertedCelsius} °C. ${message}`;
}
// // function rand()
function rand(limit) {
  return Math.floor(Math.random() * limit);
}

let input = prompt("what is your temparature?");
let convertedCelsius = Math.round(convertToCelsius(input));

let output = createMessage(input, convertedCelsius);

const randomNumber = rand(100);
let outputRandom = createMessage(randomNumber, convertedCelsius);

console.log(output);
console.log(outputRandom);
