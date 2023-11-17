// let myDate = new Date();

// console.log(myDate);

// console.log(myDate.toString());  //when using toString()

// console.log(myDate.toDateString()); // when using toDateString()

// console.log(myDate.toISOString()); // when using toISOString()

// console.log(myDate.toLocaleDateString()); // when using toLocaleDateString()

// console.log(myDate.toLocaleString()); // when using toLocaleString()

// console.log(myDate.toLocaleTimeString()); //when using toLocaleTimeString()

// console.log(myDate.toTimeString());  // when using toTimeString()

// console.log(myDate.toUTCString());  // when using toUTCString()

// console.log(typeof myDate);

// In Javascript Months starts from 0

// let myCreatedDate = new Date(2023,9,27);

// console.log(typeof myCreatedDate); // it will give object

// console.log(myCreatedDate.toString());

// let myNewDate = new Date("01-14-2023");
// console.log(myNewDate.toDateString());

// Timestamps

// let myTimeStamp = Date.now();

// console.log(typeof myTimeStamp);
// console.log( myTimeStamp);

// console.log(myNewDate.getTime()); 

// console.log(myNewDate.getMilliseconds());

// to convert milliseconds into seconds

// console.log(Math.floor(Date.now()/1000));

let findMonth = new Date();

console.log(findMonth.getMonth() + 1); // this +1 is given so that end users are able to understand

findMonth.toLocaleString('default',{
    weekday: "long",
    timeZone: "",
})

