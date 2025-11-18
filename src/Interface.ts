//? Interface

type User = {
    name: string;
    age: number;
    isMarried: boolean;
}
//todo: work on array object function
interface IUser {
    name: string;
    age: number;
    isMarried: boolean;
}
type Role = {
    id: number;
    role: "admin" | "manager" | "employee"
}

type UserWithRole = User & Role

const user1: UserWithRole = {
    name: "Nur Newas",
    age: 21,
    isMarried: false,
    id: 1,
    role: "admin"
}
const user2: UserWithRole = {
    name: "Khokon",
    age: 22,
    isMarried: true,
    id: 2,
    role: "employee"
}

interface IUserWithRole extends IUser {
    id: number;
    role: "admin" | "manager" | "employee"
}

// function
type Add = (num1: number, num2: number ) => number;

const add: Add = ( num1, num2) => {
    return num1 + num2;
}

type Friends = string[];



interface Ifriends {
    [index: number] : string   
}
const friends: Ifriends = ["Arafat", "Rafi", "Shuvo"];
