let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((person) => person.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => person.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter((name) => name.startsWith("J") || name.startsWith("P")))
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter((name) => name.startsWith("A") || name.startsWith("C")))
// Log all the filtered male ('M') in persons array
let filteredMale = (persons.filter((person) => {
  if(person.sex === "M") {
    return person.name;
  }
}))
// Log all the filtered female ('F') in persons array
let filteredFemale = console.log(persons.filter((person) => person.sex === "F"));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
// console.log(filteredFemale.filter((people) => people.name.startsWith("C")))
// Log all the even numbers from peopleGrade array
let evenNum = console.log(peopleGrade.filter((num) => num % 2 === 0));
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.filter((people) => people.name.startsWith("J")));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.filter((people) => people.name.startsWith("P")));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex === "M");

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
},0);
console.log(gradeTotal);
// Find the average grade
let averageGrade = gradeTotal / peopleGrade.length;
console.log(averageGrade);
// Find the average grade of male
// let gradeTotalOfMale = 
// Find the average grade of female

// Find the highest grade
console.log(peopleGrade.sort((a, b) => a - b).pop());
// Find the highest grade in male
console.log(peopleGrade.sort((a, b) => a - b));
// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a, b) => a - b)); // Yes, elements of people grade changes.
// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => b - a));

// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort());
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
