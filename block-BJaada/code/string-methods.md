Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Parameter: () - string data type.
   - Return: A new string representing the calling string converted to upper case.
   - Example:
     
     ```js
     let name = "Vivek Kumar";
     name.toUpperCase(); // `VIVEK KUMAR`
     let schoolName = "Sainik School Gopalganj";
     schoolName.toUpperCase(); // `SAINIK SCHOOL GOPALGANJ`
     let houseName = "Gandhara";
     houseName.toUpperCasse(); // `GANDHARA`
    ``` 
   - `toUpperCase` method returns the calling string value converted to uppercase.

3. `toLowerCase`
  - Parameter: () - string data type.
  - Return: A new string representing the calling string          converted to lower case.
  - Example:

    ```js
    let name = "Abhishek Shastri";
    name.toLowerCase(); // `abhishek shastri`
    let schoolName = "Sainik School Gopalganj";
    schoolName.toLowerCase(); // `sainik school gopalganj`
    let houseName = "Vikramshila";
    houseName.toLowerCase(); // `vikramshila`
    ```
  - `toLowerCase` method returns the calling string value converted to lowercase.

4. `trim`
  - Parameter: () - string data type.
  - Return: A new string representing `str` stripped off      whitespaces from both its beginning and end.
    Example:
    ```js
    let name = "   Anil Kumar    ";
    name.trim(); // `Anil Kumar`
    let schoolName = "Sainik School Nalanda  ";
    schoolName.trim(); //  `Sainik School Nalanda`
    let houseName = "   Mahavira";
    houseName.trim(); // `Mahavira`
    ```
  - `trim` method removes whitespaces from both ends of a string.

5. `trimEnd`
  - Parameter: () - string data type.
  - Return: A new string representing `str` stripped off    whitespaces from its end.
    Example: 
    ```js
    let name = "   Sumit Kumar   ";
    name.trimEnd(); // `   Sumit Kumar`
    let schoolName = "     Sainik School Nalanda";
    schoolName.trimEnd(); // `    Sainik School Nalanda`
    let houseName = "Ashoka   ";
    houseName.trimEnd(); // `Ashoka`
    ```
  - `trimEnd` method removes whitespaces from end of a string.

6. `trimStart`
  - Parameter: () - string data type.
  - Return: A new string representing `str` stripped off    whitespaces from its beginning.
    Example: 
    ```js
    let name = "   Ravindra Shastri ";
    name.trimStart(); // `Ravindra Shastri `
    let schoolName = "     Sainik School Nalanda";
    schoolName.trimStart(); // `Sainik School Nalanda`
    let houseName = "Ajatshatru   ";
    houseName.trimStart(); // `Ajatshatru   `
    ```
  - `trimStart` method removes whitespaces from beginning of a string.

7. `concat` 
  - Parameter: strN - One or more strings to concatenate to str.
  - Return: A new string containing the combined text of the strings provided.
    Example:
    ```js
    let name = "Shishupal Kumar";
    let schoolName = "Sainik School GopalGanj";
    name.concat(` `,`,`, schoolName); // `Shishupal Kumar,Sainik School Gopalganj`
    ```
8. `endsWith`
9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
