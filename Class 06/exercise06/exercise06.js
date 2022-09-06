// Aim: Create a function that takes three collections of arguments and returns the sum of the product of the grouped numbers.

// Examples

// product([[1,2],[1,1],[2,3]])    ➞    9
// // 1 * 2 + 1 * 1 + 2 * 3

// product([[10,2],[5,0],[2,3]])    ➞    26
// // 10 * 2 + 5 * 0 + 2 * 3

// product([[1,2],[2,3],[3,4]])   ➞    20
// // 1 * 2 + 2 * 3 + 3 * 4

// product([[1,2],[0,3],[3,0]])    ➞    2
// // 1 * 2 + 0 * 3 + 3 * 0

function multNums(arrayNums) {
  let answer = arrayNums[0] * arrayNums[1];
  return answer;
}

function product(arrayNums1, arrayNums2, arrayNums3) {
  sum = multNums(arrayNums1);
  sum1 = multNums(arrayNums2);
  sum2 = multNums(arrayNums3);
  return sum + sum1 + sum2;
}

console.log(product([1, 2], [1, 1], [2, 3])); // 9
console.log(product([10, 2], [5, 0], [2, 3])); // 26
console.log(product([1, 2], [2, 3], [3, 4])); // 20
console.log(product([1, 2], [0, 3], [3, 0])); // 2
