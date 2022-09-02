let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?  It will show  "Hi, John". 
// I was wrong as name is a let variable changed to Pete after initially John.