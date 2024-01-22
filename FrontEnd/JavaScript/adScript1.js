//-> Higher Order functions: are those functions who accept funtion in their parameteres or
//return functions as return value.
// ~ Used to make CLOSURES.
// ~ ex:- foreach loop is a hof. array.foreach(function(){})
// Syntax:-
function abcd(val) {}
abcd(function sum() {
  return sum;
});
// or
function abc() {
  return function () {};
}

//-> Constructor functions:- When you want to create a function which has same property but
//you want to feed different values to it, then its used. In this "this" keyword is used.
function car(color, speed, average, price) {
  this.color;
  this.speed;
  this.average;
  this.price;
} //constructor function
var hyundai = new car("blue", 25, 50, "55k"); //instance
var alto = new car("red", 30, 45, "45k"); //another instance with "new" keyword

//-> First Class Functions:- Fuctions which can take funcitons as paramenters or they can be
// stored to another var are called First class fucitons.
//~ e.g., setTimeOut(function(){})
// setInterval(function () {});
// var a = setTimeout();

//-> New Keyword:- Used to create new object or like blank space filled with properties of function attached to
//it.
//e.g.,
// function person() {
//   this.color = red;
//   this.age = 12;
//   this.height = 5;
// }
// var raman = new person();
// ~ what happens here is this raman{
//   color: red;
//   age:12;
//   height:5;
// } is created you can create more people now. Congratulations! you are god now.

//-> IIFE: immediatly invoked funtion expression, used to define something private either var
//or function. everything in it is private . syntax: (function(){});
var ans = (function () {
  var privateVar = 12; //it's private can't be accessed outside
  //to get outside
  return {
    getter: function () {
      console.log(privateVar);
    },
  }; // to print 12 ans.getter();
  //to set value of private var or function
  return {
    setter: function (val) {
      privateVar = val;
    },
  }; // this will set the value given from outside as ans.setter(22);
})(); //iife

//-> Prototype:- Whenever you create an object and you call it like "objName." you get built in
// functions like "hasOwnProperty", "isDefault" etc these are prototype which are automatically
//provided to you whenever you create an object.
var obj = {
  name: "raman",
  age: 25,
  salary: 26,
};

//obj.isPrototypeOf
//obj.toString

//-> Prototype inheritence:- Inheriting properties by using prototype. Works just like normal
//inheritence.
//e.g.,
var student = {
  canTalk: true,
  canRun: true,
  canSpeak: true,
  canStudy: true,
};

var monitor = {
  canlistNames: true,
  canGoOut: true,
};

// now as we know monitor will have all those properties of any students and he will have of his
//own how?
monitor._proto_ = student;

//-> This Keyword:- has different value in different context.
console.log(this); // window object
function abcd() {
  //this is a Function
  console.log(this); // window object
}
var objName = {
  name: "sita", //this is a method(it's inside an object or curly braces.)
  age: function () {
    console.log(this); // object as
  },
};

// in case of dom
var button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this); // refers to its parent i.e., button
  this.style.color = "yellow";
  button.style.backgroundColor = "red";
});

//-> Call, Apply, Bind:- if you have 2 things a function and an object. Now when you call this it
// prints window but you want to print the object you defined so you need to tie it with a funtion
//. you can do this by .call, .apply, .bind.
function anthony(a, b, c) {
  console.log(this, a, b, c);
}
var objectPeter = {
  salary: 25,
};
//using call
// anthony.call(objectPeter, 1, 2, 3);

//using apply you can put more values in a [] as array they will be assigned automatically
// anthony.apply(objectPeter, [1, "ram", true]);

//using bind we bind them for later call
var storingbind = anthony.bind(objectPeter); // store to call it
storingbind();
