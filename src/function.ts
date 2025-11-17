//! Two type of function
//* 1. Normal function
//* 2. Arrow function

// Normal function
function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

const addArr = (num1: number, num2: number): number => {
    return num1 + num2
}
console.log(addNormal(10, 20));
console.log(addArr(30, 40));

//? Object ==> Function ==> Method

const user = {
    name: "NurNewas",
    balance: 0,
    addBalance(money: number): number {
        return this.balance += money

    }
}
user.addBalance(100)
console.log(user);

const arr: number[] = [1, 2, 3, 4, 5]
const sqrArr:number[] = arr.map((num:number): number => num *2 + 10)
console.log(sqrArr);