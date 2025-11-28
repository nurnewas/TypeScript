

type StudentMustHave = {
    id: number,
    name: string,
    class: string
}
const addStudentToTheCourse = <T extends StudentMustHave>(studentInfo: T) => {
    return {
        course: "TypeScript Basics",
        ...studentInfo
    }
}

const student1 = {
    id: 101,
    name: "Alice",
    age: 20,
    grade: "A",
    class: "10th Grade"

}
const student2 = {
    id: 102,
    name: "Bob",
    age: 22,
    grade: "B",
    class: "12th Grade"
}
const student3 = {
    name: "Charlie",
    age: 19,
    grade: "C",
    class: "11th Grade",
    hasAStudentID: true,

}

console.log(addStudentToTheCourse(student1));
console.log(addStudentToTheCourse(student2));
// console.log(addStudentToTheCourse(student3)); 