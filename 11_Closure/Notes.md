Closure
A closure is a feature in JavaScript where a function retains access to its lexical environment (variables in the scope where it was defined), even after the outer function has finished execution.

When you return a function from another function, and that inner function uses variables from the outer function, a closure is created.

Interview Importance:
Frequently asked in JavaScript coding rounds.
Often tested via problems like:

1. Implement a counter using closure.

2. Create private variables/functions using closure.

3. Explain memory management or garbage collection relevance with closures.

🔹 Lexical Scope
Lexical scoping means that the scope of variables is determined by the structure of the code (i.e., how the code is written), not by how or where functions are called at runtime.

A function has access to:
Its own variables.
Variables in the parent function's scope.
Variables in the global scope.
JavaScript uses lexical (static) scoping, not dynamic scoping.

Example:
function outer() {
    let a = 10;
    function inner() {
        console.log(a); // accessible due to lexical scope
    }
    inner();
}
outer();

Interview Importance:
Used to explain function nesting, scope chain, and closures.
Can lead to tricky bugs if misunderstood, especially with loops and var.
🔹 Avoiding () in Event Handlers
When assigning a function to an event like onclick, do not include parentheses (), unless you intentionally want to call it immediately.


Correct:
button.onclick = someFunction; // Reference passed, runs on click

Incorrect:
button.onclick = someFunction(); // Runs immediately, assigns result (likely undefined)
Closures in event handlers help you bind specific values at setup time (like button colors, indexes, etc.).

Real-world Usage of Closures
SetTimeout / Event listeners retain outer variable state.
Encapsulation in JavaScript (before classes) used closures to emulate private fields.
Debounce / Throttle functions use closures to remember timing.
React hooks (like useState, useEffect) heavily rely on closure behavior.

