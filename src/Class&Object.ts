//? OOP => class ==> Object 

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string,
        species: string,
        sound: string,) {
        this.name = name
        this.species = species
        this.sound = sound
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