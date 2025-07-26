//control flow is used/required  to run/execute particular part of code not whole code
//Control_Flow has mainly two types 1.If-Else 2.Switch case

// Q1.Check if a number is positive
let num=-10;

if(num>0){
    // console.log(`Given number ${num} is positive number!`);
}

// Q1.Check if a number is positive with else condition
let num1=-10;

if(num1>0){
    // console.log(`Given number ${num1} is positive number!`);
}
else{
    // console.log(`Given number ${num1} is negative number!`);
}

//Relational Operators are used to check condition in if-else block
// < , > , <=, >=, ==, === , !=, !==
//1.Check if the student is at least 18 years old (>=) to be eligible.
let studentAge=20;

if(studentAge>=18){
    // console.log("Students is eligible to get admission in college!");
}
else{
    // console.log("Students is not eligible to get admission in college!");
}

//2.Reject applications for students younger than 10 (<).
studentAge=10;
if(studentAge<10){
    // console.log("Student is too early to apply");
}else{
    // console.log("Student can apply");
}

//3.Ensure the student's marks are within a valid range (<= 100).
studentMarks=91;
if(studentMarks<=100)
{
    console.log("Student has valid marks");
}
else{
    console.log("Student not have valid marks.Please enter valid marks!");
}

//4.Check if the student scored more than 40 marks to qualify (>).
studentMarks=40;
if(studentMarks>40){
    console.log(`Student is qualify with marks ${studentMarks}`);
}
else{
    console.log(`Student is not qualify with marks ${studentMarks}`);
}

//5.Ensure the entered password is not wrong (!= actual password).
let enteredPassword1 = "pass123";
let correctPassword1 = "admin4567";
if(enteredPassword1 != correctPassword1){
    console.log("Student is entered incorrect password!");
}
else{
    console.log("Student is entered correct password!");
} 
 
//6.Ensure the entered password is not wrong (!== actual password).
let enteredPassword = "13579";
let correctPassword = 13579;

if(enteredPassword !== correctPassword){
    console.log("Student is entered incorrect password!");
}
else{
    console.log("Student is entered correct password!");
}  

//7.Check if the user-provided Application ID loosely matches the expected one (==).
let userAppID = "2025";
let expectedAppID = 2025;

if(userAppID == expectedAppID){
    console.log("User ApplicationID is matches successfully!");
}
else{
    console.log("User ApplicationID is not matches successfully!");
}

//8.Check if the Application ID strictly matches (including type) using (===).

if(userAppID === expectedAppID){
    console.log("User ApplicationID is strickly matches successfully!");
}
else{
    console.log("User ApplicationID is not strickly matches successfully!");
}