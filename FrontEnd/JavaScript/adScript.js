//-> difference between var , let and const

/* ~ There are 2 types of js 
  1. es5      2. es6
  var belongs to es5
  let and const belong to es6


 ~ var is function scoped. Let is braces scoped
function abcd() {
  for (var i = 1; i < 10; i++) {
    console.log(i);
  }
  console.log("extra" + " " + i);
}
abcd();
O/p: 1 2 3 4 5 6 7 8 9
      extra 10  (Note: as var can be used by parenet function)
in case of let: l
      function abcd() {
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }
  console.log("extra" + " " + i);
}
abcd();
O/p: 1 2 3 4 5 6 7 8 9
       Note: un identifined variable error as i
  
  ~ var add itself to WINDOW OBJECT while let and const don't. Var is not so secure while let as anyone can see var 
  publicly */

//-> Browser context api: Inside it there are 3 components-
//1. Window object      2. Stack      3. Heap
// ~ Window object: provides additional features like console, print etc.
// ~ Stack: The manner in which things are going to be executed that manne is called stack.
// ~ Heap: All variables you create and intermediate data which is generated need any place to be stored that place is called heap.

//-> Execution Context: is a container where the funtion code is executed and it's created when a funtion is called it conatains three
//things: 1) variables 2) funtions 3)lexical enviornment
// function abcd() {
//   var a = 5; // variable
//   function def() {
//     // funtion
//     var b = 10;
//   }
//   console.log(b); // lexical enviornment tells us if element is accessible by our function or not and here 'b' is not accessible.
// }

//-> How to copy reference variable? by using spread(...) operator
// var a = [1, 2, 3, 4, 5];
// var b = [...a];
// b.pop();
// console.log(a); //(5) [1, 2, 3, 4, 5]
// console.log(b); //(4) [1, 2, 3, 4]
// // copying an object
// var obj = { name: "Raman" };
// var copyObj = { ...obj };
// copyObj.name = "Sita";
// console.log(obj); //{name: 'Raman'}
// console.log(copyObj); //{name: 'Sita'}

//-> Truthy and falsy: In js whatever u write belongs to only two category. Either Truthy or Falsy
// how to identify then?
// falsy values: 0, false, undefined, null, NaN, document.all
// All these words convert into false and fails the result other than these all words are truthy.

//-> ForEach Loop: It iterates over all element of array. It doesn't change or modify value of
// array. It works on a temporary copy of an array.
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.forEach((element) => {
//   console.log(element + 2);
// });

// a.forEach(function (val) {
//   console.log(val);
// });

//-> ForIn Loop: It is used to iterate any object.
// var obj = {
//   rolNo: 20,
//   name: "Raman",
//   age: 30,
// };
// for (var key in obj) {
//   console.log(key); //rollNo name age
// }

// for (const key in obj) {
//   if (obj.hasOwnProperty.call(obj, key)) {
//     console.log(key, obj[key]); //rolNo 20 name Raman age 30
//   }
// }

//-> CallBack Function: It is part of Asynchronous JS. It waits for defined timeset and when timme
// limit completes or certain task completes, it runs the code inside it. For e.g., fetching any data from 3rd party api
// setTimeout(() => {
//   console.log("Hello Dosto! Chai peelo! "); // this will print after 5 sec
// }, 5000); // 5000ms= 5 sec

//-> First Class Functions: In js there is a concept in which you can use funtions as value.
// function abcd(a) {
//   a();
// }

// abcd(function def() {
//   console.log("Hello");
// });

//-> How arrays are stored in js? In java array are stored in form of "object"
var arr = [1, 2, 3, 4, 5];
// how java will store arr
//arr={
//   0: 1
//   1: 2
//   2: 3
//   3: 4
//   4: 5
// }
//How to test? Can any array have negative indexing? in js it does why? because it's an object
// arr[-5] = 25;
// console.log(arr); //(5) [1, 2, 3, 4, 5, -5: 25]

//-> How to delete a key value of any object or prop
// var a = {
//   name: "sita",
//   age: 25,
// };

// delete a.age;
