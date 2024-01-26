// # Dom:- Document Object Model
// -> Also called frontend js

// # 4 Pillars of DOM:-
// 1. Selection of HTML
// var a = document.querySelector("button");
// console.log(a);
// 2. Changing html
// a.innerHTML = "Hello there baka!";
// 3. Changing CSS
// a.style.color = "yellow";
// a.style.fontSize = "70px";
// 4. Event Listener
// a.addEventListener("click", function () {
//   a.style.backgroundColor = "black";
//   a.style.borderRadius = "25%";
//   a.alert("BANG!!");
// });

//Select the button
var button = document.querySelector("button");
var bulb = document.querySelector(".bulb");
var flag = 0;
button.addEventListener("click", function () {
  console.log("button clicked");
  if (flag == 0) {
    button.innerHTML = "OFF";
    bulb.style.backgroundColor = "yellow";
    flag = 1;
  } else {
    button.innerHTML = "ON";
    bulb.style.backgroundColor = "transparent";
    flag = 0;
  }
});
