// parent class  
class Common {

}


class Student {
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

const student1 = new Student("Mr. rafi", 18, "Dhaka");
student1.getSleep(10)


// teacher 
class Teacher {
    constructor(
        public name: string, // common property 
        public age: number,// common property 
        public address: string,// common property 
        public post: string,// own property
    ) {
    }

    getSleep(numOfHour: number) { // common methord
        console.log(`${this.name}boka cela ${numOfHour} ghonta ghumai `);
    }

    takeClass(classTaken: number) { //own methord
        console.log(`${this.name} sir Class nan ${classTaken} class per day `);
    }
}

const teacher1 = new Teacher("Mr Tarek", 32, "Dinajpur", "Sr. Teacher")
console.log(teacher1.takeClass(4));