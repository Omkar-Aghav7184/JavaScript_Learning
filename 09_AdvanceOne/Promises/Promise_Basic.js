console.log("Let's Start Journey of Promises!");
/*Note:
 How fetch() Works in JavaScript:
1.fetch() is asynchronous and returns a Promise.

2.When used with .then() and .catch(), the resolution happens through the Microtask Queue, which has higher priority than the Callback Queue (used by setTimeout, etc).

3.This is why fetch() responses often get logged before setTimeout results, even if both have the same delay.

About Promise.all()
Promise.all() is used when you want to:
Run multiple promises in parallel.
Wait until all of them resolve, or fail immediately if any one fails.

You're getting a Response object, not the actual JSON data. 
This object contains metadata like status, headers, etc., and a body stream.*/