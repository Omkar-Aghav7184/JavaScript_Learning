//filter()
const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach() does not return a new array; it returns undefined.

let extensions = coding.forEach( (item) => {
    // console.log(item);
    return item;
})

// console.log(extensions); //undefined 

//filter

let number= [1,2,3,4,5,6,7,8,9,10];

// let filteredArray = number.filter( (num) => { num>= 4} ) //[] //need to be explicitly return

//filter() returns a new array

let filteredArray = number.filter( (num) => (num >= 4 ) ); 

console.log(filteredArray);
// console.log(typeof(filteredArray)); //object

//we can do same with forEach()

let newNums=[];

number.forEach( (item)=>{
    if(item>=4) newNums.push(item);
})

// console.log(newNums);
// console.log(typeof(newNums));  //object

/**Note: 
 *1. When using {} in arrow functions, always use return.
 2. When using () in arrow functions, the return is implicit. */

/********Problem Statement */
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//1. Find out books whose genre have History

// let userBooks= books.filter( (bk) => { bk.genre === "History" } ); //we you {} need to be explicitly return

let userBooks = books.filter( (bk) => (bk.genre === "History") ); //implicitly return
// console.log(userBooks);

//2.Find out those books whose publish year>=1995 and have genre "History"

let userFilteredBooks = books.filter( (bk) => (bk.publish>=1995 && bk.genre === "History"));
// console.log(userFilteredBooks);

//3. Find out books whose genre "Science" and edition>=2000

userFilteredBooks = books.filter( (bk)=> (bk.genre === "Science" && bk.edition >=2000 ) );

// console.table() for pretty output:
console.table(userFilteredBooks);






