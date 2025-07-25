//There are two ways to create an Object
//1. using constructor new Object()---> Singleton
//2.Using literals --->non-singleton

let mySymbol= Symbol("13579");

//Object creation with Using literal
let myObj= {
    name:"Omkar",
    "full name":"Omkar Aghav",
    email:"omkar@google.com",
    [mySymbol]: "Symbolic Life",
    age:23,
    isLoggedIn:true,
    city:"Pune",
    lastLoginDays: ["monday","tuesday","wednesday"]
}
// console.log(myObj);
//To access an object there are 2 ways
//1. using dot operator
//2. using ["key-name"]-->Good Practice
// console.log("Email: ",myObj.email);
// console.log("LastLoginDays: ",myObj.lastoginDays);
// console.log("Full name is : ",myObj["full name"]);
// console.log("Symbol is: ", myObj.mySymbol); //undefined
// console.log("Symbol is: ", myObj[mySymbol]); //Symbolic Life

//to update any value with dot operator
// myObj.email= "omkar@chatgpt.com";
// console.log("Email: ",myObj["email"]);
// // freeze myObj to update anything
// Object.freeze(myObj);
// myObj.email="omkar@microsoft.com";
// console.log("Email: ", myObj["email"]);

myObj.greetingOne = function(){
    console.log("Hello MyObj User of username  with greetingOne");
} 
myObj.greetingTwo = function(){
    console.log(`Hello MyObj User of username ${this["full name"]} with greetingTwo`); 
}
//we call function in console.log()
console.log(myObj.greetingOne());
console.log(myObj.greetingTwo());

/*Output:
Hello MyObj User of username  with greetingOne
undefined // because the function doesn’t return anything explicitly
Hello MyObj User of username  Omkar Aghav with greetingTwo
undefined /because the function doesn’t return anything explicitly)
 */




