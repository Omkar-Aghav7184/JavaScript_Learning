//block scope

let gameScore=200;

if(gameScore>150){

    let power="Attack";
    // console.log(`Player has a power inside block ${power}`);
}
// console.log(`Player has a power outside block ${power}`); // ReferenceError: power is not defined

/**** implicit scope *** */

let userAge=18;
//Bad Practice two statements in single line. Code readability is not good
// if(userAge>=18) console.log("User is eligible to drive"),console.log("User is also eligible to vote");

//GoodPractice two statements in single line. Code readability is not good
// if(userAge>=18) console.log("User is eligible to drive");


/**** If- else If -else ladder example */
/**Write a program that takes a student's marks and prints their grade */
let studentsMarks=39;

if(studentsMarks>100 || studentsMarks<0){
    console.log("Invalid Marks!");
}
else if(studentsMarks>=90){
    console.log("Student has A grade. Excellent!");
}
else if(studentsMarks>=75 ){
    console.log("Student has B grade. Very Good!");
}
else if(studentsMarks>=60 ){
    console.log("Student has C grade. Good!");
}
else if(studentsMarks>=40){
    console.log("Student has D grade. Needs Improvement!");
}
else{
    console.log("Student has F grade. Fails!");
}

/*** && Logical Operator */
const userLoggedIn = true
const debitCard = true
//at max 2 && used in condition

if(userLoggedIn && debitCard && 2==3 ){
    console.log("User is eligible to enroll into course");
}
else{
    console.log("User is not eligible to enroll into course");
}

/* || Logical Operator */
const loggedInFromGoogle = true
const loggedInFromEmail = false
//at max 2 || used in condition

if(loggedInFromEmail ||  loggedInFromGoogle){
    console.log("User is eligible to access course content");
    
}
else{
    console.log("User is not eligible to access course content");
}