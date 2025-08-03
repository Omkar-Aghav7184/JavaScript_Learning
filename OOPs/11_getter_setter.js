//class with getter_setter
// Use private class fields introduced in ES2022:
/*
class User {
  #email;
  #password;
}
*/

class User{

    constructor(email,password)
    {
        this.email = email;
        this.password = password;
    }
    get email(){
        return `Email is: ${this._email.toUpperCase()};`
    }
    set email(value)
    {
        // Store the email in a private variable to avoid recursive call
        this._email = value;
    }
    get password(){
        return  `Password is: #${btoa(this._password)}abc`
    }
    set password(value){
        // Store the password in a private variable to avoid recursive call
        this._password = value;
    }
}

let user = new User("omkar@google.com","123");
console.log(user);
console.log(user.email);
console.log(user.password);
console.log(user._email);
console.log(user._password);




/*Notes: 
1.How it's working:
You're using getters and setters for email and password, 
but you're storing the actual values in _email and _password.
This is a common pattern to avoid recursive setter calls.

2.Without internal _email and _password:
When you call this.email = email, the setter set email() gets invoked.

Inside that setter, if you do this.email = value again, 
you’ll recursively call the setter infinitely, causing a RangeError: Maximum call stack size exceeded.
 Race condition between constructor and setters to set values
*/
