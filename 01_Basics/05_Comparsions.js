//**************Relational Operators********* */

// console.log( 3 > 5); //false
// console.log( 3 < 5); // true
// console.log( 3 >= 5); //false
// console.log( 3 <= 5); //true
// console.log( 3 != 5); //true
// console.log( 3 == 5); //false
// console.log( 3 === 5); //false

//It converts strin into number then compare (Bad Practices)
// console.log( "2" > 3); //false
// console.log( "2" < 3); //true
// console.log( "2" >= 3); //false
// console.log( "2" <= 3); //true
// console.log( "abc2" <= 3); //false
// console.log( "2abc" >= 3); //false


/*Note:- When using relational operators (<, >, <=, >=), JavaScript converts null to a number(0). */
// null is converted to a number → becomes 0. (Bad Practices)
// console.log(null > 0); //false
// console.log(null < 0); //false
// console.log(null == 0); //false
// // === checks for both type and value (strict equality).
// console.log(null === 0); //false
// console.log(null >= 0); //true
// console.log(null <= 0); //true

//Undefined(Bad Practices)
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false
// console.log(undefined == 0); //false
// console.log(undefined === 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined <= 0); //false
// // Special rule: null only loosely equals undefined, not 0
// console.log(undefined == null); //true
// console.log(undefined === null); //false

// === operator
console.log( "2" === 2); //false
console.log( "2" == 2); //true (Here string converts into number)

/*The Reason is that an equality check == & comparsions >,<,>=,<= work differently.
Comparisons convert null to a number ,treating it as 0.
That's why (3) null>=0 is true & null>0 is false*/
