
//1.Find out sum of all elements in an array

let numbers = [ 1, 2, 3, 4, 5];

//using function declaration
let sumOfArray = numbers.reduce( function( acc, currVal){
    // console.log(`acc ${acc} and currVal ${currVal}`);
    return acc + currVal;
}, 0)
// console.log(`Sum of Array is:- ${sumOfArray}`);

//using arrow function
sumOfArray = numbers.reduce( (acc,currVal) => (acc + currVal ) )
// console.log(`Sum of Array is:- ${sumOfArray}`);

/**Shopping-Cart Example */
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//1. Find out user's final Pay amount of all selected courses

let totalAmountToPay = shoppingCart.reduce( (acc,currVal)=> ( acc+ currVal.price ), 0) 

console.log(`User has to pay Total Amount of all selected courses is:- ${totalAmountToPay}Rs`);

