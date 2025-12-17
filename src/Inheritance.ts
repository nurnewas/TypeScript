// parent class  
class Person {
    constructor(
        public name: string,
        public age: number,
        public address: string,
    ) {
    }

    getSleep(numOfHour: number) {
        console.log(`${this.name}boka cela ${numOfHour} ghonta ghumai `);
    }
}


class Student extends Person {

}

const student1 = new Student("Mr. rafi", 18, "Dhaka");
student1.getSleep(10)


// teacher 
class Teacher extends Person {
    constructor(name: string, age: number, address: string,
        public post: string,// own property
    ) {
        super(name, age, address)
        // this.post = post
    }


    takeClass(classTaken: number) { //own methord
        console.log(`${this.name} sir Class nan ${classTaken} class per day `);
    }
}

const teacher1 = new Teacher("Mr Tarek", 32, "Dinajpur", "Sr. Teacher")
console.log(teacher1.takeClass(4));