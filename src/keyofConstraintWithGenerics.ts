// ! keyof constraint with generics

//todo: kry of operator is a type of operator which can be used to get the keys of an object type as a union type

type Gari = {
    car: string, // key: value
    bike: string,
    truck: string,
    auto: string
}

type MyGari1 = "car" | "bike" | "truck" | "auto";
type MyGari2 = keyof Gari; //! keyof operator


const amarGari1: MyGari1 = "bike";
const amarGari2: MyGari2 = "bike";

type User = {
    id: 1,
    name: "Nur Newas",
    age: 21,
    isMarried: false,
    address: {
        city: "Dinajpur",
    }
}
const user: User = {
    id: 1,
    name: "Nur Newas",
    age: 21,
    isMarried: false,
    address: {
        city: "Dinajpur",
    }
}
const name1 = user.name;
const name2 = user["name"]; // bracket notation
// console.log(name1, name2);


//? Using with out keyof 
// const getPropertyFromObject = (obj: User, key: "id" | "name" | "address") => {
//     return obj[key]
// }
//? Using keyof with 
// const getPropertyFromObject = (obj: User, key: keyof User) => {
//     return obj[key]
// }
//  keyof constraint with generics
const getPropertyFromObject = <X>(obj: X, key: keyof X) => {
    return obj[key]
}



const result = getPropertyFromObject(user, "name");
console.log(result);