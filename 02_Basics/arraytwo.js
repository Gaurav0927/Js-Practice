const marvel_heros = ["Ironman","Thor","Captain America","Hulk"];

const dc_heros = ["Batman","Superman","Green Arrow","Deadshot"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[4][2]);

// concat method is also use to combine tow array but it should be used on a new variable

// let all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);
// console.log(all_heros[2]);


// We can also use spread operator which is rpersented by threedots ...

// const all_spread_heros = [...marvel_heros, ...dc_heros]
// console.log(all_spread_heros);


// flat() method is used to convert the various sub array into one main array

// const myArrayInitial = [1,2,3,4,[6,9,23,4],[2,[7,8,9],6,3]]

// const whole_ArrayFinal = myArrayInitial.flat(Infinity);

// console.log(whole_ArrayFinal);

// console.log(typeof whole_ArrayFinal);

// .from() method is used to convert a string to array

console.log(Array.from("Gaurav"));  // this converts string to array

console.log(Array.from({name:"Gaurav"}));

// similary isArray is used to check whether it array or not

console.log(Array.isArray("Hello World"));

// .of() method can be used to convert variables into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));