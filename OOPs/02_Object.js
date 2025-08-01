
function multiplyBy5(number)
{
    return 5*number;
}

// In JavaScript, functions are also objects, so you can add properties to them
multiplyBy5.power = 2;
// This doesn't affect the function behavior — it just adds metadata to it.

// console.log(multiplyBy5(7)); //35
// console.log(multiplyBy5.power); //2
// All functions in JavaScript automatically get a prototype property,
// which is used when the function is used as a constructor (with new).
// Initially, it's just an empty object:
// console.log(multiplyBy5.prototype); //{}


function createItem(itemName,price){
    this.itemName = itemName;
    this.price =price;
}

createItem.prototype.increment = function(){
    this.price++;
}

createItem.prototype.printMe = function(){
    console.log(`Price of item ${this.itemName} is: ${this.price}`);   
}

let itemOne = new createItem("Chai",25);
let itemTwo =  new createItem("Black Coffee",150);

itemOne.increment();
itemOne.printMe();
itemTwo.increment();
itemTwo.printMe();

/*Output:
Price of item Chai is: 26
Price of item Black Coffee is: 151
 */


/*Notes:
Step-1: createItem Function
A constructor function to create item objects.

Step-2: let itemOne = new createItem("Chai", 25);
Uses new keyword.
Creates a new object.
this refers to the new object.
itemOne has access to:
itemName: "Chai"
price: 25
Methods from createItem.prototype

Step-3: let itemTwo = createItem("Black Coffee", 150);
Missing new → Normal function call
this refers to global object (not a new object).
itemTwo becomes undefined.
itemName and price are set on window (or global in Node).

Step-4: itemTwo.printMe();
Error: itemTwo is undefined.
Cannot call method on undefined.
❌ TypeError: Cannot read properties of undefined (reading 'printMe')

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/