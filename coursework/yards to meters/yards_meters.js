function convertToMeters(yards) {
  return yards * 0.9144;
}
function createMessage(yards, meters) {
  let message = "";
  const numYards = yards * 1;
  if (numYards === 1760) {
    message = "This is as long as a mile";
  } else if (numYards === 100) {
    message = " This is as long as a football field";
  } else if (numYards === 26) {
    message = "This is as long as a tennis court";
  } else {
    message = "This is a standard yard";
  }
  return `${yards} yards is ${meters} meters. ${message}`;
}
// let inputYards = prompt("How many yards do you want to convert");
inputYards = 25;
let convertedMeters = Math.round(convertToMeters(inputYards));
let output = createMessage(inputYards, convertedMeters);

console.log(output);

// alert(inputYards);

// var output = [];
// var count = 1;

// function fizzBuzz() {
//   if (count % 3 === 0) {
//     output.push("Fizz");
//   } else {
//     output.push(count);
//   }
//   if (count % 5 === 0) {
//     output.push("Buzz");
//   } else

//   count++;

//   console.log(output);
// }
