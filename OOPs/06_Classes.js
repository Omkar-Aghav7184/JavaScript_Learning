//ES6 class-based syntax
// create a class

class UserClass{

    constructor(username, email,password){
        this.username= username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `Password id is: #${btoa(this.password)}@abc`;
    }

    changeUsername(){
        return `Username is: ${this.username.toUpperCase()}`;
    }
}

let user1 = new UserClass ("Omkar","omkar@google.com","omkar");
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUsername());
console.log(Object.getPrototypeOf(UserClass));  //[Function (anonymous)] Object


//function as object(Constructor function)

function User(username,email,password){

    this.username=username;
    this.email=email;
    this.password=password;
    // console.log(this);
    // return this;
}

User.prototype.encryptPassword = function(){
    return `Password id is: #${btoa(this.password)}@abc`;
}

User.prototype.changeUsername = function(){
     return `Username is: ${this.username.toUpperCase()}`;
}

let coffee =  new User("coffee","coffee@gmail.com","cfc");
console.log(coffee);
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());
console.log(Object.getPrototypeOf(User)); //[Function (anonymous)] Object




/*Notes: 
1. Mistake-1: let user1 =  User ("Omkar","omkar@google.com","omkar");
TypeError: Class constructor User cannot be invoked without 'new'
This error occurs only in ES6 class syntax. Class constructors must be called with new.

2.Function constructors (function User(...)) can technically be invoked without new, but that’s not recommended.
✅ Define shared methods using `ClassName.prototype.methodName` in function constructors.

✅ Use `btoa()` for simple base64 encoding (not actual encryption).
*/