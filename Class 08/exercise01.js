// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

function makePlusFunction(a) {
    return (b) => a + b
}



const plusFive = makePlusFunction(5)

console.log(plusFive(2))    // ➞ )   7

console.log(plusFive(-8))   //  ➞)    -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

console.log(plusTen(0))    // ➞  )  10

console.log(plusTen(188))    // ➞)    198

console.log(plusFive(plusTen(0)))    // ➞    15