//Enum

//? Set of fixed string leteral in one place


// type UserRole = "admin" | "viewer" | "editor"

enum UserRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
    User = "User"
};

const canEdith = (role: UserRole) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true
    } else {
        return false
    }
}

const isPermisson = canEdith(UserRole.Admin);
console.log(isPermisson);