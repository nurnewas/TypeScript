// Union & intersection types

// ! Union Types \
type UserRole = "admin" | "manager" | "HR" | "employee";

const dashboardAccess = (role: UserRole) => {
    if (role === "admin") {
        return ("admin access granted");
    }
    else if (role === "manager") {
        return ("manager access granted");
    }
    else {
        return ("access denied");
    }
}





// console.log(dashboardAccess("admin"));

// ! Intersection &
type EmployeeInfo = {
    id: number,
    name: string,
    Phone: string
}

type ManagerInfo = {
    designation: string,
    department: string,
    teamSize: number,
}

type employeeManagerInfo = EmployeeInfo & ManagerInfo;

const nurNewas: employeeManagerInfo = {
    id: 11,
    name: "NurNewas",
    Phone: "0123456789",
    //!missing the following properties from type 'ManagerInfo': designation, department, teamSizets(2322)
    // so I have to put designation, department, teamSize

    designation: "HR Manager",
    department: "Development ", 
    teamSize: 10,
}
console.log(nurNewas); // designation, department, teamSize are missing error