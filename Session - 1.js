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

console.log(transactionType(100));
console.log(transactionType(0));
console.log(transactionType(-100));
console.log(transactionType(-10000000000000));
console.log(transactionType(8647648737645));
console.log(transactionType(-7547100));

//! Find the sum of two integers.
//! Identify the maximum and minimum of three numbers.
//! Count the number of digits in a number.
//! Check if a string contains only alphabets.
// // Post-Session Practice Questions:
// // Calculate the difference between two integers.
// // Check if a number is even or odd.
// // Calculate the perimeter of a rectangle.
// // Find the largest of four numbers.
// // Calculate the average of three numbers.
// // Identify if a number is divisible by both 3 and 5.
// // Count the number of vowels in a string.
// // Determine if a character is an uppercase letter.
// // Print the reverse of a string.
// // Find the square of a number.


