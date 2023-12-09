// to implement iife we use () just like we used in the implicit for the arrow function regarding object

// function chai(){
//     console.log("Db connected");
// }

// console.log(chai());

// now in the iife if we want to excecute this immediatley we use () after the function end and wrap the entire thing in ()

// to prevent the pollution from global scope variable we use iife

// ()()

(function chai(){
    // named iife
    console.log("DB Connected");
})();

// Using arrow function implicit also always use ; after the function to end it else it will not execute it

// without using ; it will throw error

// using arrow function

( () =>{
    console.log("DB Connected Two");
})();

// we can also pass parameters with this implicit 

((name) => {
    // unnamed iife
    console.log(`DB Connected ${name}`);
})("Gaurav");

