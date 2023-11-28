// To Declare a symbol in a object use this format

const mySymbol = Symbol("myKey1");

const myCity = Symbol("Surat");

const myDetails = {
    name: "Gaurav",
    nationality: "Indian",
    age: 562245,
    [mySymbol]: "Key1",
    [myCity]: "Itanagar",
    // isLoggedIn: false,
    // daysWorking: ["Monday","Wednesday","Friday"],

}

// console.log(myDetails);

// we can edit the values of object keys by using .method

myDetails.name = "Jayesh";

console.log(myDetails);

// Use Object.freeze to make the entire object non editable

// Object.freeze(myDetails)

myDetails.name = "Raju";
console.log(myDetails);  //in this anything after the object value of raj is not included since object.freeze is used

myDetails.greetings = function(){
    console.log("Hi Guys");
}

myDetails.wishes = function(){
    // use this to access the same object of the function
    console.log(`${this.name} wishes you a very good afternoon`);
}

console.log(myDetails.greetings());

console.log(myDetails.wishes());





// const myPract ="ajit";
// myPract = "shsh";
// console.log(myPract);
// console.log(typeof myDetails);

// another way to declare the key in the object is by the square method in which inside the bracket a string is used i.e ["age"]

// console.log(myDetails["daysWorking"]);

// console.log(myDetails[mySymbol]);
// console.log(myDetails[myCity]);

