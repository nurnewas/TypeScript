// Type guard 
//! in 
//! type of 




// const add = (num1: number | string, num2: number | string) => {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         return num1 + num2;
//     }
//     else {
//         num1 = num1.toString();
//         num2 = num2.toString();
//         return num1 + num2;
//     }
// }

//! make it good practice 
type Combinable = number | string;
const add = (num1: Combinable, num2: Combinable) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}

add(5, 10); // 15
add('5', '10'); // '510'
add(5, '10'); // '510'
add('5', 10); // '510'




//  in Guard 
type normalUser = {
    name: string;
}

type adminUser = {
    name: string;
    role: 'admin';
}

const userInfo = (user: normalUser | adminUser) => {
    // guard // checking property using 'in' 

    if ("role" in user) {
        console.log(`Name of the user is ${user.name} and role of the is ${user.role}`);
    }
    else {
        console.log(`Name of the user is ${user.name} and role of the is normal user`);

    }



}
console.log("hello");
userInfo({ name: "Nur " });
userInfo({ name: "Newas", role: 'admin' });