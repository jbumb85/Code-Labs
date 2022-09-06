function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(7));
console.log(isPrime(12));
console.log(isPrime(15));
console.log(isPrime(1123));
console.log(isPrime(61));
