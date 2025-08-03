//Object

let userObject = {
    _email: "user@gmail.com",
    _password: "abcde12345xyz",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },
    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password =value;
    }
}

let myObject = Object.create(userObject);
console.log(myObject);//{}
console.log(myObject._email); // Gets from prototype
console.log(myObject._password);  
console.log(myObject.email);// Calls inherited getter using inherited _email
console.log(myObject.password);
myObject._email = "custom@gmail.com";
myObject._password = "123";
console.log(myObject);//{}
console.log(myObject._email);
console.log(myObject._password);
console.log(myObject.email);
console.log(myObject.password);

