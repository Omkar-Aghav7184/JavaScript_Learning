let myUser={
    username: "omkar",
    price: 499,

    welcomeMessage: function(username)
    {
        // console.log(this);
        return `User ${this.username} has price ${this.price}`
    }
}

// console.log(myUser.welcomeMessage); //[Function: welcomeMessage]
// console.log(myUser.welcomeMessage());
myUser.username= "sam";
// console.log(myUser.welcomeMessage());
// console.log(this); //{} because we are in node environment
// console.log(this); //Window object because we are in browser


//function declaration
//In function this not working  
// function chai(){
//     let name="chai"
    //    console.log(this);
//     console.log("Inside Function Declaration ",this.name);
// }
// chai();

//function expression

let coffee=function(){
    let name="coffee"
    // console.log(this);
    console.log("Inside Function Expression ",this.name);
}
coffee();

//Arrow function
const chai = () =>{
    let name="chai"
    // console.log(this) //{}
    console.log("Inside Arrow function" ,this.name);
} 
chai()

/****** Arrow Functions *********** */

// function addTwonum(num1,num2){
//     return num1+num2;
// }

//Arrow function

// let addTwonum= (num1,num2) =>{
//     return num1+num2;
// } //explicit return

// let addTwonum = (num1,num2) => num1+num2; //it is working but good to have()

let addTwonum= (num1,num2) => (num1+num2); //implicit return //good pratice

// let addTwonum= (num1,num2) => ({username:"omkar aghav"}) //

console.log("Sum of two nums is: ", addTwonum(3,5));

// Arrow function with object destructuring as parameter
let myUserArrowFun = ({ userName }) => {
    console.log("User name is:", userName);
};

myUserArrowFun({ userName: "omkar aghav" });

//const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
