const dinner = {
  cheeseburger: 12,
  steak: 20,
  soup: 8,
  macAndCheese: 14,
  soupSaladCombo: 16,
};
console.log(Object.keys(dinner));
console.log(Object.values(dinner));

// let totalCost = 0;
// for (const meals in dinner){
//     totalCost += dinner[meals];
// }
// console.log(totalCost);

// Or Total Cost
// const price = Object.values(dinner);
// let totalCost = 0;
// for(let i=0; i<price.length; i++){
// totalCost+= price[i];
// }
// console.log(totalCost);

function costOfMeals(menu) {
  const price = Object.values(menu);
  let totalCost = 0;
  for (let i = 0; i < price.length; i++) {
    totalCost += price[i];
  }
  return totalCost;
}
console.log(costOfMeals(dinner));
