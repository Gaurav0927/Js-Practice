// reduce method

// const myNumbers = [1,2,3,4];

// const initialValue = 0;

// const sumInitial = myNumbers.reduce( 
//     (accumullator,currentValue) => accumullator + currentValue,
//     initialValue
//     );

// console.log(sumInitial);

// we can also set inital value directly in the reduce without declaring the variable 

// const myNums = [1, 2, 3];

// const myResult = myNums.reduce( function (acc, currVal) {

//     console.log(`Accumulator is ${acc} and the current value is ${currVal}`);

//     return acc + currVal;

// },0 );

// console.log(myResult);

// using arrow functions

// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( (acc, currVal) => {

//     console.log(`acc is ${acc} and currVal is ${currVal}`);
//     return acc + currVal;
// },0 );

// console.log(myTotal);

// Shopping Cart 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// const totalPrice = shoppingCart.reduce( function (acc,item) {
//     return acc + item.price;
// }, 0 );

// console.log(totalPrice);

// using arrow function

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price ,0  );

console.log(totalPrice);
