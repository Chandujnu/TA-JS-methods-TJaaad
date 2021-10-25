Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
  - Parameter: Separator - optional - Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary.
  - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
  - Example:
  ```js
  let studentsName = ["Amit", "Ritesh", "Deepak", "Sanjeet"];
  studentsName.join(); //`Amit,Ritesh,Deepak,Sanjeet`
  studentsName.join(""); // `AmitRiteshDeepakSanjeet`
  studentsName.join(" "); // `Amit Ritesh Deepak Sanjeet`
  let students = [];
  students.join(); // ""
  students.join(""); // ""
  students.join(" "); // ""
  students.join("null"); // ""
  students.join(undefined); // ""
  students.join([]); // ""
  ``` 
- `join` method creates and returns a new string by concatenating all of the elements in and array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

3. `flat`
  - Parameter: depth - optional - The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
  - Return: A new array with the sub-array elements concatenated into it.
  - Example: 
  ```js
  const studentsName = ["Chandramani", "Rahul", "Amar", ["Naveen", "Raushan"]];
  studentsName.flat(); // ["Chandramani", "Rahul", "Amar", "Naveen", "Raushan"]
   const studentsName = ["Chandramani", "Rahul", ["Amar", ["Naveen", "Raushan"]]];
   studentsName.flat(); // ["Chandramani", "Rahul", "Amar", ["Naveen", "Raushan"]]]
    const studentsName = ["Chandramani", "Rahul", ["Amar", ["Naveen", "Raushan"]]];
   studentsName.flat(2); // ["Chandramani", "Rahul", "Amar", "Naveen", "Raushan"]
   studentsName.flat(Infinity); // ["Chandramani", "Rahul", "Amar", "Naveen", "Raushan"]
  ```
 - Syntax:
   flat()
   flat(depth)
 - `flat` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

4. `push`
  - Parameter: ElementN - The element(s) to add to the end of the array.
  - Return: The new length property of the object upon which the method was called.
  - Example:
  ```js
  const animals =["cow", "goat", "buffallow"];
  animals.length; // 3
  animals.push("ox");
  animals.length; // 4
  animals; // ["cow", "goat", "buffallow", "ox"]
  animals.push("pig", "camel","dog");
  animals; // ["cow", "goat", "buffallow", "ox", "pig", "camel", "dog"]
  ```
  - Syntax: 
     push(element0)
     push(element0, element1,...., elementN)
  `push` method appends values to an array, by adding one or more elements to the end of an array and returns the new length og the array.

5. `indexOf`
  - Parameter: searchElement - Element to locate in the array.
    fromIndex - optional - The index to start the search at.
  - Return: The first index of the element in the array, and -1 if not found.
  - Syntax: indexOf(searchElement)
           indexOf(searchElement, fromIndex)
  - Example:
  ```js
  const studentsName = ["Chandramani", "Rahul", "Amar", "Naveen", "Raushan"];
  studentsName.indexOf("Amar"); // 2
  const studentsName = ["Chandramani", "Rahul", "Amar", "Naveen","Rahul", "Raushan"];
  studentsName.indexOf("Rahul", 2); // 4
  studentsName.indexOf("Gitesh"); // -1
  ```
  - `indexOf` method returns the first index at which a given element can be found in the array, or -1 if it is not present.
6. `lastIndexOf`
  - Parameter: searchElement - Element to   locate in the array. 
    fromIndex - optional - The index at which to start searching backwards.
  - Return: The last index of the element in the array, and -1 if not found.
  - Syntax: lastIndexOf(searchElement)
            lastIndexOf(searchElement, fromIndex)
  - Example:
  ```js
  const animals =["cow", "goat", "buffallow", "dog", "cow"];
  animals.lastIndexOf("dog"); // 3
  animals.lastIndexOf("cow"); // 4
  const studentsName = ["Chandramani", "Rahul", "Amar", "Naveen","Rahul", "Raushan"];
  studentsName.lastIndexOf("Rahul"); // 4
  ```
  `lastIndexOf` method turns the last index at which a given element can be found in the array, or -1 if it is not present.

7. `includes`
  - Parameter: searchElement - The value to search for.
    fromIndex - optional - The position in this array at which to begin searching for searchElement.
  - Return: A boolean value which is true if the value searchElement is found within the array indicated by the index fromindex, if specified.
 - Example:
 ```js
 const arr = [1, 4, 8, 9];
 arr.includes(8); // true
 arr.includes(3); // false
 let pets = ["cat", "dog", "parrot"];
 pets.includes("at"); // false
 pets.includes("parrot"); // true
 ``` 
 `includes` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

8. `reverse`
  - Parameter: ()
  - Return: The reversed array.
  - Example:
  ```js
  const arr = [1, 4, 8, 9];
  arr.reverse(); // [9, 8, 4, 1]
  let pets = ["cat", "dog", "parrot"];
  pets.reverse(); // ["parrot", "dog", "cat"];
  const animals =["cow", "goat", "buffallow", "dog", "cow"];
  animals.reverse(); // ["cow", "dog", "buffallow", "goat", "cow"]
  ```
 `reverse` method reverses an array. The first array element becomes the last, and the last array element becomes the first.

9. `every`
  - Parameter: callbackFn - A function to test for each element, taking three arguments:
    element - The current element being processed in the array.
    index - optional - The index of the current element being processed in the array.
    array - optional - The array every was called upon.
    thisArg - optional - A value to use as this when executing callbackFn.
  - Return: true if the callbackFn function   returns a truthy value for every array element. Otherwise, false.
 - Example:
 ```js
 let numbers = [4, 7, 9, 29, 35];
 let ret = numbers.every(function(number) {
   return number > 5;
 }); // false, as every number is not greater than 5.
  let ret = numbers.every(function(number) {
   return number > 0;
 }); // true
  let numbers = [4, 7, 9, 29, 35];
 let ret = numbers.every(function(number) {
   return number > 100;
 }); // false
 ```
 `every` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

10. `shift`
  - Parameter: ()
  - Return: The removed element from the array; undefined if the array is empty.
  - Example:
  ```js
  let numbers = [4, 7, 9, 29, 35];
  numbers.shift(); // [7, 9, 29, 35]
  let pets = ["cat", "dog", "parrot"];
  pets.shift(); // ["dog", "parrot"]
  let colors = ["red", "black", "yellow", "green"];
  colors.shift(); // ["black", "yellow", "green"]
  ```
  `shift` method removes the first element from an array and returns that removed element. This method changes the length of the array.
  - It mutates the array.
11. `splice`
  - Parameter: start - The index at which to   start changing the array.
    deleteCount - optional - An integer indicating the number of elements in the array to remove from start.
  - Return: An array containing the deleted elements.
    If only one element is removed, an array of one element is returned.
    If no elements are removed, an empty array is returned.
  - Example:
  ```js
    let colors = ["red", "black", "yellow", "green"];
    colors.splice(1); // ["black", "yellow", "green"]
    colors; // ["red"]
       let colors = ["red", "black", "yellow", "green"];
    colors.splice(1, 0); // []
    colors; // ["red", "black", "yellow", "green"]
       let colors = ["red", "black", "yellow", "green"];
       colors.splice(1, 0, "blue"); // []
       colors; // ["red", "blue", "black","green"]
       let colors = ["red", "black", "yellow", "green"];
       colors.splice(1,1,"blue"); // ["black"]
       colors; // ["red", "blue", "yellow", "green"]
  ```
  `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it.
  - It mutates the value.

12. `find`
  - Parameter: 
    - callbackFn - Function to execute on each value in the array, taking 3 arguments:
      - element- The current element in the array.
      - index - optional - The index (position) of the current element in the array.
      array - optional - The array that find was called on.
      thisArg - optional - Object to use as this inside callbackFn.
  - Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
  - Example:
    ```js
    let numbers = [23, 34, 45, 56, 67];
    function finds(num) {
      return num > 30;
    }
    numbers.find(finds); // 34
    function finds(num) {
      return num > 10;
    }
    numbers.find(finds); // 23

      function finds(num) {
      return num / 2 !== 0;
    }
    numbers.find(finds); // 23
    ```
  `find` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  - It does not mutate the value.

13. `unshift`
  - Parameter: elementN - The elements to add to the front of the arr.
  - Return: The new length property of the object upon which the method was called.
  - Example:
  ```js
  let numbers = [1,3, 5, 6];
  numbers.unshift(7); // 5
  numbers; // [7, 1, 3, 5, 6];
  let colors = ["red", "black", "yellow", "green"];
  colors.unshift("blue"); // 5
  colors; // ["blue", "red", "black", "yellow", "green"]
  colors.unshift("darkblue", "aqua"); // 7
  colors; // ["darkblue", "aqua", "blue", "red", "black", "yellow", "green"], As it mutates the value.
  
  ```
  `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.
  - It mutates the value.

14. `findIndex`
  - Parameter: 
    callbackFn - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.It takes three arguments:
    - element - The current element being processed in the array.
    - index - optional - The index of the current element being processed in the array.
    - array - optional - The array findIndex() was called upon.
    - thisArg - optional - Optional object to use as this when executing callbackFn.
  - Return: The index of the first element in the array that passes the test. Otherwise, -1.
  - Example:
  ```js
    let numbers = [23, 34, 45, 56, 67];
    function finds(num) {
      return num < 30;
    }
    numbers.findIndex(finds); // 0

    function finds(num) {
      return num > 40;
    }
    numbers.findIndex(finds); // 2
        function finds(num) {
      return num < 0;
    }
    numbers.findIndex(finds); // -1
  ```
  `findIndex` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
 - It does not mutate the value.

15. `filter`
   - Parameter: 
     - callbackFn - Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.It accepts three arguments:
     - element - The current element being processed in the array.
     - index - optional - The index of the current element being processed in the array.
     - array - optional - The array on which filter() was called.
     - thisArg - optional - Value to use as this when executing callbackFn.
   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
   - Example:
   ```js
   let numbers = [23, 34, 45, 56, 67];
    function number(num) {
      return num < 30;
    }
    numbers.filter(number); // [23]
    numbers; // [23, 34, 45, 56, 67]

    function number(num) {
      return num > 30;
    }
    numbers.filter(number); // [34, 45, 56, 67]
    numbers; // [23, 34, 45, 56, 67]

      function number(num) {
      return num < 0;
    }
    numbers.filter(number); // []
   ```
   `filter` method creates a new array with all elements that pass the test implemented by the provided function.
   - It does not mutate the value.

16. `flat`
   - Parameter: depth - optional - The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
   ```js
   const numbers = [0, 1, 2, [3, 4]];
   numbers.flat(); // [0, 1, 2, 3,4]
   numbers.flat(0); // [0, 1, 2, [3, 4]]
   
   const numbers2 = [0, 1, 2, [[[3, 4]]]]
   numbers2.flat(1); // [0, 1, 2, [[3, 4]]]
   numbers.flat(Infinity); // [0, 1, 2, 3, 4]
   ```
   `flat` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - It does not mutate the value.

17. `forEach`
   - Parameter:
     - callbackFn - Function to execute on each element. It accepts between one and three arguments:
     - element - The current element being processed in the array.
     - index - optional - The index of element in the array.
     - array - optional- The array forEach() was called upon.
     - thisArg - optional - Value to use as this when executing callbackFn.
   - Return: undefined.
   - Example:
   ```js
   
   ```
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
