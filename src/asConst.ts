// Use as const instead of enum 

//Enum

//? Set of fixed string leteral in one place


// type UserRole = "admin" | "viewer" | "editor"

// enum UserRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer",
//     User = "User"
// };

const UserRole = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
    User: "User"
} as const;

/*
{
    ReadOnly Admin: "Admin",
    ReadOnly Editor: "Editor",
    ReadOnly Viewer: "Viewer",
    ReadOnly User: "User"

    //?  here how can we use a value as a type 
1. typeof 
2. keyof Operator
}
*/

// UserRole.Admin = "Hello" // we cannot asin a new value For Using //!as const



const canEdith = (role: typeof UserRole[keyof typeof UserRole]) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true
    } else {
        return false
    }
}

const isPermisson = canEdith(UserRole.Admin);
console.log(isPermisson);