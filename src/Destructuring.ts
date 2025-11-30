//! Object Destructuring

const user = {
    id: 1,
    name: {
        firstName: "Nur",
        middleName: "Newas",
        lastName: "Busuniya"
    },
    age: 21,
    gender: "Male"
}
// const myGender = user.gender;
// const middleName = user.name.middleName;
const { middleName: myMiddleName } = user.name;
const { name: { lastName: myLastName } } = user;
const { gender: myGenderIs } = user;

// console.log(myMiddleName, myGenderIs,myLastName);

//! Array Destructuring
const myFriends: string[] = ["Arafat", "Rafi", "Shuvo", "Sakib", "Rony"];
// const myBestFriends= myFriends[1];

const [,myBestFriends] = myFriends;
console.log(myBestFriends);


