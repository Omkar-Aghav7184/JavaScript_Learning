//Parent class
class User{
    constructor(username)
    {
        this.username = username;
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
    static createId(){
        return 'Password is: 123';
    }
}

let user1 = new User("tea");
console.log(user1);
user1.logMe();
// console.log(user1.createId());
console.log(User.createId());



class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password =password;    
    }
    displayInfo(){
        console.log(`Teacher EmailId is: ${this.email} & password is: ${btoa(this.password)}`);
    }

    logMe(){
        console.log(`Teacher username is: ${this.username}`);
    }
}

let coffee = new Teacher("coffee","cfc@gmail.com","cfc");
console.log(coffee);
coffee.displayInfo();
coffee.logMe();
// console.log(coffee.createId());
console.log(Teacher.createId()); // ✅ Teacher inherits it

/*Notes:
1.console.log(coffee.createId()): TypeError: coffee.createId is not a function
Because createId() is a static method in the User class, 
so it’s only available on the class itself — not on instances (user1, coffee)
// Static methods like createId() belong to the class itself, not instances.

 */


