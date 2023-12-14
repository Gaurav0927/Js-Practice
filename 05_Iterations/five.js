// const coding = ["javscript","cpp","kotlin","java"];

// coding.forEach( function (val) {
//     console.log(val);
// } );

// arrow function
// coding.forEach( (val) =>{
//     console.log(val);
// } );

// we can also access another function

// function printMe(item){

//     console.log(item);

// }

// accessing another function using for each
// coding.forEach(printMe);

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// } );

// // Using for each for object in array

// Array ke under ki object ki value nikalna

const myCoding = [

    {

        languageName: "Javascript",
        languageFileExtension: ".js"

    },

    {

        languageName: "java",
        languageFileExtension: ".java"

    },

    {

        languageName: "php",
        languageFileExtension: ".php"

    },

];

myCoding.forEach( (item) => {

    console.log(item.languageFileExtension);

}  );

