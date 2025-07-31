//Create a PromiseOne
let promiseOne = new Promise(function (resolve, reject) {
  //Do any Async TASK
  //DB Calls,cryptography,network requests
  setTimeout(function () {
    console.log("Async Task1 is executing.......");
    // When the async task is done, call resolve()
    resolve(); //this connects directly to .then()
  }, 1000);
});

//resolve() have direct connection to then. without resolve then() is not executed
// .then() is only triggered when resolve() is called
promiseOne.then(function () {
  console.log("Async Task1 is successfully executed!");
});

// --------------------------------------------------------------
//Create a PromiseTwo without storing in variable
//"fire-and-forget" promise 
new Promise(function (resolve, reject) {
  //Async Task 2
  setTimeout(function () {
    console.log("Async Task2 is executing .........");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async Task2 is Executed!");
});

//create a PromiseThree with passing parameter in resolve()

let promiseThree = new Promise(function (resolve, reject) {
  //Async Task 3
  setTimeout(function () {
    console.log("Async Task3 is executing......");
    resolve({ firstName: "Omkar", lastName: "Aghav", age: 23 });
    return;
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("Async Task 3 is completed!");
//   Converts the entire user object into a JSON string.
  console.log(`User in : ${JSON.stringify(user)}`);
  console.log("User is: ", user);
});

//create promiseFour with resolve+reject

let promiseFour = new Promise((resolve, reject) => {
  //Async Task4
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("Asyncs Task4 is executing .....");
      // If no error, resolve with an object
      resolve({ languageName: "JavaScript", languageExtension: ".js" });
    } else {
        // If there's an error, reject with an error message
      reject(`Error: Something is wrong`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    // Runs only if promise is resolved
    console.log("Async Task4 is completed!");
    console.log("Lang is: ", user);
    return user.languageName; // passed to next then
  })
  .then((languageName) => {
    // Second then receives value from previous then
    console.log("LangName is: ", languageName);
  })
  .catch((error) => {
    // Runs if promise is rejected anywhere above
    console.log("Error is: ", error);
  })
  .finally(() => console.log("The promise is either resolved or reject!"));

//create promiseFive with async/await

let promiseFive = new Promise((resolve, reject) => {
  //Async Task 5
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("Asyncs Task5 is executing .....");
      resolve({ firstName: "Omkar", lastName: "Aghav", age: 23 });
    } else {
      reject(`Error: Something is wrong`);
    }
  }, 2000);
});

//async function to consume Promise
async function consumePromiseFive() {
  try {
    let response = await promiseFive;
    console.log(response); // Logs resolved object if no error
  } catch (error) {
    console.log(error);  // Logs error message if rejected
  }
}
//async function ko call karna padega manually
consumePromiseFive();

//async function to getAllUsers() with fetch('url')

async function getAllUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(typeof(response)); //object

    let data = await response.json(); // converting response to JSON
    console.log(typeof(data)); //object
    console.log(data); // logs the array of user objects
  } catch (error) {
    console.log(error); // catches any error (e.g. network issues)
  }
}
// async function ko call karna padega manually
getAllUsers();

//first of all fetch() related Async tasks is executed because of MicroTaskQueue/Priority Queue
//fetch() ko access karna hey
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log("Data is: ", data))
  .catch((error) => console.log(error));

//read below 
//promise.all

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
This object contains metadata like status, headers, etc., and a body stream.

// JS Event Loop:
// 1. Call Stack
// 2. Web APIs (setTimeout, fetch, etc.)
// 3. Callback Queue (setTimeout)
// 4. Microtask Queue (Promises, mutation observer)
// Microtask Queue has higher priority!
*/