// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101); // 8
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9); // 11
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
let updatedArr = [...strings];
updatedArr.push("called", "sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

updatedArr.join(" ");
// - Remove the first word in the array (strings)
updatedArr.shift();
// - Find all the words that contain 'is' use string method 'includes'
updatedArr.includes("is")
// - Find all the words that contain 'is' use string method 'indexOf'
updatedArr.indexOf()
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let numDivByThree = numbers.every((num) => num / 3 === 0); // false
// -  Sort Array from smallest to largest
let sortedNum = [...numbers];
sortedNum.sort((a, b) => a - b);
// - Remove the last word in strings
updatedArr.pop();
// - Find largest number in numbers
// let largestnum = sortedNum.i();
// - Find longest string in strings

// - Find all the even numbers
let evenNumbers = numbers.filter((num) => num % 2 ===0);
// - Find all the odd numbers
let oddNumbers = numbers.filter((num) => num % 2 !== 0);
// - Place a new word at the start of the array use (unshift)
updatedArr.unshift("like");
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 4));
// - Replace 12 & 18 with 1221 and 1881
console.log(numbers.map)
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = firstname + lastname;
// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
