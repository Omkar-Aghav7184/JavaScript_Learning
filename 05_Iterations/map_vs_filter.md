/********************************************************************
 📘 JavaScript Array Methods: map() vs filter()
********************************************************************/

/*******************************
🔍 Overview
*******************************/

/**
 * Feature        | map()                                  | filter()
 * ---------------|------------------------------------------|----------------------------------------------
 * Purpose        | Transforms each element                 | Returns elements that satisfy a condition
 * Return Value   | Transformed array                       | Filtered array
 * Original Array | Not modified                            | Not modified
 * Callback Return| New value for each element              | true to keep, false to discard
 */

/*******************************
🧠 Use Cases
*******************************/

// 🔄 Transform Elements

// map(): Add 10 to every number in an array
const nums = [1, 2, 3, 4, 5];
const addedTen = nums.map(num => num + 10);
console.log("map - Add 10:", addedTen);  // [11, 12, 13, 14, 15]

// filter(): Keep only even numbers
const evenNums = nums.filter(num => num % 2 === 0);
console.log("filter - Even numbers:", evenNums);  // [2, 4]

// 🧾 Extract Properties

// map(): Get names from an array of objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];
const userNames = users.map(user => user.name);
console.log("map - Names:", userNames);  // ["Alice", "Bob", "Charlie"]

// filter(): Get users above age 18
const adults = users.filter(user => user.age > 18);
console.log("filter - Adults:", adults);
/* Output:
[
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 }
]
*/

/*******************************
📝 Summary
*******************************/
/**
 * - Use map() when you want to *transform* each item in the array.
 * - Use filter() when you want to *exclude/include* items based on a condition.
 * - Both return new arrays and do NOT change the original array.
 No, they do NOT create deep copies.
They create new arrays, but the items inside may still reference the original objects, especially when the array contains objects (not primitives).
 */
