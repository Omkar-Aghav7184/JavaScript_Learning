//create an object with literal

let course={
    courseName:"Best JavaScript PlayList in Hindi",
    price:" free",
    courseInstructor: "Hitesh Choudary",
    courseYTChannelName: "Chai aur Code"
}

//Lengthy process 
console.log(course);
console.log("Instructor is: ",course.courseInstructor);

//De-Structure
let {courseInstructor} =course
console.log("Instructor is: ",courseInstructor);

let {courseInstructor:instructor} =course
console.log("Instructor is: ",instructor);

//All APIs return is in JSON format
//JSON: It is simply JavaScript Object Notation
//JSON is the standard format for API responses.
//JSON format:
//1.A Single Object 
// {
//     "courseName" :"Best JavaScript PlayList in Hindi",
//     "price" :" free",
//     "courseInstructor" : "Hitesh Choudary",
//     "courseYTChannelName": "Chai aur Code"
// }
//2. Array of Objects
[
    { "id": 1, "name": "User1" },
    { "id": 2, "name": "User2" },
    { "id": 3, "name": "User3" }
]