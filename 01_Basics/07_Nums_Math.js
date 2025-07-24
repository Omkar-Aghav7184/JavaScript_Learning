let score=100;
// console.log(score);

//creating a Number object here (not just a primitive).
//  It's wrapped in an object, so you can call number methods on it.
let balance= new Number(1000);
// console.log(balance);
// console.log(`toString(): ${balance.toString()}`); //Converts number to string
// console.log(`toExponential(): ${balance.toExponential()}`); //Scientific notation
// console.log(`toFixed(): ${balance.toFixed(2)}`); //Fixed 2 decimal places

// let otherNumber= 12346.789
// console.log(`toPrecision(): ${otherNumber.toPrecision(6)}`); //Formats to 6 total digits
// console.log(`valueOf(): ${otherNumber.valueOf()}`); //Returns primitive value

// let price=100000000;
// console.log(`toLocaleString(): ${price.toLocaleString("en-IN")}`); //Localized string format (e.g., Indian style)

/*Output:- Nums
100
[Number: 1000]
toString(): 1000
toExponential(): 1e+3
toFixed(): 1000.00
toPrecision(): 12346.8
valueOf(): 12346.789
toLocaleString(): 10,00,00,000 */

/**********Maths************* */
console.log(Math);

// console.log(`Math.abs(): ${Math.abs(-11)}`);
// console.log(`Math.abs(): ${Math.round(4.7)}`);
// console.log(`Math.abs(): ${Math.ceil(4.2)}`);
// console.log(`Math.abs(): ${Math.floor(4.9)}`);
// console.log(`Math.abs(): ${Math.pow(2,5)}`);
// console.log(`Math.max(): ${Math.max(3,5,7,9,14,5)}`);
// console.log(`Math.min(): ${Math.min(3,5,7,9,14,5)}`);


// Always returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());
console.log((Math.random()*10) +1);
// This correctly gives a random integer between 1 and 10
//I want numbs from 1 to 10
console.log((Math.floor(Math.random()*10)) +1);


//I want numbs from 11 to 20 
//formula
let max=20;
let min=10;
// This gives a random integer between min and max inclusive.
console.log((Math.floor(Math.random()*(max-min+1)))+min);



