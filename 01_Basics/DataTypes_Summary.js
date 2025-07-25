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

// console.log("\n Printing values of primitive datatypes");
// console.table([num,name,isLoggedIn,outsideTemp,state,Id,anotherId,BigNumber]);
// console.log("\n Printing Types of primitive datatypes");
// console.log(`The Datatype of num ${typeof(num)}`); //number
// console.log(`The Datatype of name ${typeof(name)}`); //string
// console.log(`The Datatype of isLoggedIn ${typeof(isLoggedIn)}`); //boolean
// console.log(`The Datatype of outSideTemp ${typeof(outsideTemp)}`); //object
// console.log(`The Datatype of state ${typeof(state)}`); //undefined
// console.log(`The Datatype of Id ${typeof(Id)}`); //symbol
// console.log(`The Datatype of anotherId ${typeof(anotherId)}`); //symbol
// console.log(`The Datatype of BigNumber ${typeof(BigNumber)}`); //bigint
// console.log(Id === anotherId); //false

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
// console.log("\nThe Type of Arrays datatype: "+ (typeof(captain))); //object
// console.log("\nThe Type of Object datatype: "+ (typeof(myObj))); //object
// console.log("\nThe Type of Functions datatype: "+ (typeof(sum))); //function(object function)

// https://262.ecma-international.org/5.1/#sec-11.4.3

/************Memory Information**************/
//1. Stack--->All Primitive DataTypes---> Call By Value---> Copy of var not original value
//1. Heap-->All Non-Primitive DataTypes---> Call By Reference---> Changes in Original value not copy

let myEmail1="omkar.google@gmail.com";
let myEmail2=myEmail1;
console.log(`The value of myEmail1 is: ${myEmail1}`);
console.log(`The value of myEmail2 is: ${myEmail2}`);
myEmail2="ota.google@gmail.com";
console.log(`The value of myEmail1 is: ${myEmail1}`); //not change because it gives copy not original value
console.log(`The value of myEmail2 is: ${myEmail2}`);

let userOne={
    email:"user1@gmail.com",
    age:22
}
console.log("\n")
let userTwo=userOne;
console.log("The value of userOne is: " + JSON.stringify(userOne) );
console.log("The value of userTwo is: " + JSON.stringify(userTwo));
userTwo.email="user2@google.com";
userTwo.age=27;
console.log(`The value of userOne ${JSON.stringify(userOne)}`); //Changes in original value 
console.log(`The value of userTwo ${JSON.stringify(userTwo)}`);

