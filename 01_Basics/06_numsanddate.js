// // const bookPrice = 100;

// // console.log(bookPrice);

// // const newBookPrice = new Number(200);

// // const finalPrice = newBookPrice;

// // console.log(finalPrice.toString());

// // console.log(typeof finalPrice);
// // console.log(finalPrice.toFixed(3)); // This is used for ajusting the bill while making gst for website billing sectcion

// // // Precision methods rounds of number 

// // const oldNumber = 12525.7568;

// // console.log(oldNumber.toPrecision(5));

// // const currentTemp = 36.97;
// // console.log(currentTemp.toPrecision(2));

// // // When a number has large number of zeros we can adjust it to be more readble using toLocaleString()

// // const myAge = 1000022145555000;

// // console.log(myAge.toLocaleString()); //By Default this is USA Standard

// // console.log(myAge.toLocaleString("en-In"));

// // ******************************************* Maths *******************************************

// // Math.abs() is used to covert any negative number to positive number only

// console.log(Math.abs(-156));

// // Math.round() is used to round off the number

// console.log(Math.round(145.892));

// // Math.ceil() method rounds the number to it's highest value i.e 6.124 will become 7 

// console.log(Math.ceil(94.2215556));

// // Math.floor() method rounds the number to it's lowest value i.e 6.124 will become 6 

// console.log(Math.floor(47.552214));

// // Math.min() is used to find the minimum value 

// console.log(Math.min(14,2,3,7,0.54,314));

// // Math.max() is used to find the maximum value 

// console.log(Math.max(224,35555,1114522,44555,322141,-22442));

// // Math.random() is used to generate a random number between o and 1

// console.log(Math.random());

// To avoid the values like 0.01 we shpuld always use + 1

// console.log(Math.random()*10);

// To avoid it going to into 0 like number use + 1 so it will start from basically 1 and end till 10

// console.log((Math.random()*10) + 1);

// To make it rounded to the lowest number we use floor

// console.log(Math.floor((Math.random()*10)) + 1);

// Another approach for finding a random number between specified min and max number

let min = 10;

let max = 50;

console.log(Math.random() * (max - min + 1) + min);  // +min means it should be atleast 10 andnot less than it

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  
