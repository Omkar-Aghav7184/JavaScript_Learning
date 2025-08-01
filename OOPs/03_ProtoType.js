
let heros = ["thor","spiderMan"];

let heroPower= {
    thor: "hammer",
    spiderMan: "slings",

    getSpiderMan: function(){
        console.log(`Spidy power is ${this.spiderMan}`);
    }
}

/*Now every object in JavaScript (including arrays and functions) inherits this method unless shadowed.
It’s available through prototype chain lookup.
2.Just avoid extending Object.prototype in production code not good practice */
Object.prototype.omkar = function(){
    console.log("Omkar is present in all Objects!");
}

// Only arrays (or things inheriting from Array.prototype) can access heyOmkar
Array.prototype.heyOmkar= function(){
    console.log("Omkar is present in all Arrays!");
}

heros.omkar(); // ✅ Works: Array inherits from Object
heros.heyOmkar(); // ✅ Works: Defined on Array.prototype
heroPower.omkar(); //✅ Works: Object inherits from Object.prototype
// heroPower.heyOmkar(); // ❌ Error: heyOmkar is not in Object.prototype
console.log(Object.getPrototypeOf(heros)); // Array.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(heros))); // Object.prototype



