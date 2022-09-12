// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function with the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   { name: "lemonade", price: 50 },
//   { name: "lime", price: 10 }
// ];
// The output of the sorted drinks object will be:

// Examples

// const drinksByPrice = sortDrinkByPrice(drinks);

// console.log(drinksByPrice); // [{name: "lime", price: 10}, {name: "lemonade", price: 50

let drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

function softDrinksByPrice(arr) {
  return function () {
    return arr.sort((a, b) => a.price - b.price);
  };
}

const drinksByPrice = softDrinksByPrice(drinks);

console.log(drinksByPrice());
