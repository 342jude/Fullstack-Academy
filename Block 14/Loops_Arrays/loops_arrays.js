const myInstruments = ["flute", "clarinet", "saxaphone", "trumpet", "trombone"];
myInstruments.push("tuba", "bassoon");
myInstruments.splice(2, 1);
myInstruments.unshift("saxaphone");

// console.log(myInstruments);

function getFirstInstruments(instruments) {
  return instruments[0];
}
// console.log(getFirstInstruments(myInstruments));

function getLastInstruments(instruments) {
  return instruments[instruments.length - 1];
}
// console.log(getLastInstruments(myInstruments));

function getFirstLastInstruments(instruments) {
  // return instruments[0];
  let output = [];
  output.push(instruments[0]), output.push(instruments[instruments.length - 1]);
  return output;
}
// console.log(getFirstLastInstruments(myInstruments));

// function getFirstThreeInstruments(instruments) {
//     // return instruments[0];
//     let output = []
//     output.push(instruments[0]), output.push(instruments[1]), output.push(instruments[2]);
//     return output;

//   }

function getFirstThreeInstruments(instruments) {
  // return instruments[0];
  const output = [];
  for (let i = 0; i < 3; i++) {
    output.push(instruments[i]);
  }
  //output.push(instruments[0]), output.push(instruments[1]), output.push(instruments[2]);
  return output;
}

// const instruments2 = ["flute", "clarinet", "saxaphone", "trumpet", "trombone"];
// console.log(getFirstThreeInstruments(myInstruments));

function getTiInstruments(instruments) {
  const output = [];
  for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    if (instrument[0] === "t") {
      output.push(instrument);
    } else {
    }
  }

  return output;
}
//console.log(getTiInstruments(myInstruments));

function getLongestNameInstruments(instruments) {
  let longestInstrument = "";
  for (const instrument of instruments) {
    if (instruments.length > longestInstrument.length) {
      longestInstrument = instrument;
    }
  }

  return longestInstrument;
}
console.log(getLongestNameInstruments(myInstruments));
