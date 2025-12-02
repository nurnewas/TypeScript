//? OOP => class ==> Object 


class Animal {
       // name: string; //? remove this using public 
    // species: string;
    // sound: string;

    constructor(public name: string,
        public species: string,
        public sound: string,) {
        // this.name = name //? type script automatic iniseal this for using public
        // this.species = species
        // this.sound = sound
    }

    makeSound() {
        console.log(`the animal is ${this.name} making sound ${this.sound}`);
    }
}

const cat = new Animal("mr. belai", "billi", "meaw meaw....")
console.log(cat.makeSound());
console.log(cat);

const dog = new Animal("mr.doges", "kutta", "ghew ghew...")
console.log(dog.makeSound());
console.log(dog.name);