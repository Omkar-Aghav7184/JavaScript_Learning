let marvel_heros = ["thor", "Ironman", "spiderman"]
let dc_heros = ["superman", "flash", "batman"]

//1.push():- Adds an element at the end of an array.
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][2]);

//2.concat():- Merges two or more arrays.
//Returns a new array (does not change original arrays).
// let concatenatedArray= marvel_heros.concat(dc_heros);
// console.log(concatenatedArray);

//3.Spread Operator ...
//Expands elements of an array.
//Used to merge arrays like concat(), but more flexible.
// let spreadArray= [...marvel_heros, ...dc_heros]
// console.log(spreadArray);

/*4.flat(depth)
Flattens nested arrays into a single-level array.
Use Infinity to flatten deeply nested arrays
 */
// let another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// let flattenedArray= another_array.flat(Infinity);
// console.log(flattenedArray);

/* Array.isArray(value): Returns true if the value is an array, else false. */
console.log(Array.isArray("Omkar"));
/**Array.from(value):- Converts iterables (like strings) or array-like objects to arrays. */
console.log(Array.from("Omkar"));
console.log(Array.from({name:"Omkar", age:23, isLoggedIn:true})); //(non-iterable → empty array)

/*Output:false
[ 'O', 'm', 'k', 'a', 'r' ]
[] */

let score1=100;
let score2=200;
let score3=300;
/**Array.of(...elements):- Creates a new array from a set of values. */
let gamePlay= Array.of(score1,score2,score3);
console.log(gamePlay);
//[ 100, 200, 300 ]