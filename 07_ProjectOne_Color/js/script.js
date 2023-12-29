const buttons = document.querySelectorAll(".buttons");

// console.log(button);

const body = document.querySelector("body");

buttons.forEach( function (button) {

    button.addEventListener("click", function (e) {

        console.log(e);
        console.log(e.target);

        // when grey box is clicked
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
            // body.style.backgroundColor = "grey";
        }

        // when red box is clicked
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            // body.style.backgroundColor = "grey";
        }

        // when blue box is clicked
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            // body.style.backgroundColor = "grey";
        }

        // when yellow box is clicked
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "#212121";
            // body.style.backgroundColor = "grey";
        }

        // when purple box is clicked
        if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            // body.style.backgroundColor = "grey";
        }

    })

}  );