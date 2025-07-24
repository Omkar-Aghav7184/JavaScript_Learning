"use strict"; //treat all JS code as Newer JS Version
// We are using node not a browser
// alert(3+3) //alert is not defined

//Code Readability should be high
//Bad Practice. Never follow this
console.log(3
    +
    3)
// console.log("Omkar")

//--------Datatypes-----
let name="Omkar"
let age=23
let isLoggedIn= true
let state;
console.log("\nPrinting Values")
console.log(`The Value of name is: ${name}`)
console.log(`The Value of age is: ${age}`)
console.log(`The Value of isLoggedIn is : ${isLoggedIn}`);
console.log(`The Value of state is : ${state}`)

//Interview questions
console.log("\nPrinting Type of Variables")
console.log(`The type of var name is: ${typeof name}`); 
console.log(`The type of var age is: ${typeof age}`);
console.log(`The type of var isLoggedIn is: ${typeof isLoggedIn}`)
console.log(`The type of var state is: ${typeof state}`)
console.log(`The type of Datatype Symbol is: ${typeof Symbol}`)
console.log(`The type of Datatype null is: ${typeof null}`)
console.log(`The type of Datatype BigInt is: ${typeof BigInt}`)


/*Primitive Datatypes:
1) Number: Range 2^53
2) String: ""
3) Boolean: true/false
4) null: Standalone Value
5) Undefined: A special Datatype
6) Symbol: It is used to find unique components(in ReactJS)
7)BigInt: Large Number */
/*Non-Primitive/ User-Defined Datatypes
1)Object 2)Arrays 3)functions */

/*Output:
@Omkar-Aghav7184 ➜ /workspaces/JavaScript_Learning/01_Basics/02_Datatypes (main) $ node Datatypes.js
6

Printing Values
The Value of name is: Omkar
The Value of age is: 23
The Value of isLoggedIn is : true
The Value of state is : undefined

Printing Type of Variables
The type of var name is: string
The type of var age is: number
The type of var isLoggedIn is: boolean
The type of var state is: undefined
The type of Datatype Symbol is: function
The type of Datatype null is: object
The type of Datatype BigInt is: function */