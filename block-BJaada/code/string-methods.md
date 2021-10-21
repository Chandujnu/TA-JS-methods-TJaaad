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
    let houseName = "Gandhara";
    name.concat(` `,`,`, schoolName); // `Shishupal Kumar,Sainik School Gopalganj`
    name.conact(` `, `is from`, ` `,schoolName,`!`); // `Shishupal kumar is from Sainik School Goplaganj!`
    name.concat(` `,`is from`,` `,schoolName,` `,`of `,houseName,` house`,`!`); // 'Shishupal Kumar is from Sainik School GopalGanj ofGandhara house!'
    ```
  - `concat` method concatenates the string arguments to the caliing string and return a new string.

8. `endsWith`
  - Parameter:
    - searchString - the characters to be searched for at the end of `str`.
    - length - optional - if provided, it is used as the length of `str`. Defaults to `str.length`.
  - Return: `true` if the given characters are found at the end of the string; otherwise, `false`.
  - Example:
    ```js
    let name = "Shishupal Kumar";
    let schoolName = "Sainik School GopalGanj";
    let houseName = "Gandhara";
    name.endsWith("umar"); // true
    schoolName.endsWith("pal"); // false
    houseName.endsWith("a", 8); //true
    ```
    `endsWith` method lets us determine whether or not a string ends with another string. This method is case-sensitive.

9. `includes`
  - Parameter:
    - searchString - A string to be searched for within `str`.
    - position - optional - The position within the string at which to begin searching for searchString.(Defaults to 0.)
  - Return: true if the search string is found anywhere within the given string; otherwise, false if not.
    Example:
    ```js
    let name = "Abhishek Shastri";
    let schoolName = "Sainik School Gopalganj";
    let houseName = "Vikramshila";
    name.includes("tri"); // true
    schoolName.includes("Sch",7); // true
    houseName.includes("vikram"); // false
    ```
    `includes` method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

10. `indexOf`
   - Parameter: 
     - searchValue - (string data type)
     - fromIndex - optional- An integer representing the index at which to start the search. Default to 0.
   - Return: The index of the first occurrence of searchValue, or -1 if not found.
   Example:
   ```js
   "Hello world".indexOf(""); // 0
   "Hello world".indexOf("l"); // 2
   "Hello world".indexOf("ld"); // 9
   ```
   `indexOf`  method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

11. `lastIndexOf`
   - Parameter:
    - searchValue - A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.
    - fromIndex - optional - The index of the last character in the string to be considered as the beginning of a match.
  - Return: The index of the last occurrence of searchValue; -1 if not found.
  Example:
  ```js
   "Shishupal Kumar".lastIndexOf(`a`); // 13
   "Shishupal Kumar".lastIndexOf(``); // 15
   "Shishupal Kumar".lastIndexOf(`a`, 8); // 7
  ```
  `lastIndexOf` method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

12. `padEnd`
   - Parameter: 
     - targetLength - The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
     - padString - optional- ("string data type")
   - Return: A String of the specified targetLength with the padString applied at the end of the current str.
   Example:
   ```js
   "Kumar".padEnd(8); // 'Kumar   '
   "Kumar".padEnd(5, "Shishupal"); // `Kumar`
   "Kumar".padEnd(15, "Shishupal"); // 'KumarShishupalS'
   ```
   `padEnd` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
13. `padStart`
   - Parameter:
     - targetLength: The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
     - padString: - optional - (string data type)
   - Return: A String of the specified targetLength with padString applied from the start.
   Example:
   ```js
   "Kumar".padStart(8); // '   Kumar'
   "Kumar".padStart(5, "Shishupal"); // `Kumar`
   "Kumar".padStart(15, "Shishupal"); // 'ShishupalSKumar'
   ```
   `padStart` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

14. `repeat`
   - Parameter: count - An integer between 0 and +Infinity, indicating the number of times to repeat the string.
   - Return: A new string containing the specified number of copies of the given string.
   Example:
   ```js
   "kumar".repeat(-2); // invalid input
   "kumar".repeat(); // ``
   "kumar".repeat(5); // 'kumarkumarkumarkumarkumar'
   ```
   `repeat` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`
   - Parameter:
     - pattern - The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.
     - substr- A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
     Example:
     ```js
     const sentence = "The dog is faithful and monkey is naughty";
     sentence.replace("dog", "cat"); // 'The cat is faithful and monkey is naughty'
     sentence.replace("monkey", "cat"); // 'The dog is faithful and cat is naughty'
      sentence.replace("naughty", "hungry"); // 'The dog is faithful and monkey is hungry'
     ```
     `replace` method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a pattern, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

16. `slice`
   - Parameter:
     - beginIndex - The zero-based index at which to begin extraction.
     - endIndex - optional - The zero-based index before which to end extraction. The character at this index will not be included.
   - Return: A new string containing the extracted section of the string.
   Example:
   ```js
   "The crow was thirsty".slice(); // 'The crow was thirsty'
   "The crow was thirsty".slice(4); // 'crow was thirsty'
   "The crow was thirsty".slice(4, -4); // 'crow was thi'
   ```
   `slice` method extracts a section of a string and returns it as a new string, without modifying the original string.
17. `split`
   - Parameter: 
     - separator - optional - The pattern describing where each split should occur. The separator can be a simple string or it can be a regular expression.
     - limit - optional - A non-negative integer specifying a limit on the number of substrings to be included in the array.
   - Return: An Array of strings, split at each point where the separator occurs in the given string.
   Example:
   ```js
   "The purpose of our lives is to be happy.".split(); // ['The purpose of our lives is to be happy.']
   "The purpose of our lives is to be happy.".split(" "); // ['The', 'purpose', 'of', 'our', 'lives', 'is', 'to', 'be', 'happy.']
   "Purpose".split(""); // ['P', 'u', 'r', 'p', 'o', 's', 'e']
   ```
   `split` method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

18. `substring`
   - Parameter:
     - indexStart- The index of the first character to include in the returned substring.
     - indexEnd - optional- The index of the first character to exclude from the returned substring.
   - Return: A new string containing the specified part of the given string.
   Example:
   ```js
   "kumar".substring(); // `kumar`
   "kumar".substring(2); // `mar`
   "kumar".substring(4, 2); // `ma`
   ```
   `substring` method returns the part of the string between the start and end indexes, or to the end of the string.
