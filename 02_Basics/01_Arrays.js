/**1.JavaScript arrays are resizable and can contain a mix of different data types.
 * 2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings 
 * as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
 * 3.JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, 
 * and so on — and the last element is at the value of the array's length property minus 1.
 * 4.JavaScript array-copy operations create shallow copies. 
 * (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
 * 
 * Shallo Copies: A shallow copy of an object is a copy whose properties share the same references
 *  (point to the same underlying values) as those of the source object from which the copy was made. 
 * 
 * Deep Copies:A deep copy of an object is a copy whose properties do not share the same references 
 * (point to the same underlying values) as those of the source object from which the copy was made.
 */

let oddNumbs=[1,3,5,7,9,11,13];

let newArray= new Array(2,4,6,8,10);
// console.log(newArray);

// console.log(oddNumbs);

let captains=["MS Dhoni","Virat Kohli","Rohit Sharma","Kapil Dev","Sourav Ganguly"]
// console.log(captains);

// console.log(`Length of Array is: ${oddNumbs.length}`);

// console.log(oddNumbs[2]); //5
// console.log(captains[0]); //MS Dhoni

///Array Methods
//1. Push():- Adds one or more elements to the end of an array.
// oddNumbs.push(43,47,49);
// console.log(oddNumbs);
//2.Pop():- Removes the last element from an array.
// oddNumbs.pop();
// console.log(oddNumbs);

//3.unshift():- Adds one or more elements to the start of an array.
// oddNumbs.unshift(71);
// console.log(oddNumbs);
// 4.Shift():- Removes the first element.
// oddNumbs.shift();
// console.log(oddNumbs);

//5.includes(value):- Checks if an array contains a specific element.
// console.log(captains.includes("Kapil Dev")); //true
//6. indexOf(value)
//Returns the index of the first occurrence of a value.
//Returns -1 if not found.
// console.log(oddNumbs.indexOf(7)); //3
// console.log(oddNumbs.indexOf(57)); //-1

//slice vs spilce(Interview Question)
//here 1 is inclusive but 5 is exclusive
/*slice(start, end)
Returns a shallow copy of a part of the array.

Does not modify the original array. */

// let slicedArray= oddNumbs.slice(1,5);
// console.log("Original Array is: ",oddNumbs);
// console.log("Sliced Array is: ",slicedArray);

// Converts all elements of the array into a single string, separated by commas (default separator).
//Does NOT modify the original array.
let newArr= oddNumbs.join();
console.log(newArr);
//1,3,5,7,9,11,13

/*splice(start, deleteCount)
Modifies the original array by removing/replacing/adding elements.
Returns the deleted elements. */
// let splicedArray= oddNumbs.splice(1,5)
// console.log("Original Array is: ",oddNumbs);
// console.log("Spliced Array is: ",splicedArray);

/**Output:
 Original Array is:  [
  1,  3,  5, 7,
  9, 11, 13
]
Sliced Array is:  [ 3, 5, 7, 9 ]
Original Array is:  [ 1, 13 ]
Spliced Array is:  [ 3, 5, 7, 9 ]
 */




