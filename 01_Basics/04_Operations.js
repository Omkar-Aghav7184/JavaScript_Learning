// *************Operations *************8
//1. Arithmetic Operations 
// console.log("The addition of two nums are: "+ (5+2));
// console.log("The Subtraction of two nums are: "+ (5-2));
// console.log("The Multiplication of two nums are: "+ (5*2));
// console.log("The Division of two nums are: "+ (5/2));
// console.log("The Square of num is: "+ (5**2));
// console.log("The Modulo of two nums are: "+ (5%2));

let num=3;
let negNum=-num;
// console.log(negNum); //-3

let str1="Hello";
let str2=" Omkar";
//string concatenation
let str3= str1+str2; //"Hello Omkar"

// console.log(str3);

//Operations of two diff datatypes (Interview-IMP)
// console.log(3 + "5"); //35
// console.log("3" + 5); //35
// console.log("3" + 5 + 7); //357
// console.log("3" + (5 + 7)); //312
// console.log(3 + 5 + "7");  //87
// console.log(3 + (5 + "7")); //357



// console.log(true); //true
// //Bad practices. Code Readability should be high
// console.log( + true); //1
// //console.log(true+); //unexpected token. Not allowed
// console.log(false); //false
// console.log(+""); //0
// console.log( 3 + 4 * 5 % 3);

let num1,num2,num3;
//Inconsitency in code. Code Readbility is poor. Bad Practice
num1=num2=num3= 2+2;
console.log(num1)

let gameCounter=100;
console.log(gameCounter); //100
console.log("Post-Increment: "+ (gameCounter++)); //100
console.log("Pre-Increment: " + (++gameCounter)); //102

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion