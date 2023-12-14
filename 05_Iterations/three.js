// for of 

// for of can be used for arrays, strings, etc

// let dcHeros = ["Batman", "Superman", "Green Arrow", "Joker"];

// for (const itemNames of dcHeros) {

//     console.log(itemNames);
    
// }

// let greetings = "Maloom Hain Na";

// for (const greet of greetings) {

//     console.log(`Each character is at ${greet}`);
//     // console.log(greet);
    
// }

// map is same like object

const map = new Map();
map.set("In", "India");
map.set("US", "United States Of America");
map.set("Can", "Canada");
map.set("Fr", "France");

// console.log(map);

// using for of with the map

// alway destructure array by using [key,values] in the for off loop

// for (const [key,value] of map) {

//     console.log(key,": ",value);
    
// }

// for of loop does not work on the object

// This will throw error when using for of

const myObject = {
    name: "Suraj",
    city: "Dehradun",
}

for (const [key,value] of myObject) {

    console.log(key,": ",value);
    
}