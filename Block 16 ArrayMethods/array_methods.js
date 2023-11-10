const items = [
  { id: 1, names: "foo", price: 7 },
  { id: 2, names: "bar", price: 6 },
  { id: 3, names: "bazz", price: 9 },
  { id: 3, names: "quq", price: 13 },
];
const names = prompt("enter an item name, we will try to find it", "foo");

//use find method
const found = items.find((item) => item.names === names);

// const found = items.find((idy) => idy.names === names);
if (found) {
  console.log("we found it");
} else {
  console.log(`we did not find the item with the name ${names}`);
};

// use the items method

const search = prompt(
  " enter a string, we will see the items which have that string in their name",
  "ba"
);

const foundItems = items.filter((item) => item.names.indexOf(search) !== -1);
console.log(foundItems);

// use the map method

const keyForMapping = prompt(
  "choose a key, ID, name, or price so we can display the values associated with their input",
  "price"
);
const mappedValues = items.map((item) => item[keyForMapping]);
console.log("Mapped Values", mappedValues);

// use the reduce method

const keyForReducing = prompt('Prompt the user to choose a key, either the ID or, better yet, the price, and store it in a variable');
const reducedValues = items.reduce((acc, item) => {
  acc = acc + item[keyForReducing];
  return acc;
}, 0);


