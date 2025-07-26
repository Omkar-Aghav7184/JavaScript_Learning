// Because var is not block-scoped, only function-scoped.
var numVar=300;
//block scope
if(true)
{
    const accountId= 1245678;
    let numLet= 21;
    //block scope can use Global variable like numVar
    console.log("Inner Numvar is: ",numVar);
    numVar= 45;
    console.log("Inner Numvar is: ",numVar);
}

// console.log(accountId); //ReferenceError:accountId is not defines because of scope

// console.log(numLet); //ReferenceError:numLet is not defines because of scope

console.log("Outside Numvar is: ",numVar); //45 here is problem even though var is in block scope .we can access outside it's block-scope

/*Even though numVar was modified inside a block, it's declared with `var`,
which is function-scoped (not block-scoped), so it remains accessible outside the block.
 */
