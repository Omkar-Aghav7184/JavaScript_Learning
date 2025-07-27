// Syntax of while loop
// while (condition) {
    
// }

//1. Write a program to print only even numbers from 0 to 100.

let num=0;
// console.log("Even numbers:- ");
while(num <=100){
    // console.log(num);
    num= num +2;
}

//Alternative way

let number=0;

while(number <=10)
{
    if((number %2) === 0)
    {
        // console.log(number);
    }
    number= number +1;
}

//2. Write a program to iterate an array elements

let fruits=["apple", "mango","grapes","banana","guava","strawberry","watermelon"];
// console.log(`Array length is:- ${fruits.length}`);
let iterator=0;
while(iterator< fruits.length)
{
    // console.log(`${iterator}th index has value in array:- ${fruits[iterator]}`);
    iterator= iterator + 1;
}

/*****do-While() ********/
// Syntax: 
// do {
    
// } while (condition);

//1.Write a program to print 1 to 10 with do-while loop

let val = 1;
console.log("Printing numbers from 1 to 10 using do-while:");
/*Value of val is:- 11. executes at least 1 time because it first executes then check condition */

do{
    // console.log(`Value of val is:- ${val}`);
    val++;
}while(val<=10);

//2.Write a program to iterate an array elements

let fruitsArray=["apple", "mango","grapes","banana","guava","strawberry","watermelon"];
console.log(`Array length is:- ${fruitsArray.length}`);

let index=0;


do{
    console.log(`${index}th index has value in the array:- ${fruitsArray[index]}`);
    index++;
} while(index< fruitsArray.length);
