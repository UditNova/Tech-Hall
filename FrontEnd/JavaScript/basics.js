//functions:- A block of code that executes a bunch of statemenets written in to it.
// -> defined by the word "function"

//syntax:-
// function name(param1, param2, ...) {
//   // statements
// }

// function call:
// name();

// #How to call a function from html: When an event occurs like button click, mouse move,
//document load, etc then you can use some event handler to trigger the event which will call
//the function.

// <!-- function called when page load -->
// <body onload="message()">
//   <h2>Use some event to call a function from HTML.</h2>

//   <!-- function called when button clicked -->
//   <button onclick="my_function()">Click</button>

//   <script>
//     function message() {
//       return lert("function executed!");// return keyword is used to return a value to caller
//        function.
//     }
//   </script>
// </body>

//  # Function Expression:- let's us define a function and assign it to some variable.
// -> It has no name so it's called anonyms function.
// -> It is more convinient to pass as an argument in callback function.
// Syntax:-
// var sum = function (a, b) {
//   return a + b;
// };
// console.log(sum);

// # IIFE (Immediatly invoked function expression): Executed right after the function is defined.
// -> variable defined inside is not accessible outside the function.
(function () {
  console.log("Hello there!");
})();
// -> You can directly assign it to any variable too.

// #Arrow function: Feature of ES6 javascript
// -> It's similar to function expression but it doesn't have name.
// Syntax:- (parameters)=>{statement}
// let car = function (carName,speed) {
//   this.carName = carName;
//   this.speed = speed;
//   this.info = function () {
//     setTimeout(() => {//arrow function
//       // this represent the object which defines the function
//       console.log(this);
//       console.log(this.carName + " runs at " + this.speed);
//     }, 2000)
//   }
// }
// let bmw = new car("BMW", 120);
// bmw.info();

// #Random numbers in javascript:- To create a random number, you can use Math.random().
// * Assignment: Create a html file in which you can create a random number and convert them to
// create differnt random background colors.
