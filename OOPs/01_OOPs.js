//create user object

const user = {
    username: "Omkar Aghav",
    age:23,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log("Got user details from the database");
        console.log("User: ",this); //this user object
        console.log(`Username is:${this.username} `);
        
    }
}
//in node.js env this -->{} , but in bowser this--->window object
// console.log(this); //{}
// console.log(user);
// console.log(user.username);
/*This demonstrates that const only prevents reassignment of the 
user variable — not the properties of the object. */
user.username = "Omky Aghav"
// console.log(user.getUserDetails());


function User(username,age,isLoggedIn){

    this.username =username;
    this.age=age;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`${this instanceof User} `)
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

// const userOne = User("Omkar",23,true);
// const userTwo = User("Pratik",22,false);
// console.log(userOne.constructor); //[Function: Object]

const userOne = new User("Omkar",23,true);
const userTwo = new User("Pratik",22,false);

console.log(userOne);
console.log(userTwo);

userOne.greeting();
userTwo.greeting();

console.log(userOne.constructor); //[Function: User]
console.log(userTwo.constructor); //[Function: User]

/*Short Notes & Common mistakes 

 1. this in Constructor
Inside User(), this refers to the new object being created.

You assign values to the object using this.username, etc.

🔸 2. What new Keyword Does
js
Copy
Edit
const userOne = new User(...);
Using new:

Creates an empty object {}.

Sets this to point to that object.

Adds properties/methods to this.

Returns this (new object) automatically.

🔸 3. Without new (Incorrect Usage)
js
Copy
Edit
const userOne = User("Omkar", 23, true);
this refers to the global object (in browser: window; in Node.js: global).

Properties like username get attached to global object.

userOne will be undefined.

userOne.constructor will show [Function: Object].

4.This is not necessary unless you're overriding with another object. 
JavaScript automatically returns this when using new

*/