//class User--->Teacher

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username); // ✅ must call super before using `this`
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
    logMe()
    {
        console.log(`Teacher Username is: ${this.username}`);
    }
    displayInfo(){
        console.log(`Teacher Email is: ${this.email} & password is: #${btoa(this.password)}3789 `)
    }
}

//User--->Teacher
//child
let tea = new Teacher("tea","tea@gmail.com","abc");
console.log(tea);
tea.addCourse(); // ✅ defined in Teacher
tea.logMe(); // ✅ inherited from User
tea.displayInfo();


//Parent
let coffee = new User("coffee");
console.log(coffee); 
coffee.logMe();// ✅ works
// coffee.displayInfo();
// coffee.addCourse();  //TypeError: coffee.addCourse is not a function

console.log(tea instanceof User); //true
console.log(coffee instanceof User); //true
console.log(tea instanceof Teacher); //true
console.log(coffee instanceof Teacher); //false

/*
1️⃣ ReferenceError: Must call super constructor in derived class before accessing 'this'
   ✅ Always use `super(...)` as the first line in the constructor of a subclass.

2️⃣ coffee.addCourse(); ❌ TypeError: not a function
    - Because `addCourse()` is only defined in `Teacher`, not in `User`.

3️⃣ coffee.displayInfo(); ❌ TypeError: not a function
    - `displayInfo()` is not inherited or available in `User` class.
*/
