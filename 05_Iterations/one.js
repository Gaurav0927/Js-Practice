// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// console.log(element); // this will give error since it is outside the block

// for(let i=0; i<= 100; i++){

//     const element = i;

//     if(element % 2 === 0){
//         console.log(`${element} is a even number`);
//     }else{
//         console.log(element);
//     }

// }

// Nested for loop

// for(let i=0; i<=10; i++){
//     console.log(`Outer loop ${i}`);

//     for(let j=0; j<=10; j++){

//         console.log(`Inner loop ${j} and outer loop ${i}`);

//     }

// }

// Nested for loop using Table

// for(let i=0; i<=10; i++){

//     console.log(`The Outer loop is ${i}`);

//     for(let j=0; j<=10; j++){

//         console.log(`${i} * ${j} = ${i*j}`);

//     }

// }

// const dcHeros = ["Batman","Green Arrow", "Aqua Man", "Flash", "Dead Shot"];
// console.log(dcHeros.length);

// for(let i=0; i<dcHeros.length; i++){

//     const element = dcHeros[i]; // to access array we have to give index value to array i.e array[i]
//     console.log(element);

// }

// using break and continue 
// break will stop  

for(let i=1; i<= 20; i++){

    const element = i;

    if(i % 5 === 0){

        // console.log(`The ${element} is divisible by 5`);
        // break;
        continue;
    }
    
        console.log(element);
    



}


