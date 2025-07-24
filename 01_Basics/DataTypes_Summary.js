//On the basis of how the data is stored and how the data is accessed from memory. DataTypes has 2 types
//1. Primitive 2. Reference

//1.Primitve: (Call by value)--> Not original value but copy of value
// 1)Number 2)String 3)Boolean 4)Null 5)Undefined 6)Symbol 7)BigInt

let num= 71845;
let scoreValue=100.3
let name="Omkar";
let isLoggedIn=true;
let outsideTemp=null;
let state;
let Id=Symbol('123');
let anotherId=Symbol('123');
let BigNumber=234567898765432345678n;

console.log("\n Printing values of primitive datatypes");
console.table([num,name,isLoggedIn,outsideTemp,state,Id,anotherId,BigNumber]);
console.log("\n Printing Types of primitive datatypes");
console.log(`The Datatype of num ${typeof(num)}`);
console.log(`The Datatype of name ${typeof(name)}`);
console.log(`The Datatype of isLoggedIn ${typeof(isLoggedIn)}`);
console.log(`The Datatype of outSideTemp ${typeof(outsideTemp)}`);
console.log(`The Datatype of state ${typeof(state)}`);
console.log(`The Datatype of Id ${typeof(Id)}`);
console.log(`The Datatype of anotherId ${typeof(anotherId)}`);
console.log(`The Datatype of BigNumber ${typeof(BigNumber)}`);
console.log(Id === anotherId); //false

// 2.Reference(Non-Primitive): Call by Reference
//1)Arrays 2)Objects 3)Functions

let captain=["MS Dhoni","Kapil Dev","Virat Kohli","Rohit Sharma"];

let myObj={
    name:"Omkar",
    age:22
}

let sum= function sumOfTwoNumbers(num,scoreValue){
    return (num + scoreValue);
}
console.log("\nThe Type of Arrays datatype: "+ (typeof(captain))); //object
console.log("\nThe Type of Object datatype: "+ (typeof(myObj))); //object
console.log("\nThe Type of Functions datatype: "+ (typeof(sum))); //function(object function)

// https://262.ecma-international.org/5.1/#sec-11.4.3