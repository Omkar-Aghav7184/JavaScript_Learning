/********************************************************************
// JavaScript Array Methods: map() vs filter()
********************************************************************/

/*-------------------------------
🔍 Overview
-------------------------------

Feature         | map()                        | filter()
----------------|------------------------------|-------------------------------
Purpose         | Transforms each item         | Keeps items that match a condition
Returns         | New transformed array        | New filtered array
Original Array  | ❌ Not modified               | ❌ Not modified
Callback Return | New value per element        | true to keep, false to skip
*/

/*-------------------------------
🧠 Use Cases
-------------------------------*/

// ✅ map(): Add 10 to each number
const nums = [1, 2, 3, 4, 5];
const add10 = nums.map(n => n + 10);
console.log("map - Add 10:", add10); // [11, 12, 13, 14, 15]

// ✅ filter(): Keep even numbers
const evens = nums.filter(n => n % 2 === 0);
console.log("filter - Even:", evens); // [2, 4]

// ✅ map(): Get names from object array
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];
const names = users.map(user => user.name);
console.log("map - Names:", names); // ["Alice", "Bob", "Charlie"]

// ✅ filter(): Keep users age > 18
const adults = users.filter(user => user.age > 18);
console.log("filter - Adults:", adults);
/*
[
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 }
]
*/

/*-------------------------------
📝 Summary
-------------------------------

- Use map() ➤ To change each item (same length array)
- Use filter() ➤ To select items by condition (shorter array)
- Both return new arrays and do NOT change the original
- ⚠️ If array contains objects, map/filter return new arrays,
  but items inside still reference the same original objects (not deep copies)
*/
