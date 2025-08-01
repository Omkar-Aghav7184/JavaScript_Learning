//Prototype Inheritance

let user = { 
    name: "Omkar Aghav",
    email: "omkar.aghav@google.com"
}

const Teacher ={
    makeContent: true
}

const TeachingSupport ={
    isAvailable:false
}

// TASupport inherits from TeachingSupport via old-style __proto__
const TASupport = {
    createAssignment: "Create Assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

// TASupport can access isAvailable because it inherits from TeachingSupport
console.log(TASupport.isAvailable); //false
// TeachingSupport cannot access createAssignment, because inheritance doesn't go upward.
console.log(TeachingSupport.createAssignment); //undefined

Teacher.__proto__ = user
console.log(Teacher.name); //username
console.log(Teacher.email); //user-email
console.log(user.makeContent); //undefined (not inherit)

//Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport.makeContent);//true
console.log(Teacher.isAvailable); //undefined (not inherit)

//Final ProtoType chain
// TASupport → TeachingSupport → Teacher → user

//Task to make custom function of trueLength() which calculates actual length of all string

let username = "Champion with Discipline             ";

String.prototype.trueLength = function(){
    // this refers to the current string
    console.log(`${this}`);
    console.log(`True Length of string is: ${this.trim().length}`);   
}

username.trueLength(); //24
"omkar   ".trueLength(); //5
"        iceTea   ".trueLength(); //6

/*Notes:
1.❌ Using __proto__ directly is discouraged. It's non-standard in performance-critical code.
Suggestion: Avoid __proto__; always prefer Object.create() or Object.setPrototypeOf()
2.For production code, avoid extending native prototypes unless absolutely necessary, 
or use a utility function instead (for safety). */