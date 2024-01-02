const clock = document.getElementById("clock");

setInterval(function (){

    const date = new Date();
    
    // console.log(date);

    clock.innerHTML = date.toLocaleTimeString();

    // clock.style.border = "1px solid red";
    clock.style.borderRadius = "10px";
    clock.style.padding = "8px";
    clock.style.margin = "8px";
    clock.style.fontSize = "18px";
    clock.style.fontWeight = "600";



}, 1000);