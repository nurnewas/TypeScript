//! Spreads Operator
const myFriends: string[] = ["Arafat", "Rafi", "Shuvo"];
const schoolFriends: string[] = ["Sakib", "Rony", "Shanto"];
const collegeFriends: string[] = ["Kamal", "Jamal", "Siam"];


// const myBestFriends = myFriends.push(schoolFriends) //? here push return number
const allFriends = [...myFriends, ...schoolFriends, ...collegeFriends]; //? spread operator
// console.log(allFriends);


const user = {
    name: "NurNewas",
    age: 21,
    isMarried: false
}
const userWithAddress = {
    Country: "Bangladesh",
    Devision: "Dinajpur",
    currentAddress: "Khokon Mulbir more",
}

const userDetails = { ...user, ...userWithAddress }
console.log(userDetails);

// todo: Rest Operator

const sendInvites = (...friends: string[]) => {
    friends.forEach((friends: string )=> {
        console.log(`Dear ${friends}, you are invited to my birthday party.`);
    })
}
console.log(sendInvites("Nur Newas", "Khokon", "Moon"));