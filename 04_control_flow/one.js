// if statements

// if there is false statement inside if it will not exexute it's code in the {}

// === checks the typeof of the values

// if(2 == "2"){

//     console.log("Working"); // this will give true as it doesn't check the typeof

// }

// if(2 === "2"){

//     console.log("Working"); // this will give true as it doesn't check the typeof

// }else{
//     console.log("Not Working");
// }

//  != not equals 

// if( 5!= 7 ){
//     console.log("Working");
// }

// using scope for if else , anything outside the scope would not get executed

const score = 250;

// if(score > 100){
//     const power = "flying"
//     console.log(`Hello User your superpower is ${power}`);

// }

// console.log(`Hello User your superpower is ${power}`); // this will not excecute as it is outside the scope

// const balance = 1000;

// if(balance < 500){

//     console.log("less than 500");

// }else if(balance < 700){

//     console.log("less than 700");
    
// }else if(balance < 900){
    
//     console.log("less than 900");

// }else{

//     console.log("less than 1200");

// }

// && (AND ) || (OR)

const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2 === 2){

    console.log("You are allowed to buy the course");

}

if (loggedInFromGoogle || loggedInFromEmail) {

    console.log("You are allowed to sign in");
    
}