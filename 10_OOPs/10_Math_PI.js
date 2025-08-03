//'use strict';
let descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
/*
Output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


console.log("Before: ", Math.PI);
Math.PI = 5; // ❌ Will silently fail in non-strict mode because 'writable: false'
console.log("After: ", Math.PI); 
// Output remains: 3.141592653589793

// -------------------------------------------------------
//In-built class

let tea = {
    name: "ginger",
    price: 50,
    isAvailable: true,

    orderTea: function(){
        console.log("Code fatega!");
    }
}

console.log("\nName Descriptor is in Tea Object!");
console.log(Object.getOwnPropertyDescriptor(tea, "name"));

//single property is changed
Object.defineProperty(tea, "name",{
    writable:false,
    enumerable: false
})

console.log("\nName Descriptor is in Tea Object!");

console.log(Object.getOwnPropertyDescriptor(tea, "name"));

console.log("\nAccessing Tea Object!\n");

for(const [key,value] of Object.entries(tea)){
    if(typeof value !== "function")
    {
        console.log(`${key}----> ${value}`);
    }
}

//Correct way to define multiple property descriptors
Object.defineProperties(tea, {
    name:{
        writable:false,
        enumerable:false
    },
    price:{
        writable:false, // ❌ Now can't update
        enumerable:true
    },
    isAvailable:{
        writable:true, // ✅ Can update
        enumerable: true
    },
    orderTea:
    {
        writable:true, // ✅ Can reassign function
        enumerable:true
    }
})

tea.name = "Coffee"; // ❌ Won’t work (writable: false, enumerable: false)
tea.price = 251; // ❌ Won’t work (writable: false)
tea.isAvailable =false; // ✅ Will update
tea.orderTea = function(){
    console.log("Updated Order Coffee")
} // ✅ Will update


console.log("\nAccessing Tea Object!\n");

for(const [key,value] of Object.entries(tea)){

    console.log(`${key}----> ${value}`);
}

console.log("\n All Property Descriptors");

console.log(Object.getOwnPropertyDescriptors(tea));



