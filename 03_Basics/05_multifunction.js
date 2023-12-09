function one (){
    console.log("First");
    two();
}

function two(){
    console.log("Second");
    three();
}

function three(){
    console.log("Third");
}

one();
two();
three();