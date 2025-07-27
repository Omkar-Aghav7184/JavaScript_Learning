//Syntax of forEach Loop:-
//  array.forEach(element => {
    
// });
/*Note:
1.forEach() does not return anything (undefined)
2. It is mainly used for performing side-effects like logging or updating DOM
*/

//1.Write a program to iterate an array with for-Each() Loop

const coding = ["js", "ruby", "java", "python", "cpp"]

//using simple function declaration
coding.forEach( function(item) {
    // console.log(item);
})

//using an arrow function
//Here even though arrow function is not return explicitly with{} code runs why?
/*Ans->forEach() doesn’t care whether the function returns something or not — it just runs 
the callback for each item. So console.log(item) inside {} works because it’s a side effect, not a return value. */

// coding.forEach( (item)=> { console.log(item); } )

//Good Practice with implicit return
// coding.forEach( (item)=> (console.log(item) ) )
//concise but good to have ()
// coding.forEach( (item)=> console.log(item)  )

//using function expression

let myFunction= function(item){
    // console.log(item);
}

coding.forEach(myFunction);

// TypeError: undefined is not a function
// This calls the function immediately and passes undefined.
// coding.forEach(myFunction()); //undefined

//Execute forEach loop with all three parameters

//it gives all in string format
// coding.forEach( (value,index,arr) => (console.log(`${index}th index has value ${value} in the array ${arr}`))) 

//it gives exact arr in array format
// coding.forEach( (value,index,arr) => (console.log(index,value,arr))) 


//2.Write a program to iterate an Array of objects with for-Each() Loop
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => (console.log(item.languageFileName) ) )

//forEach() does not return anything

let output = coding.forEach( (item) => {console.log(item); return item;} );

console.log(output); //undefined
