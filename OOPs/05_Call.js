function setUsername(username){
    //Complex DB Calls
    console.log("Called!");
    this.username = username;
    // Step 4: Logs "Omkar"
    console.log(this.username); //Omkar when simple call, bt when we expilicitly call() it is undefined
    
}

function createUser(username,email,password){

    setUsername.call(this,username); //step 3: sets `this.username = username` on the new object
    this.email = email;
    this.password = password;
}

let user = new createUser("Omkar","omkar.aghav@goole.com","12345");
console.log(user);

/*Notes:
Step 1: new createUser(...)
let user = new createUser("Omkar", ...);
This does:

Create a new empty object: {}
Sets this inside createUser() to that object
Runs createUser()
Returns the object as user

✅ So far, all good.

🔹 Step 2: Inside createUser

function createUser(username, email, password){
    setUsername(username); // ❌ wrong
    this.email = email;
    this.password = password;
}
You call setUsername(username) without controlling this, so inside setUsername():

this points to:
window in browser (or global in Node.js)

NOT the object being constructed by createUser.

🔹 This line:
this.username = username;
➡️ This assigns username to the global object, not to the user object.

🔹 But then:
this.email = email;
this.password = password;
These do use the correct this — because createUser() was called with new.

➡️ So only email and password are part of the returned user object.

🔹 Final console.log(user):
createUser { email: 'omkar.aghav@goole.com', password: '12345' }
username is missing ❌

Because it was stored on globalThis.username or window.username 

2. Mistake
setUsername.call(username);

 This is incorrect, because:
username is a string, like "Omkar"
So inside setUsername, this becomes a string, not the object being constructed
Strings are primitive types and can't hold properties like this.username = username
Hence, this.username is lost, and this is not what you expected

3.Correct:
setUsername.call(this, username);
Now this inside setUsername refers to the user object — so this.username = username correctly sets it.*/