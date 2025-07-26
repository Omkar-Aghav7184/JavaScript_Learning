/* Syntax:
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

//Prints Today's Day of week

let day="Monday"

switch(day)
{
    case "Monday": console.log(`Today is ${day}`);
                   break;

    case "Tuesday": console.log(`Today is ${day}`);
                    break;

    case "Wednesday": console.log(`Today is ${day}`);
                    break;
    case "Thursday": console.log(`Today is ${day}`);
                   break;
    case "Friday": console.log(`Today is ${day}`);
                   break;
    case "Saturday": console.log(`Today is ${day}`);
                    break;
    case "Sunday": console.log(`Today is ${day}`);
                    break;
    default: console.log("Invalid day.Please enter valid Day!");          
}