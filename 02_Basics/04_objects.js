// const quoraUser = new Object();

// console.log(quoraUser);

// this is example of singelton

// const quoraUser = {};

// quoraUser.name = "Sanjay";
// quoraUser.city = "Indore";
// quoraUser.gender = "Male";

// console.log(quoraUser);

// Nesting Object exmaple

// const anotherUser ={
//     state: "Maharashtra",
//     continent: "Asia",
//     fullName: {
//         userFullName: {
//             firstName: "Karan",
//             lastName: "Patil",
        
//         }
//     }
// };

// console.log(anotherUser);
// console.log(anotherUser.fullName);
// console.log(anotherUser.fullName.userFullName);
// console.log(anotherUser.fullName.userFullName.firstName);

// Objects Combine

// const obj1 = {
//     1:"Apple",
//     2:"Oranges",
// };

// const obj2 = {
//     3: "Papaya",
//     4: "Sitaphal",
// };

// to combine a two objects into one object we use Object.assign() and store it in a new variable and use {} since it is good practice

// const obj3Combined = Object.assign({},obj1,obj2);

// console.log(obj3Combined);

// we can also use spread operator ... to combine two objects

// const obj3Combined = {...obj1,...obj2};
// console.log(obj3Combined);

// we can also use objects inside array

const userDetails = [
    {

        name: "Gaurav",
        email: "gaurav@yahoo.com",

    },
    {
        
    },
    {

    },
];

// console.log(userDetails[0]);
// console.log(userDetails[0].name);

// whenever we use object.keys or object.values on the object it returns a array

const myDetails = {
    name: "Dinesh",
    age: 124,
    salary: 4586622,
    isMarried: false,
};

// console.log(Object.keys(myDetails));  //this will return a array which will contain only keys

// console.log(Object.values(myDetails)); // this will return a array which will contain only values

// Object.entries will give a array which will have a one big array which will sub array containing rlevant key and value so here there would be 3 sub array 
// console.log(Object.entries(myDetails)); 

// to check if the object has a particular key we should use hasOwnProprty("")

// console.log(myDetails.hasOwnProperty("name"));
// console.log(myDetails.hasOwnProperty("Raju"));

// Destructuring is done on both objects and arrays

// the syntax for it is const {objectvalue} = objectname

// const {salary} = myDetails;
// console.log(salary);

// by destructuring we can also change the keyname of the object

const {isMarried: martialStatus} = myDetails;
console.log(martialStatus);
// console.log(myDetails);

// In Api we use object without assing it a variable and we use key as string

// Api Example

// {
//     "name": "Gaurav",
//     "age": 5555,
//     "nationality": "indian",
//     "title": "JSON:API paints my bikeshed!",
//     "body": "The shortest article. Ever.",
//     "created": "2015-05-22T14:56:29.000Z",
//     "updated": "2015-05-22T14:56:28.000Z"
// }

// Api can also be in array
// [
//     {

//     },
//     {

//     },
//     {

//     },
// ]

// random user api

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }



