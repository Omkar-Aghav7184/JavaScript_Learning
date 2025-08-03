# 📘 Interview Questions: Closures & Lexical Scope in JavaScript

---

## ✅ 1. What is a closure in JavaScript? Can you explain with an example?

**Answer:**
A **closure** is a function that retains access to variables from its **outer lexical scope** even after the outer function has finished executing.

### Example:
```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2
✅ counter is a closure that remembers count from outer(), even though outer() has already executed.

2. How can closures help in data privacy?
Answer:
Closures enable encapsulation and help create private variables, which are inaccessible from outside the function scope.

Example:
function createAccount() {
    let balance = 1000; // private variable

    return {
        getBalance: function () {
            return balance;
        },
        deposit: function (amount) {
            balance += amount;
        }
    };
}
const account = createAccount();
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.balance); // undefined ✅
✅ balance is a private variable maintained using closure—secure and inaccessible directly.

✅ 3. What is lexical scoping? How is it different from dynamic scoping?
Answer:

Lexical Scoping: Scope is determined at definition time, based on where the variables/functions are written in code.

Dynamic Scoping: Scope is determined at runtime, based on the call stack. (Not used in JavaScript)

Example:
function outer() {
    let a = "outer";
    function inner() {
        console.log(a); // a is resolved from the outer lexical scope
    }
    inner();
}
outer();
✅ JavaScript uses lexical scope — inner() always looks at where it's defined, not where it's called.

✅ 4. How would you create a counter that retains state between function calls?
Answer:
By using a closure to remember state:

Example:function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1 ✅ separate state
✅ Each closure has its own scope and private copy of count.

✅ 5. Explain the memory implications of closures. Can they cause memory leaks?
Answer:
Closures keep references to outer scope variables, which can prevent garbage collection if not handled carefully.

Risks:
If closures are assigned to long-living references (e.g., global objects, DOM nodes), they retain memory.

If they capture large objects accidentally, that memory stays in use.

Tips to Avoid Memory Leaks:
Detach closures from DOM elements when not needed (e.g., removeEventListener()).

Avoid keeping unused closures in global scope.

Use WeakMap or WeakRef for weak referencing if needed.