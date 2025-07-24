//Dates
// let myDate= new Date();
// console.log(`TypeOf of Date is: ${typeof(myDate)}`);
// console.log(`The value of myDate is: ${myDate}`);
// console.log("\n");
// console.log( `toDateString():  ${myDate.toDateString()}`);
// console.log( `toISOString():  ${myDate.toISOString()}`);
// console.log( `toJSON():  ${myDate.toJSON()}`);
// console.log( `toLocaleString():  ${myDate.toLocaleString()}`);
// console.log( `toLocaleDateString():  ${myDate.toLocaleDateString()}`);
// console.log( `toLocaleTimeString():  ${myDate.toLocaleTimeString()}`);
// console.log( `toString():  ${myDate.toString()}`);
// console.log( `toTimeString():  ${myDate.toTimeString()}`);


//Date month is starting with 0 becaus it is an Array
//toLocaleString()---> MM/DD/YYYY
// let myCreatedDate1= new Date(2025,0,8);
// console.log(myCreatedDate1.toLocaleString("en-IN"));
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocaleString("en-IN"));
// //"YYYY-MM-DD" is always parsed safely in JS
// let myCreatedDate3= new Date("2023-05-12")
// console.log(myCreatedDate3.toLocaleString("en-IN"));
// let myCreatedDate4 = new Date("01-11-2023")
// console.log(myCreatedDate4.toLocaleString("en-IN"));

/*Output:
8/1/2025, 12:00:00 am
23/1/2023, 5:03:00 am
12/5/2023, 12:00:00 am
11/1/2023, 12:00:00 am */

//Date.now() returns the number of milliseconds since Jan 1, 1970 (UTC).
// let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(myTimeStamp);
// //converting milliseconds into seconds
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date(); // Gets current system date and time

// console.log(newDate);                 // Full date object
// console.log(newDate.toString());     // Human-readable string (includes time zone)

// console.log("Time: " + newDate.getTime());              // Milliseconds since Jan 1, 1970
// console.log("Date: " + newDate.getDate());              // Day of the month (1-31)
// console.log("Day: " + newDate.getDay());                // Day of the week (0-Sunday to 6-Saturday)
// console.log("FullYear: " + newDate.getFullYear());      // Full year (e.g. 2025)
// console.log("Hours: " + newDate.getHours());            // Current hour (0-23)
// console.log("Milliseconds: " + newDate.getMilliseconds()); // Milliseconds (0-999)
// console.log("Minutes: " + newDate.getMinutes());        // Current minutes (0-59)
// console.log("Month: " + (newDate.getMonth() + 1));      // Month (0-11), +1 for human-readable (1-12)
// console.log("Seconds: " + newDate.getSeconds());        // Current seconds (0-59)
// console.log("TimeZoneOffset: " + newDate.getTimezoneOffset()); // Minutes offset from UTC


let dayName=newDate.toLocaleString('default',{
    weekday : "long"
})

console.log(`Today is ${dayName}`); //Today is Thursday

