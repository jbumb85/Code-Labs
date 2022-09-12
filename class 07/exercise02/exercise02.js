function sayHello() {
    let say = function () {
      console.log(hello);
    };
    // Local variable that ends up within the closure
    let hello = "Hello, world!";
    return say;
  }
  var sayHelloClosure = sayHello();
  sayHelloClosure();

//   What will sayHelloClosure() log to the console?

// It will say 'Hello World' because the function sayHello is going to return the variable say which has an anonymous function that console.log's the variable hello = 'Hello World'. since it is an inner function, it has access to variables in the outer scope and can return the variable hello. 
  
//   You have solved this exercise when you understand the solution.