// ! Type Alias 

const user1: {
    id: number,
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    },
    age: number,
    gender: "Male" | "Female",
    addArress: {
        division: string;

        City: string;
    }
} = {
    id: 1,
    name: {
        firstName: "Nur",
        middleName: "Newas",
        lastName: "Busuniya"
    },
    age: 21,
    gender: "Male",
    addArress: {
        division: "Dinajpur",
        City: "Dinajpur Sadar"
    }
}

//user 2
const user2: {
    id: number,
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    },
    age: number,
    gender: "Male" | "Female",
    addArress: {
        division: string;

        City: string;
    }
} = {
    id: 2,
    name: {
        firstName: "X",
        middleName: "Y",
        lastName: "Z"
    },
    age: 22,
    gender: "Female",
    addArress: {
        division: "A",
        City: "B Sadar"
    }
}

// I don't like this repetitive code
// So, I will use Type Alias

type UserType = {
    id: number,
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    },
    age: number,
    gender: "Male" | "Female",
    addArress: {
        division: string;

        City: string;
    }}

    const user3: UserType ={
    id: 3
    
    ,
    name: {
        firstName: "NN",
        middleName: "JJ",
        lastName: "JJJ"
    },
    age: 22,
    gender: "Female",
    addArress: {
        division: "AXX",
        City: "Y Sadar"
    }
}
// console.log(user3);

//! Function with Type Alias

type AddFunc = (num1:number, num2:number) => number;
const addNum : AddFunc =(num1, num2) => num1 + num2;

