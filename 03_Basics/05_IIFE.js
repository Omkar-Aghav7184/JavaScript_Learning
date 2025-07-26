//Immediately Invoked Function Expressions(IIFE)
/*Main Reason to use IIFE:
1. Avoid polluting global scope (Encapsulation)
2.Execute code immediately
3.*/

//Function Declaration
(function myFun(){
    //named IIFE
    console.log("DB connected!");
})();


/*You cannot wrap a let declaration in parentheses like that.

JavaScript expects an expression inside (),but let myDBConnection = ... is a declaration, 
not an expression — hence SyntaxError. */

//Arrow function with IIFE
/**You're assigning an arrow function to myDBConnection in global scope.
This IIFE runs immediately, but also pollutes global scope with myDBConnection. */

//(function declaration)(function call/invoked/execution)
(myDBConnection=() => {
    console.log(`DB connected with proper connections!`); 
})(); //semicolon is imp to excute further

//Concise Arrow function with IIFE 
(() => {
    console.log(`DB connected with proper connections!`); 
})();

//Concise Arrow function with parameter with IIFE concept
( ( name )  => {
    //unnamed IIFE/Simple IIFE
    console.log(`User ${name} DB connected with proper connections!`); 
})("Omkar")
