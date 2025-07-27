// Syntax of for-In Loop:-
// for (const key in object) {
   
// }

//1.Write a program to iterate an object with for-In Loop
let myObject = {
    js: "JavaScript",
    java: "Java",
    cpp: "C++",
    py:"Python",
    ruby: "Ruby",
    swift:"Swift by Apple"
}

for(let key in myObject)
{
    // console.log(`${key}----> ${myObject.key}`);  //undefined. because it searches exact key
    // console.log(`${key}----> ${myObject["key"]}`); //undefined. because it searches exact "key"
    // console.log(`${key}----> ${myObject[key]}`); 
    
}

//2.Write a program to iterate an array with for-In Loop
const programming = ["js", "ruby", "python", "java", "cpp"]

for(let index in programming)
{
    // console.log(`${index} th index has value ${programming[index]} value!`);
    
}

//3.Write a program to iterate whole map using for-In loop

let myMap = new Map();
myMap.set("MH","Maharashtra");
myMap.set("UP","Uttar Pradesh");
myMap.set("MP","Madhya Pradesh");
myMap.set("WB","West Bangal");
myMap.set("TN","TamilNadu");

// console.log(myMap);

/*Note:-
1. Map is not iterable with for-in.
2. for-in only works on enumerable object keys, not on Map.
3. Also: let [key, value] in myMap causes a SyntaxError. 
4.Use for-of loop to iterate map*/

// for(let [key,value] in myMap)
// {
//     console.log(`${key} is code for state ${value}`);
// }

