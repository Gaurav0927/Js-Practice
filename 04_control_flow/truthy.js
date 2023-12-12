// // Falsy Values : false, o, -o, BigInt on, null, undefined, NaN

// // Truthy Values : "0", "false", " ", [], {}, function() {}

// // empty string "" is considered as falsy value;

// // Filled string "ddgjamjajak" is considered as truthy value;

// // empty array is considered as truthy values []

// // let userEmail = "jay@abc.com"; // this will give truthy value

// // let userEmail = ""; // this will give truthy value

// // let userEmail = [];

// // // if(userEmail){
// // //     console.log("You are valid user");
// // // }else{
// // //     console.log("Invalid user");
// // // }

// // // to check if the array is empty or not we use .length and use strict comparison 

// // if(userEmail.length === 0){
// //     console.log("This array is empty");
// // }else{
// //     console.log("Not Empty");
// // }

// // const emptyObject = {};

// // if(Object.keys(emptyObject).length === 0){
// //     console.log("This is Empty Object");
// // }else{
// //     console.log("This is NOT Empty Object");
// // }

// // Nullish Coleacing Operator (??) : null undefined

// let val1;

// val1 = null ?? 90;

// val1 = undefined ?? 320;

// val1 = null ?? 45 ?? 320;  // in this case the first value after null i.e 45 will be printed

// // val1 = 7 ?? 16;
// console.log(val1);

// Terniary Operator

// Condition ? True : false;

const electionAge = -7;

electionAge>=18 ? console.log("You are eligible to vote") : console.log("You are not allowed to vote");