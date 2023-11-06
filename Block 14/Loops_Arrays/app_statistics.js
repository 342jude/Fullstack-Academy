let numbers = [];
let input = prompt("Enter a number or type 'done' to exit:");

while (input !== "done") {
  numbers.push(Number(input));
  input = prompt("Enter another number or type 'done':");
}

let sum = 0;
let product = 1;
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  product *= numbers[i];
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

let average = sum / numbers.length;

console.log(`The sum of the numbers is ${sum}.`);
console.log(`The average of the numbers is ${average}.`);
console.log(`The product of the numbers is ${product}.`);
console.log(`The maximum value of the numbers is ${max}.`);




// // Create an empty array to store the user's input.
// const numbers = [];

// // Prompt the user to enter some numbers.
// const userInput = prompt("Enter some numbers, separated by commas: ");

// // Split the user's input into an array of numbers.
// const numberStrings = userInput.split(',');

// // Loop through the number strings and convert them to numbers.
// for (const numberString of numberStrings) {
//   numbers.push(parseFloat(numberString));
// }

// // Calculate the mean.
// let mean = 0;
// for (const number of numbers) {
//   mean += number;
// }
// mean /= numbers.length;

// // Calculate the median.
// const sortedNumbers = numbers.sort();
// const medianIndex = Math.floor(numbers.length / 2);
// const median = sortedNumbers[medianIndex];

// // Calculate the mode.
// const modeMap = new Map();
// for (const number of numbers) {
//   const count = modeMap.get(number) || 0;
//   modeMap.set(number, count + 1);
// }

// const maxCount = Math.max(...modeMap.values());
// const modes = [];
// for (const [number, count] of modeMap) {
//   if (count === maxCount) {
//     modes.push(number);
//   }
// }

// // Calculate the standard deviation.
// let variance = 0;
// for (const number of numbers) {
//   variance += (number - mean)**2;
// }
// variance /= numbers.length;
// const standardDeviation = Math.sqrt(variance);

// // Display the results to the user.
// const results = `
// Mean: ${mean}
// Median: ${median}
// Mode: ${modes}
// Standard deviation: ${standardDeviation}
// `;

// console.log(results);


