// How would you find the greatest common divisor of two numbers?

function greatestCommonDivisor(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return false;
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}

console.log(greatestCommonDivisor(14, 21)); // returns 7
console.log(greatestCommonDivisor(69, 169)); // returns 1
console.log(greatestCommonDivisor(-63, 9)); // returns 9
