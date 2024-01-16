// 1. Square Star Pattern in Javascript
// *****
// *****
// *****
// *****
// *****

//code:-
function squarePattern(num) {
  for (let index = 0; index < num; index++) {
    var str = "";
    for (var j = 0; j < num; j++) {
      str += "*";
    }
    console.log(str);
  }
}
squarePattern(5);

// 2. Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

//code:-

function printFirstRow(num) {
  var str = "";
  for (var i = 0; i < num; i++) {
    str += "*";
  }
  console.log(str);
}
function starryPattern(numberOfRows) {
  for (var i = 0; i < numberOfRows - 2; i++) {
    var str = "*";
    for (var j = 0; j < i; j++) {
      str += " ";
    }
    str += "*";
    console.log(str);
  }
}
function printFirstRow(num) {
  var str = "";
  for (var i = 0; i < num; i++) {
    str += "*";
  }
  console.log(str);
}

function starryPattern(numberOfRows) {
  for (var i = 0; i < numberOfRows - 2; i++) {
    var str = "*";
    for (var j = 0; j < numberOfRows - 2; j++) {
      str += " ";
    }
    str += "*";
    console.log(str);
  }
}

function printPattern() {
  printFirstRow(5);
  starryPattern(5);
  printFirstRow(5);
}

printPattern();

// 3. Right Triangle Pattern in Javascript
//     *
//    **
//   ***
//  ****
// *****

// code:-
function trianglePattern(num) {
  for (let index = 0; index < num; index++) {
    var str = "";
    for (var j = 2; j < num - index + 1; j++) {
      str += " ";
    }
    for (var k = 0; k < index + 1; k++) {
      str += "*";
    }
    console.log(str);
  }
}
trianglePattern(5);

// 4. Left Triangle Pattern in Javascript
// *
// **
// ***
// ****
// *****

// code:-
function leftTrianglePattern(num) {
  for (let index = 0; index < num; index++) {
    var str = "";
    for (j = 0; j < index + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}
leftTrianglePattern(5);

// 5. Downward Triangle Star Pattern
// *****
// ****
// ***
// **
// *

//code:-
function downwardTrianglePattern(num) {
  for (let index = 0; index < num; index++) {
    var str = "";
    for (j = num; j > index; j--) {
      str += "*";
    }
    console.log(str);
  }
}
downwardTrianglePattern(5);

// 6. Hollow Triangle Star Pattern
// *
// **
// * *
// *  *
// *   *
// ******

//code:-
function hollowTrianglePattern(num) {
  for (let i = 0; i < num; i++) {
    var str = "";
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i || i === num - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

hollowTrianglePattern(6);
