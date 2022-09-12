// You may need a piece of paper.

let x = 10;

function foo(a) {
  let b = 20;

  function bar(c) {
    let d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    console.log(e * -1);
  }

  return bar;
}

let moar = foo(5); // Closure

moar(15);

// What will moar log to the console?

// It will return -80 because it calls for moar = foo(5). so then you plug 5 into the foo function for placeholder a. The c value would be whatever is called with moar because it is calling to execute th inner function of foo. In this case it is 15. Then you move to function bar which returns boop(80). Then you would move to the boop function and do 80 * -1. then you wold return the bar function that would make the answer -80.

// Before executing the code, think about this. To check your answer, execute this code.

// You have solved this exercise when you understand the solution.