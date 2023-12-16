// map method 

const myNumber = [1,8,3,6,4,0];

// const resultOne = myNumber.map( function (value) {
//     return value + 10;
// } );

// console.log(resultOne);

// myNumber.forEach( function(value,index, arr) {
//     arr[index] = value + 10;
// } );

// console.log(myNumber);

// chaining : in this we can use multiple methods like map and fileter one after anothr

const myData = [1,2,3,4,5,6,7,8,9];


const resultTwo = myData
                .map( (num) => num * 10) // this will multiply individual index values by 10
                .map( (num) => num + 5)      //this will use the num value of the previous map and this will add individual index values by 1
                .filter( (num) => num >50 )  // this will use the num value of the previous map  and this will filter individual index values greater than 45

console.log(resultTwo);