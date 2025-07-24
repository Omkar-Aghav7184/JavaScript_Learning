
//const means value of variable should/must not be changed
const accountId=135678911
//let & var variable values may change their values in program
let accountEmail= "omkar@google.com"
var accountPassword= 246810
//we can directly assign value into variable name without use let/var
//bad practice. Never do this
accountCity="Pune"
//here we only define the variable acountState not assigning any value
// By default JS assign undefined as value
let accountState;
console.log("Before cupdating values")
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// accountId=12345678 // not allowed
accountEmail="ota@gmail.com"
accountPassword= 13579
accountCity="Mumbai"

console.log("After cupdating values")
console.log(accountId);
//To print multiple variables at a time use console.table([])
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* 
Prefer not to use var variable because of issue in block scope and functional scope.
Prefer to use let variable which doesn't have any scope issues.
Use let because JS introduce it to overcome this var scope issues*/