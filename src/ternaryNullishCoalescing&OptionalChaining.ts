// ternary, nullish coalescing & optional chaining
//!  ==> ? : ternary operator : decisition making 
//!  ==> ?? : nullish coalescing operator : null or undefined check
//!  ==> ?. : optional chaining operator : to check property existence in object



const canYouVote = (age: number) => {
    // if (age >= 18) {
    //     console.log("You are eligible for voting.");
    // }
    // else{
    //     console.log("You are not eligible for voting.");
    // }

    // ternary operator 
    const eligibility = age >= 18 ? "Voter" : " Not Voter";
    console.log(eligibility);
}
// canYouVote(21);



// TODO: nullish coalescing operator : null or undefined
// const userTheme= undefined;
const userTheme = "dark Theme";
const defaultTheme = userTheme ?? "Light Theme";
console.log(defaultTheme);



// todo: optional chaining operator
const user: {
    address: {
        city: string;
        postalCode?: string; // optional property
    }
} =
{
    address: {
        city: "Dinajpur",
        // id: 5200 // not exists
        // postalCode: "5200" // 
        postalCode: "22212"
    }
}
const postalCode = user?.address?.postalCode ;
console.log(postalCode);