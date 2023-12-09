// // let a = 28;

// // if (true) {

// //     let a =10;

// //     let b = 098;

// //     console.log(`Inner Block scope is : ${a}`);
    
// // }

// // console.log(a);

// // Nested Loops scope

// function first(){

//     const username = "Gaurav";

//     function second(){

//         const website = "google";

//         console.log(username)

//     }

//     // console.log(website);  // this will result in error as child element need to be used inside their block only

//     second();

// }

// first();

// second exmaple using if else

// if(true){
//     const username = "Ram";

//     if(username === "Ram"){

//         const city = "Bhopal";

//         console.log(`Username is ${username}`);

//     }

//     // console.log(city);

//     // console.log(username); // this will run perfectly as it is inside the block

// }

// console.log(username); // this will reult in error also since it is used outside the block {]

// ********* Intersting (Hoisting Basic) ************ 

// we will not get error if we use a basic function and above the function declaration we call it

// but when we store a function in a variable and if we try to call it by placing it above the variable it will give error

// console.log(addone(2)); // this will execute

// function addone(num1){
//     return num1 +1;
// }

console.log(addtwo(7));  // this will result in error

const addtwo = function(num2){

    return num2 + 2;

}

// console.log(addtwo(7)); // this will execute normally as expected

