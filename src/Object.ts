// refrence type: object
const user : {
    firstName: string;
    middleName?: string; // optional property
    lastName: string;
    isMarried: boolean;
    company: "coXde"|"Amazon"|"Google"; // literal type //? value = type
    readonly age: number; // readonly property //todo: access  modify
} = {
    firstName: "Nur",
    // middleName: "Newas",// make it optional using ?
    lastName: "Bosuniya ",
    age: 21,
    isMarried: false,
    company: "coXde"
}
console.log(user);