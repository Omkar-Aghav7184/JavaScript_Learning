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



/*Notes:
1.❌ Using __proto__ directly is discouraged. It's non-standard in performance-critical code.
Suggestion: Avoid __proto__; always prefer Object.create() or Object.setPrototypeOf()
 */