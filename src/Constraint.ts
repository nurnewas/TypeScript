
const addStudentToTheCourse = <T extends { id: number, name: string }>(studentInfo: T) => {
    return {
        course: "TypeScript Basics",
        ...studentInfo
    }
}

const student1 = {
    id: 101,
    name: "Alice",
    age: 20,
    grade: "A"

}
const student2 = {
    id: 102,
    name: "Bob",
    age: 22,
    grade: "B"
}
const student3 = {
    hasAStudentID: true,
}

console.log(addStudentToTheCourse(student1));
console.log(addStudentToTheCourse(student2));
// console.log(addStudentToTheCourse(student3)); 