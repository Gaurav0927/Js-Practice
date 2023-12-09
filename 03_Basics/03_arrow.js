// normal function
// function chai(){
//     let username = "gaurav";
//     console.log(this);
//     // console.log(this.username); // this only works in objects and not in function
// }

// chai();

// function with variable

// const chai = function(){
//     let username = "Gaurav";
//     console.log(this.username);  // this will also result in undefined since this doesn't work in functiona
// }

// chai();

// Arrow Functions

// const chai = () => {
//     let username = "Gaurav";
//     console.log(this.username);  // this will not work in arrow function also
// }

// chai();

// Basic Arrow Function

// const addNumbers = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(addNumbers(4,5));

// curly braces use kiya toh return use karna padega 

// implicit functions (we remove the curly braces and don't use return )

// Implicit Functions

// const addNumbers = (num1,num2) => num1 + num2;

// console.log(addNumbers(4,5));

// to return a object in implicit function you have to wrap it in ()

// const addNumbers = (num1,num2) => ({username: "Gaurav"})

// console.log(addNumbers(4,5));

// const myArray = [1,2,7,4];

// myArray.forEach(() => {

// });



