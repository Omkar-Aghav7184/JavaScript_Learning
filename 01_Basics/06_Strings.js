let name="Omkar"
let repoCount=25;

//Old Practice(Old syntax)
// console.log(name+" "+ repoCount+"!"); //Omkar 25!
//Modern Syntax using `. used this
// console.log(`Hello my name is ${name}. I have repoCount value is: ${repoCount}`);

let str = "  Hello, my name is Omkar Aghav , and I love JavaScript!  ";
console.log(str[5]);
console.log(str.__proto__);
console.log(`The Length of str is: ${str.length}`);
console.log(`The chartAtIndex 20th: ${str.charAt(20)}`);
console.log(`The Index of O ch in str: ${str.indexOf('O')}`);
console.log(`The UpperCase Str is: ${str.toUpperCase()}`);
console.log(`The LowerCase Str is: ${str.toLocaleLowerCase()}`);
console.log(`The Substring Str is: ${str.substring(0,22)}`);
console.log(`The Substr of Str is: ${str.substr(20,26)}`);
console.log(`The Trim of Str is: ${str.trim()}`);
console.log(str.split(","));
console.log(`The Slice of Str is: ${str.slice(-15)}`);
console.log(`The Include of Str is: ${str.includes("Aghav")}`);
console.log(`The Include of Str is: ${str.includes("ReactJs")}`);
console.log(`The Replace of Str is: ${str.replace("Hello","Hello Champion")}`);
console.log("\n");
console.log(`Starts with '  Hello': ${str.startsWith("  Hello")}`);
console.log(`Ends with '!  ': ${str.endsWith("!  ")}`);
console.log(`Last index of 'a': ${str.lastIndexOf("a")}`);
console.log(`Match capital letters: ${str.match(/\b[A-Z]/g)}`);
console.log(`Pad Start Example: ${"42".padStart(5, "0")}`);



/*@Omkar-Aghav7184 ➜ /workspaces/JavaScript_Learning/01_Basics (main) $ node 06_Strings.js
l
{}
The Length of str is: 58
The chartAtIndex 20th: O
The Index of O ch in str: 20
The UpperCase Str is:   HELLO, MY NAME IS OMKAR AGHAV , AND I LOVE JAVASCRIPT!  
The LowerCase Str is:   hello, my name is omkar aghav , and i love javascript!  
The Substring Str is:   Hello, my name is Om
The Substr of Str is: Omkar Aghav , and I love J
The Trim of Str is: Hello, my name is Omkar Aghav , and I love JavaScript!
[ '  Hello', ' my name is Omkar Aghav ', ' and I love JavaScript!  ' ]
The Slice of Str is: e JavaScript!  
The Include of Str is: true
The Include of Str is: false
The Replace of Str is:   Hello Champion, my name is Omkar Aghav , and I love JavaScript!  


Starts with '  Hello': true
Ends with '!  ': true
Last index of 'a': 48
Match capital letters: H,O,A,I,J
Pad Start Example: 00042 */
