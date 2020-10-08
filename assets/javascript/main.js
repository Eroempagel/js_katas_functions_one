/** KATA 01 ⮕ sum
 ***
 *** Write a function called sum that takes two parameters
 *** and returns the sum of those 2 numbers.
 ***
 **/
function sum(a, b) {
  //return a + b;
  document.body.innerHTML += "</br>" + (a + b) + "</br>";
}
sum(5, 9);
sum(5, 4);
/** KATA 02 ⮕ avg
 ***
 *** Write a function named avg that takes 3 parameters
 *** and returns the average of those 3 numbers.
 ***
 **/
function avg(a, b, c) {
  //return (a + b + c) / 3;
  document.body.innerHTML += "</br>" + (a + b + c) / 3 + "</br>";
}
avg(1, 5, 9);
avg(4, 4, 4);
avg(10, 4, 1);

/** KATA 03 ⮕ greaterThan
 ***
 *** Write a function called greaterThan that takes two parameters
 *** and returns true if the second parameter is greater than the first.
 *** Otherwise the function should return false.
 ***
 **/
function greaterThan(a, b) {
  if (b > a) {
    document.body.innerHTML += "</br>" + true + "</br>";
  } else {
    document.body.innerHTML += "</br>" + false + "</br>";
  }
}
greaterThan(5, 6);
greaterThan(4, 1);

/** KATA 04 ⮕ secondLargest
 ***
 *** Write a function called secondLargest that takes an array
 *** and returns the second largest number.
 ***
 **/
function secondLargest(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  document.body.innerHTML += "</br>" + arr[1] + "</br>";
}
secondLargest([1, 4, 5, 8]);
secondLargest([8, 3, 5, 1, 9, 10]);

/** KATA 05 ⮕ containsVowel
 ***
 *** Write a function called containsVowel that takes a single string
 *** and returns true if there is at least one value or false otherwise.
 ***
 **/
const vowels = ["a", "e", "i", "o", "u"];

function containsVowel(text) {
  let count = 0;
  text.toLowerCase;
  while (count <= text.length) {
    if (vowels.includes(text[count])) {
      document.body.innerHTML += "</br>" + true + "</br>";
    } else {
      document.body.innerHTML += "</br>" + false + "</br>";
    }
    count++;
  }
}
containsVowel("alpha");
console.log(containsVowel);

/** KATA 06 ⮕ tip
 ***
 *** Jeb eats out at restaurants all the time but is horrible at math.
 *** He decides to write a function called tip that accepts a single parameter
 *** (the cost of the meal), and should return the tip Jeb should give his waiter.
 *** Jeb uses two rules to calculate tips:
 ***
 ***  * First he always tips 20% on the original bill.
 ***  * He then rounds up to the nearest dollar. For example,
 ***    if the total with tip is $22.78, he'd round up to $23.00.
 ***
 **/

/** KATA 07 ⮕ longestWord
 ***
 *** Write a function called longestWord that takes a single string
 *** and returns the longest word in the string
 ***
 **/
