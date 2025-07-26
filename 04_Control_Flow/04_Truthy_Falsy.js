//Truthy & falsy
let userCheck = function(){} ;

if(userCheck){
    console.log("User is eligible to buy products!");
}
else{
    console.log("User is not eligible to buy products!");
}

//Falsy Values
// false, 0 ,-0, BigInt 0n, "", null, undefined ,NaN

//Truthy Values
// true, "false", "0"," ",[], {}, function(){} , 42, -8

/***Empty Array Check */

let myArr=[];

if(myArr.length === 0){
    console.log("Given Array is Empty!");
}
else{
    console.log("Given Array is Not Empty!");
}

/*** Empty Object check */

let myObj={}

//Object.keys(myObj)---> gives array of keys in  an object
if(Object.keys(myObj).length === 0)
{
    console.log("Given Object is Empty!");
}
else{
    console.log("Given Object is not Empty!");
}

/**nullish coalescing operator  ?? */
/* 1. more useful when we check DB outputs/connection
2. The ?? operator returns the first defined (not null or undefined) value:
3. ?? is not the same as ||. The || operator returns the first truthy value, while ?? skips only null and undefined
 */

// let num1; //undefined
// num1= 5 ?? 10; //5
// num1= null ?? 10; //10
// num1= undefined ?? 15; //15
num1= null ?? 10 ?? 15; //10

console.log(num1);

let value1 = 0 || 100; // 0-->falsy ,100 is first truthy value

console.log(value1); //100

/**Ternary Operator ? */
/*Problem Statement: A user enters their age on a form. Write a program using the ternary operator 
to check if the user is eligible to vote (i.e., age ≥ 18). 
If eligible, print "Eligible to vote", otherwise print "Not eligible to vote". */

// condition ? true : false 

let userAge= 20;

let message= userAge >= 18 ? "User Eligible to vote " : "User is not eligible to vote";

console.log(message); 


