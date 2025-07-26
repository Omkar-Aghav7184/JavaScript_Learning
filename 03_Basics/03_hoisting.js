//functional scope
//Nested function
function fun1()
{
    let username= "Omkar Aghav";

    function fun2(){
        let webiste="youtube";
        console.log("Inside in fun2()",username);
    }
    // console.log(webiste); //ReferenceError:webiste is not defined
    fun2();
}
fun1();
/*But you cannot call fun2() outside fun1(), because it's not in the global scope. */
// fun2(); ReferenceError: fun2() is not defined
console.log("\n");

//Block Scope
//Nested if-else

if(true)
{
    let username="omkar";

    if(username==="omkar")
    {
        let website="youtube";
        console.log("Inside 2nd if ", username);
    }
    // console.log("Outside 2nd if ", webiste); //ReferenceError:  webiste is not defined
}
// console.log("Outside 1st if ", username);// ReferenceError: username is not defined

/*Note:- 
Global Scope
└── if (true) // Block 1
    ├── let username = "omkar aghav";
    └── if (true) // Block 2 (nested)
        └── let website = "youtube";

Block 2 can access username 

Block 1 cannot access website 

Global scope cannot access username or website   
 */

/******Interesting- Function-Hoisting */

console.log(myfun1(5)); //6 ////Works due to hoisting

//function declaration
function myfun1(num){
    console.log("Inside myfun1()");
    return num+1; 
}

// console.log(myfun2(7)); //Cannot access 'myfun2' before initialization

//function expression with 'let'
let myfun2= function(num){ 
    console.log("Inside myfun2()");
    return num+2;
}
console.log(myfun2(7));  //9 //Works because it's called after initialization


//function expression with 'var'
// console.log(myfun3(11)); //TypeError: myfun3 is not a function
var myfun3= function(num){ 
    console.log("Inside myfun2()");
    return num+2;
}

/*
Note:
- Function declarations are **hoisted entirely**, including their body.
  You can call them before they appear in the code.

- Function expressions (especially with `let` or `const`) are **not hoisted**.
  They exist in the "Temporal Dead Zone" until the line where they are defined.
  
-var` is hoisted, but only the declaration (as `undefined`).
💡 Best Practice:
Always define function expressions before using them to avoid runtime errors.
*/

