// Syntax of for Loop:
//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//-----------------------------------------------------

//1. Write a program to print numbers from 1 to 10

for(let index = 1; index <=10; index++)
{
    // console.log(index);
}

//2. Write a program with if condition in loop

for(let index=0; index<=10; index++)
{
    if(index ==  5){
        console.log(`${index} is magical number & my favorite number also!`);
    }
    else{
        // console.log(index);
    }
    // console.log(index); //everytime runs
}

//3.Write a program to print table of 1 to 10 numbers (nested loops)

for(let i=1; i<=10; i++)
{
    // console.log(`Table of number ${i} is: `);
    for(let j=1; j<=10; j++)
    {
        // let mul= i*j;
        // console.log(`${i} * ${j} = ${(i*j)}`);
        // console.log(i+" * "+j+ " = " + (i*j));
        
    }
}

//4. Write a program to iterate array elements

let daysOfWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

//Here if you are accessinf index==arr.length .Exception is not coming 
//It shows undefind but it is bad practice to access element which is not in an array

for(let index=0; index<daysOfWeek.length ;index++)
{
    // console.log(index+"th element in the array:- "+ daysOfWeek[index]);
}

//5. Write a program with break statement

for(let index=0; index<=10; index++)
{
    if(index === 7){
        console.log(`My Favourite number is: ${index} & ${index} Wonders of World!`);
        break;  // Exit loop at 7
    }
    console.log(index);
}
//6. Write a program with continue statement

for(let index=0; index<=10; index++)
{
    if(index === 7){
        console.log(`My Favourite number is: ${index} & ${index} Wonders of World!`);
        continue; //Skip rest of code in this iteration
    }
    console.log(index);
}