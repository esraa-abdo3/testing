//Choose just 2 functions from bellow:


//problem 1
/**
 * Generate a random non-floating number within the range limits arguments.
 * @return {number} a random number in range of min and max (including min and max).
 * @param {number} min starting of the range
 * @param {number} max end of the range 
 * @example random(2,9) => a random number in range (2,3,4,...,9)
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
// test cases:
/* 
    1-test that the return value is a number
    2-test if we pass 5,7 it will return a number >= 5 and <= 7
    3-test if we pass 3 it will return NaN
*/

//////////////////////////////////////////////////////////////////////////////////////////////
// problem 2
/**
 * Removes duplicate values from an array.
 * @param {Array<any>} arr - input array
 * @returns {Array<any>} - new array without duplicates
 * @example removeDuplicates([1,2,2,3]) => [1,2,3]
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


//test cases:
/* 
    1-test that the returned type is array
    2-test that returned array length is correct.
    3-test that array have unique elements
 */
////////////////////////////////////////////////////////////////////////////////


//problem 3:

/**
 * Converts a 12-hour AM/PM time format string to a 24-hour time format.
 *
 * This function takes a time string formatted as "hh:mm:ssAM" or "hh:mm:ssPM" and converts it to the 
 * equivalent 24-hour format. It handles cases such as "12:xx:xxAM" (which is midnight) and "12:xx:xxPM" 
 * (which is noon) appropriately.
 *
 * @param {string} time - representing time in the format "hh:mm:ssAM" or "hh:mm:ssPM".
 * @returns {string} The converted time in the 24-hour format "HH:mm:ss".
 *
 * @example
 * timeConversion("07:45:54PM"); // Returns "19:45:54"
 * timeConversion("12:00:00AM"); // Returns "00:00:00" midnight
 */
function timeConversion(time) {
    let hours = time.substring(0, 2);
     let restOfTime = time.substring(2, time.length-2); // Extract only the time part
     let period = time.slice(-2); // AM or PM
 
     if (period === "PM" && hours !== "12") {
         hours = +hours + 12; // Convert to 24-hour format
     } else if (period === "AM" && hours === "12") {
         hours = "00"; // Handle midnight case
     }
 
     return hours + restOfTime;
 }

 // test cases:
/* 
    1-test that the function return type will be a string
    2-test that the function takes "07:45:54PM" and return a string which hasn't "AM" or "PM"
    2-test that the function takes "12:00:00AM" and return "00:00:00"
*/
/////////////////////////////////////////////////////////////////////////////////////////
//problem 4:
/**
 * Capitalize every word's first character.
 * @return {string} the string after capitalizing every word's first character.
 * @param {string} text the string to capitalize every word's first character in.
 * @example capitalizeTextFirstChar("i'm ahmed ali") ===> "I'm Ahmed Ali"
 * @example capitalizeTextFirstChar(12) ===> throw an error
 */
const capitalizeTextFirstChar = (text) => text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');


// test cases:
/* 
    1-test that the function takes a string it will return type to be a string
    2-test that the function takes a string and return it after capitalize it
    3-test that function should throw error if the parameter is not string type.
*/
// /////////////////////////////////////////////////////////////////////////////////////////
// problem 5

/**
* Reversing string characters' order
* @returns {String} The string after reversing.
* @param {string} input The string to reverse.
* @example stringReverse("Ali") => "ilA"
**/
function stringReverse (input){
    return input.toString().split("").reverse().join("");
}
// test cases:
/* 
    1-test that the function will return type to be a string
    2-test that the function takes a string and return it reversed
    3-test that the function returns the same number of parameter characters 
*/

/////////////////////////////////////////////////////////////////////////////////
//problem 6
/**
 * Counts the number of vowels in a string.
 * @param {string} str The input string.
 * @returns {number} Number of vowels.
 * @example countVowels("banana") => 3
 */
const countVowels = (str) => {
  return (str.match(/[aeiou]/gi) || []).length;
};

//test cases:
/* 
    1-test that returned count is less than or equal the input length.
    2-test that returned count is computed correctly with ignoring vowels case.
    3-test that function should throw error if the parameter is not string type.
 */
//////////////////////////////////////////////////////////////////////////////////////
//problem 7
/**
 * Deep clones an object.
 * @param {Object} obj
 * @returns {Object} A new deep copy.
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}


//test cases:
/* 
    1-test that returned type is object
    2-test that the returned object has the same structure.
    3-test that modifying clone doesn't affect original
 */


//////////////////////////////////////////////////////////////////////////////////////////
// BONUS: Explain what is "Test Driven Development" (TDD) ,then use it to make function 'removePropertyFromObject' testing that should pass these test cases:
/* 
1-should take property/key and check that's defined in that object or throwing an error
2-should return type of object
3-should return the object without the property/key (name) passing as parameter
    ex.:
    //if obj = {a:1,b:2,c:3} and wants to remove "b" , function expect to return ==> { a: 1, c: 3 }
 */
module.exports={ random,capitalizeTextFirstChar,countVowels,timeConversion,stringReverse,deepClone,removeDuplicates}