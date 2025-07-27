// Syntax of for-of loop:
// for (const element of object) {
    
// }

//Array may be of ["","",""], [{},{},{}]

//1.Write a program to iterate all elements of an array uing for-of loop

const arr = [1, 2, 3, 4, 5,6,7,8,9,10];

for(const nums of arr)
{
    // console.log(nums);
}

//2.Write a program to iterate whole string using for-of loop

const myString = "Hello World!";

for(const char of myString)
{
    if(char === " ") continue;
    // console.log(char);
}

//3.Write a program to iterate whole map using for-of loop

let myMap = new Map();
myMap.set("MH","Maharashtra");
myMap.set("UP","Uttar Pradesh");
myMap.set("MP","Madhya Pradesh");
myMap.set("WB","West Bangal");
myMap.set("TN","TamilNadu");

console.log(myMap);

/*Perfect destructuring of [key, value].
✅ Demonstrates that Map is iterable (unlike plain objects).*/

for(let [key,value] of myMap)
{
    // console.log(`${key} is code for state ${value}`);
}

//4. Write a program to iterate whole Object using for-of loop 

let myObj = { firstName: "Omkar" , lastName:"Aghav", age:23, isLoggedIn:true};

//TypeError: myObj is not iterable

// for(let [key,value] of myObj)
// {
//     // console.log(key); 
//     // console.log(`${key} is code for state ${value}`);
// }

for(let [key,value] of Object.entries(myObj)){
    console.log(`${key}---> ${value}`);
    
}
