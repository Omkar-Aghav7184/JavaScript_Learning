//Object creation with new Object() constructor
//Singleton

let facebookUser=new Object();
// console.log(facebookUser); //{}

// let facebookUser2= {};
// console.log(facebookUser2); //{}

facebookUser.id= "12345";
facebookUser.name="Omkar Aghav";
facebookUser.isLoggedIn= true;
// console.log(facebookUser);

let regularUser= {
    email:"omkar@google.com",
    fullUserName: {
        userFullName: {
            firstName: "Omkar",
            lastName: "Aghav"
        }
    }
}

// console.log("Email" ,regularUser.email);
// console.log("FirstName is: ", regularUser.fullUserName.userFullName.firstName);
// console.log("LastName is: ", regularUser["fullUserName"]["userFullName"]["lastName"]);

let obj1={1: "A", 2:"B"};
let obj2={3: "C", 4:"D"};
let obj3={5: "E", 6:"F"};

let obj4= {obj1,obj2,obj3};
// console.log(obj4);
//Good Practice
let obj5 = Object.assign( {}, obj1, obj2, obj3 );
// console.log(obj5);

let obj6= {...obj1, ...obj2, ...obj3};
// console.log(obj6);

let users = [
    {
        id:1,
        email: "user1@gmail.com"
    },
    {
        id:2,
        email: "user2@gmail.com"
    },
    {
        id:3,
        email: "user3@gmail.com"
    }
]
// console.log(users);
console.log("Email: ",users[1].email); //user2@gmail.com

/**methods */

console.log("Keys: ",Object.keys(facebookUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log("Values: ", Object.values(facebookUser)); //[ '12345', 'Omkar Aghav', true ]
console.log("Entries: ",Object.entries(facebookUser));
console.log(facebookUser.hasOwnProperty("isLogged")); //false









