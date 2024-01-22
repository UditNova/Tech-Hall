// # Synchronous and asynchronous:-
//-> Synchronous:- It means one after another. If a job starts untill it ends no  other job will
//start. 2nd job will start only after first job is finished.
//Ex:- Suppose you have a program concluding of 4 tasks along with time they take to complete.
//  task A  2
//  task B  5
//  task C  15
//  task D  1
// Total time taken to conplete the program:-2+5+15+1=23s

//-> Asynchronous:- It means all jobs can be started at once and whichever job is completed first
// it's answer will be concluded.
//  task A  2
//  task B  5
//  task C  15
//  task D  1
// Total time taken to conplete the program:-15s max of all tasks as they started at same time
// Syntax has:-
// setTimeout()
// setInterval()
// Promise
// fetch
// axios
// XMLHttpRequest

// Need for the asynchronous? Sometimes you code needs to fetch data from some other server and we
//don't know how much time that response will take so not to halt our program in middle of the task
// we use asynchronous so rest of the code will keep executing and whenever our response will come
//we  will include it.
// Syntax:
// console.log("hey1");
// // setTimeout(callbackFunction, timeinms)
// setTimeout(function () {
//   console.log("hey2");
// }, 5000);

// console.log("hey 3");

// # Js is not async? its not async;
// ~ it has 2 stack main and side stack
// ~ Sync stuff always go inside main stack
// ~ Async stuff always go inside side stack
// ~ first main stack is executed and when it's empty side stack is asked if something is ther which
//  is ready to be executed. If there is then it's brought to main stack and get executed.
// ~ NOTE: the asking between main stack and side stack is done by the event loop.
// console.log("hey1 ");
// console.log("hey2 ");
// setTimeout(() => {
//   console.log("hey 3");
//   console.log("hey 5");
// }, 0);
// console.log("hey 4");
// O/p: hey1
// hey2
// hey 4
// hey 3
// hey 5

// NOTE: In js async happen bc js switches it single thread between multiple process/ tasks too fast

// # Promises:- are like async conditions used to provide asynchronous nature to our code. It either
// resolved or rejected.
// # Then & Catch:- is used to store result of promises if it's resolves the response code written in
// then will execute and if it's rejected then the code of catch is executed.
// Suppose you ask your friend for $100 and it's a big deal of money for your jobless friend. Now what
// you do is send a request it can be accepted or it can be rejected and according to result your
// friendship will last. Code this now!
// var ans = new Promise(function (res, rej) {
//   // new as it's a constructor
//   console.log("Please give me $100 plzzz!");
//   //req goes to your friend and he sends response or reject
//   setTimeout(() => {
//     if (true == true) {
//       return res("Sure, why not! you are my only true friend.");
//     } else {
//       return rej("Hell Nah! never. Die in Hell! s***");
//     }
//   }, 10000);
// });

// ans.then(function (data) {
//   console.log(data);
//   console.log("Friendship continues....");
// });

// ans.catch(function (data) {
//   console.log(data);
//   console.log("A very sad ending!");
// });

// # Async await:- You can use this in place of "promise" and ".then". It makes yuor coding easier.
// code above situation using async and await
async function friendship() {
  return new Promise((resolve, reject) => {
    console.log("Please give me $100 plzzz!");

    setTimeout(() => {
      if (true == false) {
        resolve("Sure, why not! you are my only true friend.");
      } else {
        reject("Hell Nah! never. Die in Hell! s***");
      }
    }, 6000);
  });
}

async function main() {
  try {
    const result = await friendship(); // Corrected: added 'await' here
    console.log(result);
    console.log("Friendship continues....");
  } catch (error) {
    console.log(error);
    console.log("A very sad ending!");
  }
}

main();
