// const myArrOne = [1,2,6,8,9];

// console.log(typeof myArrOne);

// console.log(myArrOne[2]);

// const mySuperHeroes = ["Batman","Green Arrow","Joker","Flash"];

// console.log(mySuperHeroes[3]);

// Another way to declare array

// const randomContent = new Array(12,45,"Mumbai",true);

// console.log(typeof randomContent);

// console.log(randomContent[2]);

// console.log(randomContent[3]);

// Array Methods

// push()
// myArrOne.push("Gaurav");
// myArrOne.push(25);  // push inserts a new element at the end of array
// myArrOne.push(false);

// console.log(myArrOne);

// pop()
// myArrOne.pop();  // pop removes the last element of the array

// console.log(myArrOne);

// To insert element at the start of array use unshift()

// myArrOne.unshift("India");

// myArrOne.unshift("Asia");

// console.log(myArrOne);

// shift() method removes the first element of the array

// myArrOne.shift();

// console.log(myArrOne);

// .includes() 

// console.log(myArrOne.includes("Bhuvaneshwar"));

// console.log(myArrOne.includes(7));  //method in the arrow can be used to check whether it contains a particular element in the array or not and gives the result true or false

// console.log(myArrOne.includes(6));

// indexOf()

// console.log(myArrOne.indexOf(2));

// console.log(myArrOne.indexOf(3));

// .join() join  method binds the array and then converts the intented array  into a string 

// const secondArry = myArrOne.join(); 

// console.log(myArrOne);

// console.log(secondArry);

// console.log(typeof secondArry);

// slice and splice

const myArrTwo = [0,1,2,3,4,5,6];

console.log("A ", myArrTwo);

const myNewTwo = myArrTwo.slice(1,4);  // in this slice method means it will slice the array from position[1] till position[3];

console.log("B ", myArrTwo);

console.log(myNewTwo);


const myNewThree = myArrTwo.splice(1,4);

console.log("C ",myArrTwo);

console.log(myNewThree);