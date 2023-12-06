// // // // // function sayMyName(){
// // // // //     console.log("G");
// // // // //     console.log("A");
// // // // //     console.log("U");
// // // // //     console.log("R");
// // // // //     console.log("A");
// // // // //     console.log("V");
// // // // // }

// // // // // sayMyName();

// // // // // Function by passing two parameters while defining the function addTwoNumber(num1,num2 ) are called parameters whereas while calling them addTwoNumber(num1,num2 )are called arguments

// // // // function addTwoNumber(number1,number2){

// // // //     // console.log(number1+number2); // this will resukt in undefined in terminal

// // // //     // const result = number1 + number2; // this will give correct answer

// // // //     // console.log("dhhdfhhf");
// // // //     // return result;

// // // //     return number1 + number2;


// // // // }

// // // // // addTwoNumber(4,6);
// // // // // addTwoNumber(7,"A");
// // // // // addTwoNumber(7,null);

// // // // const result = addTwoNumber(6,4);

// // // // console.log(`The result is : ${result}`);a

// // // function loggedInUser(userName = "Gaurav"){

// // //     // return `${userName} just has logged in.`

// // //     // using if else statement

// // //     if(!userName){

// // //         console.log("Enter valid username  please");
// // //         return;

// // //     }else{
// // //         console.log(`${userName} has just logged in`);
// // //     }

// // // }

// // // // console.log(loggedInUser("Jitesh"));

// // // // In js empty strings  and undefined are viewd as false values

// // // // console.log(loggedInUser()); // will return undefined

// // // // console.log(loggedInUser("Mayuresh")); // will return undefined

// // // // to prevent it from going into undefined use userName = "";

// // // // console.log(loggedInUser());

// // // we can use ...spread operator in the function

// // // function calculateCartPrice(...num1){
// // //     return num1;
// // // }

// // // // console.log(calculateCartPrice(23));

// // // console.log(calculateCartPrice(23,77,44,222)); // to have these all entries displayed use ...in the parameters this will make it a array

// // // when we use val1,val2,...para it will delete the numbers in array from position 0 and 1

// // function calculateCartPrice(val1,val2,...num1){
// //     return num1;
// // }

// // console.log(calculateCartPrice(23,77,44,222)); // to have these all entries displayed use ...in the parameters this will make it  array


// // passing objects in the function

// const user = {
//     userName: "Rohan",
//     age: 65,
//     country: "India",
// };

// // always use anyboject as parameter whwn you want to pass object in a function

// function handleObject(anyboject){

//     console.log(`My name is ${anyboject.userName} and my country is ${anyboject.country}`);

// }

// console.log(handleObject(user));

// we can also pass array in the function

const myArray = [7,9,3,0,6];

function returnsecondArray(getArray){

    return getArray[1];

}

console.log(returnsecondArray(myArray));

console.log(returnsecondArray([3,2,8,987]));



