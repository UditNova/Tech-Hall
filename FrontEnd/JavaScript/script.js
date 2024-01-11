// ->word vs keyword:
// words: Hello, Raman, Table
// keywords: For. while, if, else. (These are reseved words which has some meaning)

//-> var const let:
// var a = 5; //
// var b, c;
// b = 10;

// let name = "Raman"; // same like var but has minor difference
// const roll_no = 53; // value is not changable
// console.log(c);

// //-> Hoisting: it means using a var before its even defined
// // how it works? var a=5; js automatically breaks this in two part var a; (this
// //part goes at top automatically) and a=5;
// console.log(d); // Op: undefined as var d; only defines and don't initalizes it.
// var d = 15;
// console.log(d);

//-> Types in js:
//Primitive:
/*Reference: (), [], {} if we copy these variables directly and then change
something in the referenced var the original copy will be affected. As referred
 var is taking reference of first var, not his own copy
var a = [2, 3, 4];
var b = a;
console.log("a= ", a); // a=  (3) [2, 3, 4]
b.pop();
console.log("a= ", a); //a=  (2) [2, 3]*/
/* primitive: 
var d = 5;
var e = d;
e = 6;
console.log("d= ", d);*/

//-> Conditionals: if, else, elseif, ternary
// var a = 5;
// var b = 5;
// if (a > b) {
//   console.log("a is greater than b.");
// } else if (a < b) {
//   console.log("b is greater than a.");
// } else {
//   console.log("a and b are equal.");
// }

// // test cases:
// if ("asfsdfs") {
//   console.log("asfsdfs can run if block"); // true
// }

// if (5) {
//   console.log("anything in brackets can run if block even any integer");
// }

//-> Loops
// for (var i = 0; i < 5; i++) {
//   console.log("Hello for");
// }

// var a = 0;
// while (a < 10) {
//   console.log("Hello while");
//   a++;
// }
// var a = 0;
// do {
//   console.log("Hello do while");
//   a++;
// } while (a < 15);

//-> Functions
// function addition(a, b) {
//   return a + b;
// }

// console.log("Hello addition funtion: 23 + 25= ", addition(23, 25));

//-> Arrays
// var arr = [1, 2, 3, 4, 5, 6, 7];
// //push: to add an element at end
// arr.push(8);
// console.log("pushed: ", arr);//pushed:  (8) [1, 2, 3, 4, 5, 6, 7, 8]
// //pop: to remove an element from end
// arr.pop();
// console.log("pop: ", arr);//pop:  (7) [1, 2, 3, 4, 5, 6, 7]
// //unshift: to add an element at start
// arr.unshift(0);
// console.log("unshift: ", arr);//unshift:  (8) [0, 1, 2, 3, 4, 5, 6, 7]
// //shift: to remove an element at start
// arr.shift();
// console.log("shift", arr);//shift (7) [1, 2, 3, 4, 5, 6, 7]
// //splice: to remove from specific to specific number of element
// arr.splice(2, 3);
// console.log("split: ", arr);//split:  (4) [1, 2, 6, 7]
