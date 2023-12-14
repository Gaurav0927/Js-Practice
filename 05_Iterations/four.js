// Objects : For In Loop

// Array : For Of Loop

// const myObject = {
//     name: "Jay",
//     city: "Surat",
//     age: 76,
// }

// for (const key in myObject) {

//     // console.log(key);

//     console.log(`This ${key} stands for ${myObject[key]}`);
    
// }

// const subDetails = {
//     js: "Javascript",
//     css: "casacading style sheet",
//     html: "hyper text markup language",
// }

// for (const val in subDetails) {

//     console.log(`Here ${val} stands for ${subDetails[val]}`);

// }

// for in can also be used on the 

let mySubjects = ["english","marathi","history"];

for (const key in mySubjects) {

    // console.log(key); // this will give indexing of the arrow whch starts from zero

    console.log(mySubjects[key]);

}