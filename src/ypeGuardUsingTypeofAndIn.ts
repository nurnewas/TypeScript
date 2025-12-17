// Type guard 
//! in 
//! type of 


const add = (num1: number | string, num2: number | string) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        num1 = num1.toString();
        num2 = num2.toString();
        return num1 + num2;
    }
}

const a = add(5, 10); // 15
const b = add('5', '10'); // '510'
const c = add(5, '10'); // '510'
const d = add('5', 10); // '510'
console.log(a, b, c, d);