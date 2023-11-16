// There are two types of datatypes i.e primitive and non primotive

// In Primitive there are 7 types i.e Number, String, Boolean, Undefined, Null, Symbol, BigInt(huge values for stroing scientific values)

// let numberOfDogs = 5;  //number

// let cityName = "Surat";  //string

// let isIndian = true;   // boolean

// let hungry;  // undefined

// let temperatureToday = null;  // null

// const id = Symbol("123");

// const secondId = Symbol("123");

// console.log(id === secondId);

// // BigInt example 

// let bigIntNumber = 1n;

// console.log(typeof bigIntNumber);

// ********************************************************************************************************

// In Non Primitive there are 3 types i.e Arrays , Objects and Functions 

// Array Example

// const countries = ["India","Pakistan","Nepal","China"];

// console.log(countries);
// console.log( typeof countries);

// const myDetails = {
//     name: "Gaurav",
//     gender: "Male",
//     age: 45,
//     indian: true,
// };

// console.log(typeof myDetails);

// let functionExample = function(){
//     console.log("Hello World")
// }

// console.log(functionExample);

// ********************************************************************************************************

// there are 2 types of memory stack memory and heap memory

// stack memory is used for primitive data 

// heap memory us used for non primitive data

// let myName = "Gaurav";

// let anotherName = myName;

// anotherName = "Mayank";

// console.log(myName);
// console.log(anotherName);

let userOne = {
    email: "abc@efg.com",
    payment: "UPI",

};

let userTwo = userOne;

userTwo.email = "gaurav@khg.com"

console.log(userOne);
console.log(userTwo);



// console.table([userOne,userTwo])
