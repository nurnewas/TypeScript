//! Non-primitive Types are object, array, 

let bazarList: string[] = ['rice', 'oil', 'vegetables']; // array
bazarList.push('salt');
// bazarList.push(11) //! error

let mixArr : (string | number | boolean)[] = [11, 'apple', true ]; // mixed array

mixArr.push(11)
mixArr.push("Nur")
mixArr.push(false)
console.log(mixArr);// now i can push string, number, boolean