/********************************************************************
// JavaScript Array Methods: map(), filter(), reduce()
********************************************************************/

/*-------------------------------
🔍 Overview Comparison
-------------------------------

Method     | Purpose                        | Returns             | Mutates Original? | Use-Cases
-----------|--------------------------------|----------------------|-------------------|----------------------------
.map()     | Transform each item            | New array            | ❌               | Modify values, format data
.filter()  | Keep items that meet condition | New filtered array   | ❌               | Search, filter
.reduce()  | Combine into one value         | Single value         | ❌               | Sum, average, grouping
*/

/*-------------------------------
🧠 Examples
-------------------------------*/

// .map() - Example
const nums = [1, 2, 3];
const squared = nums.map(n => n * n);
console.log("map:", squared); // [1, 4, 9]

// .filter() - Example
const even = nums.filter(n => n % 2 === 0);
console.log("filter:", even); // [2]

// .reduce() - Example
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log("reduce:", sum); // 6

/*-------------------------------
📝 Summary
-------------------------------

- map() → transforms each element (returns new array)
- filter() → selects elements based on condition
- reduce() → reduces array to a single value
- All are non-mutating (original array stays the same)

*/
