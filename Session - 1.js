//! Day 1: Problem Statements, Basic Math, and Strings
//? Key Topics: Problem interpretation, basic math operations, string manipulation.
//! Session Focus:
//? Learn to interpret problem statements and break them down into actionable steps.
//? Basic math operations: positive/negative numbers, sum, and other simple calculations.
//? String manipulation: reversal, checking alphabets, and counting characters.
//* Session Practice Questions:
//! Determine if a number is positive or negative.
// * Positive => Incoming Payment
// * Negative => Outgoing Payment
// * Zero --- => No Transaction

function transactionType(amount) {
  if (amount > 0) {
    return "Incoming Payment";
  } else if (amount < 0) {
    return "Outgoing Payment";
  } else {
    return "No Transaction";
  }
}

// console.log(transactionType(100));
// console.log(transactionType(0));
// console.log(transactionType(-100));
// console.log(transactionType(-10000000000000));
// console.log(transactionType(8647648737645));
// console.log(transactionType(-7547100));

//! Find the sum of two integers.
function sum(num1, num2) {
  return num1 + num2;
}

function sumWithoutPlusSymbol1(num1, num2) {
  return num1 - -num2;
}

function sumWithoutArithmatic(num1, num2) {
  while (num2 != 0) {
    let carry = num1 & num2;
    num1 = num1 ^ num2;
    num2 = carry << 1;
  }
  return num1;
}

// console.log(sum(10, -17));
// console.log(sumWithoutPlusSymbol1(10, -17));
// console.log(sumWithoutArithmatic(10, -17));

//! Identify the maximum and minimum of three numbers.
function findMinAndMax(num1, num2, num3) {
  let max;
  if (num1 > num2 && num1 > num3) {
    max = num1;
  } else if (num2 > num3) {
    max = num2;
  } else max = num3;
  let min;
  if (num1 < num2 && num1 < num3) {
    min = num1;
  } else if (num2 < num3) {
    min = num2;
  } else min = num3;
  let mid;
  if (num1 != min && num1 != max) {
    mid = num1;
  } else if (num1 == num2 || (num2 != min && num2 != max)) mid = num2;
  else mid = num3;
  return { min, max, mid };
}
// console.log(findMinAndMax(13, 13, 23));
//! Count the number of digits in a number.
function numOfDigits(num) {
  if (num < 0) return numOfDigits(-num);
  return parseInt(Math.log10(num) + 1) || 1;
}

function numOfDigitsWithoutMath(num) {
  let count = 0;
  while (num != 0) {
    num = parseInt(num / 10);
    count++;
  }
  return count;
}

// console.log(numOfDigitsWithoutMath(-12321));
//! Check if a string contains only alphabets.
function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isAlphabet1(str) {
  for (let i = 0; i < str.length; i++) {
    if ((str[i] < "a" || str[i] > "z") && (str[i] < "A" || str[i] > "Z"))
      return false;
  }
  return true;
}

// console.log(isAlphabet("This is"))
// console.log(isAlphabet1("This is"));

// ? Post-Session Practice Questions:
// ! Calculate the difference between two integers.
function difference(num1, num2) {
  if (num1 < num2) return difference(num2, num1);
  return num1 - num2;
}
// console.log(difference(10, 17));
// ! Check if a number is even or odd.
function evenOrOdd(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

function evenOrOdd1(num) {
  return num & 1 ? "Odd" : "Even";
}

function evenOrOdd2(num) {
  return ["Even", "Odd"][num & 1];
}

function evenOrOdd3(num) {
  while (num < 2) {
    //? way 1
    // num--;
    // num--;
    //?way 2
    num = num - 2;
  }
  return num ? "Odd" : "Even";
}

// ! Calculate the perimeter of a rectangle.
function perimeter(a, b) {
  return (a + b) * 2;
}
// ! Find the largest of four numbers.
function max(num1, num2) {
  return num1 < num2 ? num2 : num1;
}

function largestOfFour(num1, num2, num3, num4) {
  return max(max(num1, num2), max(num3, num4));
}

// ! Calculate the average of three numbers.
function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
// ! Identify if a number is divisible by both 3 and 5.
function divisibleBy3And5(num) {
  // Foo Bar
  return num % 3 == 0 && num % 5 == 0 ? true : false;
}
// ! Count the number of vowels in a string.
function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      count++;
    }
  }
  return count;
}
// ! Determine if a character is an uppercase letter.
function isUppercase(char) {
  return char >= "A" && char <= "Z";
}

// console.log(isUppercase("E"))
// ! Print the reverse of a string.
function reverse(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
// ! Find the square of a number.
function square(num) {
  return num * num;
}

function square1(num) {
  return Math.pow(num, 2);
}

function square2(num) {
  return num ** 2;
}

function square3(num, t) {
  if (t == undefined) t = num;
  if (t == 0) return 1;
  if (t == 1) return num;
  return num + square3(num, t - 1);
}
console.log(square3(2));
console.log(square3(3));
console.log(square3(4));
console.log(square3(5));
console.log(square3(6));
console.log(square3(7));



// Prompt for getting Problem Statements from ChatGPT.
/*
You are an expert in creating coding interview questions and providing feedback on coding solutions. Your task is as follows:

Problem Generation: Based on the title of the coding question I provide, generate a detailed problem statement that includes:

Problem Statement: A clear, concise, and detailed problem description.
Input Description: The format and types of inputs the function will receive.
Output Description: The format and expected results of the output.
Constraints: Constraints related to input size, time limits, etc.
Sample Input: At least one example input for the question.
Sample Output: The expected output for the given sample input.
Test Cases: A few additional test cases with their expected outputs.
Code Review and Suggestions: Once I provide you with my code solution for the problem, you will:

Review the code.
Identify areas of improvement such as performance optimization, clarity, edge cases, or any other improvement points.
Provide suggestions to enhance the code.
New Problem Generation: After I complete a problem and receive feedback, you will provide me with a new problem to practice when I request it.

*/


function maxProduct(arr) {
    let max = -Infinity;
    for (let ind = 0; ind < arr.length; ind++){
        for (let ind1 = ind + 1; ind1 < arr.length; ind++)
            if(arr[ind] * arr[ind1] > max) max = arr[ind] * arr[ind1]
    }
    return max
}