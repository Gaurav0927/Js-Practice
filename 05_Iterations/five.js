// // const coding = ["javscript","cpp","kotlin","java"];

// // coding.forEach( function (val) {
// //     console.log(val);
// // } );

// // arrow function
// // coding.forEach( (val) =>{
// //     console.log(val);
// // } );

// // we can also access another function

// // function printMe(item){

// //     console.log(item);

// // }

// // accessing another function using for each
// // coding.forEach(printMe);

// // coding.forEach( (item,index,arr) => {
// //     console.log(item,index,arr);
// // } );

// // // Using for each for object in array

// // Array ke under ki object ki value nikalna

// const myCoding = [

//     {

//         languageName: "Javascript",
//         languageFileExtension: ".js"

//     },

//     {

//         languageName: "java",
//         languageFileExtension: ".java"

//     },

//     {

//         languageName: "php",
//         languageFileExtension: ".php"

//     },

// ];

// myCoding.forEach( (item) => {

//     console.log(item.languageFileExtension);

// }  );

// to display the last number of the array using for each

// const num = [[4,6],[7,8,0],[3,6,2,0,7]];

// num.forEach( function(val){
//     const elem = val[val.length-1];
//     console.log(elem);
// } );

// const num1 = { 
//     name: "gaurav",
//     age: 567783,
//     city: "mumbai",
// }

// for (const key in num1) {

//     // console.log(key);
//     console.log(`The key ${key} for the value in the object is ${num1[key]}`);

// }

// const marks = [[1,3,9], [0,2,2,1,5], [7,5,1],[3,0,3]]

// marks.forEach(function(value){
//     // console.log(value[0]);  // first element of array
//     console.log(value[value.length-1]);
// });

// const first = [1,2,2,45,3,0,3883]

// for (const key of first) {

//     console.log(key);
    
// }

// const city = {
//     name: "mumbai",
//     founded: 1836,
//     famous : "zoos",
// };

// for (const keyOne in city) {

//     console.log(city[keyOne]);

// }

const employeeDetails = [1,8,3,2,5];

// function sayMessage (happy){
//     console.log(happy);
// }

// employeeDetails.forEach(sayMessage);

// we can also insert multiple parameters in the for each


employeeDetails.forEach( function (value,index,arr){

    console.log(value,index,arr);

}  )

// 













