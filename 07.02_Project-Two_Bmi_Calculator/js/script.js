const form = document.querySelector("form");

// whenever form is used always use submit as event listener 

form.addEventListener("submit", function (e) {

    // always e.preventDefault() in form

    e.preventDefault();

    // parseInt coverts the string into number
    const height = parseInt(document.getElementById("height").value);

    const weight = parseInt(document.getElementById("weight").value);

    const results = document.getElementById("results");

    if(height === "" || height <=0 || isNaN(height)) {

        results.innerHTML = `Please Enter valid Height`;

    }else if (weight === "" || weight <=0 || isNaN(weight)) {

        results.innerHTML = `Please Enter valid Weight`;

    }else {

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi < 18.6) {
            results.innerHTML = `Your Bmi is ${bmi} and you are Under Weight`;
        }

        if(bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML = `Your Bmi is ${bmi} and you are Normal Range`;
        }

        if(bmi >= 24.9) {
            results.innerHTML = `Your Bmi is ${bmi} and you are Over Weight`;
        }

        

    }




} );