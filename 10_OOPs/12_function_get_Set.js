//function as a Object with set & get

function User(email,password){

    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{

        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

let funUser = new User("omky@google.com","abc");
console.log(funUser);
console.log(funUser._email);
console.log(funUser._password);
console.log(funUser.email);
console.log(funUser.password);

/*Notes:
Why We Use _email and _password
👇 Reason:
If you directly store the values in this.email and this.password, then:

The setter would call itself recursively:
set email(value) {
  this.email = value; // ❌ infinite recursion
}
This causes a RangeError: Maximum call stack size exceeded.

✅ Solution:
You store values in internal variables (_email, _password) that are not connected to the public-facing getters/setters. This breaks the recursion.

📌 Analogy:
// 🔄 Bad (recursive)
set email(value) {
  this.email = value; // ❌ triggers setter again → infinite loop
}

// ✅ Good (safe)
set email(value) {
  this._email = value; // ✅ safe, avoids setter
}

| Use Case                                | Recommendation                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| Small to medium JS apps                 | ✅ Works well                                                                       |
| Older environments without class syntax | ✅ Still valid                                                                      |
| Large-scale/secure systems              | ❌ Avoid exposing internals; use classes with `#private` fields and real encryption |
 */