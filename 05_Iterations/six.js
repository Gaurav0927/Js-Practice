// // Filter method

// // filter method uses a callback function  (function without a name) and is stored in a variable 

// // also when we use a scope on the filter always use return else it will give undefined

// const myData = [1,5,8,2,7,4];

// // const answer = myData.filter( function(value){

// //     return value > 5; // without using return it will give undefined since it in scope

// // } );

// // arrow function without braces (block)

// const answer = myData.filter( (value) => value > 5 )

// console.log(answer);

// we can also use for each method 

// const myData = [1,3,98,48484,24646646,46462,213,66,23422,5445];

// const answer = [];

// myData.forEach( function(value) {

//     if(value >= 450){

//         answer.push(value);

//     }

// }  );

// console.log(answer);

// using filter method

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const resultBooks = books.filter( function(value) {

//     return value.genre === "History";

  

//   }  );

//   console.log(resultBooks);

// to find the books which were  published after 1990

// const resultBooksTwo = books.filter( function (value) {

//     return value.publish >= 2000;

    

// } );

// console.log(resultBooksTwo);

// const reusltThree = books.filter( function (item) {

//   return item.genre === "Non-Fiction";

// } );

// console.log(reusltThree);

// to publish books which were published after 1995 and have genre history

const resultBooksThree = books.filter( (value) => {

  return value.publish >=1995 && value.genre === "History";

}  );

console.log(resultBooksThree);






