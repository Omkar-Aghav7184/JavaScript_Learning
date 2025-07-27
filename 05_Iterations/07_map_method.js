//map()
/**Note: 
 *1. When using {} in arrow functions, always use return.
 2. When using () in arrow functions, the return is implicit.
 3.No, they do NOT create deep copies.
They create new arrays, but the items inside may still reference the original objects, 
especially when the array contains objects (not primitives). */

//1.Write a program to modified an given array with adding +10 in each element of an array

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let modifiedArray = myNumbers.map( (num)=> { num + 10 } ); //return missing
// console.log(modifiedArray); //[undefined, undefined]

modifiedArray = myNumbers.map( (num)=> { return num + 10 } );
console.log(modifiedArray); 
console.log(myNumbers);


modifiedArray = myNumbers.map( (num)=> ( num + 10 ) );
// console.log(modifiedArray);


//2.Write a program first do multiply by 10 into each element, then add +1 ,filter out element is greater than 40.
//1. 1st map() output is input for 2nd map() and then output of 2nd map is input of filter()
let updatedArray = myNumbers
                   .map( (num)=> (num*10))
                   .map( (num)=> (num+1) )
                   .filter( (num)=> (num>=40) )

console.log(updatedArray);


/**
 * This chaining logic:
 * myNumbers.map().map().filter()
 * 
 * ...is very common in real-world scenarios, like:

API data transformation

Form validation pipelines

UI rendering logic
 */