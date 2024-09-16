// Assignment 1
// String Manipulation Functions:

// (a)
// Reverse a String: Write a function that reverses a given string.
// steps
// write a function thats accepts string
// write a method that split the stings in to array, reverse the accept stings and join

let sentence = "I love coding.";

function reverseString(sentence) {
  const splitRev = sentence.split("").reverse().join("");
  console.log("The actually sentence: " + sentence);
  console.log("The reversed sentence: ", splitRev);
}
reverseString(sentence);

// (b)
// Count Characters: Create a function that counts the number of characters in a string.
// steps
// create a function that will count the Characters in a string
// use the length method to count the number of characters in a string
function countString(sentence) {
  let countSentence = sentence.length;
  console.log(`Number of Character in the string: ${countSentence}`);
}
countString(sentence);

// (c)
// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
// steps
// create a function that accept input string to capitalize the first letter of each word in a sentence
// make the first letter of each word capital letter(uppercase)
//  make the the rest lowercase

function firstLetCaps(sentence) {
  let splitSentence = sentence.split(" ");

  for (i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i][0].toUpperCase() + splitSentence[i].substr(1);
  }
  joinwords = splitSentence.join(" ");
  console.log(`First letter of each words in capital letter: ${joinwords}`);
}
firstLetCaps(sentence);

// Assignment 2
// Array Functions:

// (a)
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// steps
// create an array of numbers
// create a function that will check for the minimum value
// create a function that will check for the maximum value
// create a function that will check for the minimum and maximum value in an array of number

numbers = [9, 5, 3, 7, 4, 8, 6];

function setMini(number) {
  mini = Infinity;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < mini) {
      mini = numbers[i];
    }
  }
}
setMini();

function setMax(number) {
  maxi = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxi) {
      maxi = numbers[i];
    }
  }
}
setMax();

// minimum and maximum function value
function miniMax() {
  console.log("This is the list of numbers: ", numbers.toString());
  console.log(`The minimum value is: ${mini}`);
  console.log(`The maximum value is: ${maxi}`);
}
miniMax();

// (b)
// Sum of Array: Create a function that calculates the sum of all elements in an array.
// steps
// create an array of numbers
// use the for loop to loop through it and add

function sumOfArr() {
  sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`sum of Array is: ${sum}`);
}
sumOfArr(numbers);

// (c)
// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function evenNumber() {
  let even = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      even.push(numbers[i]);
    }
  }
  evenToString = even.toString();
  console.log(evenToString);
}evenNumber();

// console.log([10, 20, 2, 14].filter(evenNumber));
