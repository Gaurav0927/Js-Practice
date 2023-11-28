// const quoraUser = new Object();

// console.log(quoraUser);

// this is example of singelton

// const quoraUser = {};

// quoraUser.name = "Sanjay";
// quoraUser.city = "Indore";
// quoraUser.gender = "Male";

// console.log(quoraUser);

// Nesting Object exmaple

const anotherUser ={
    state: "Maharashtra",
    continent: "Asia",
    fullName: {
        userFullName: {
            firstName: "Karan",
            lastName: "Patil",

        }
    }
};

// console.log(anotherUser);
// console.log(anotherUser.fullName);
console.log(anotherUser.fullName.userFullName);
console.log(anotherUser.fullName.userFullName.firstName);

