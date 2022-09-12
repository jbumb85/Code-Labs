function numberGenerator() {
  // Local “free” variable that ends up within the closure
  let num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number();

// What will number() log to the console?

// It will say 2 because it will log num in the checkNumber function after it has been increased by 1 in the numberGenerator function.

// You have solved this exercise when you understand the solution.
