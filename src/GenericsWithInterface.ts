

interface Developer<T, X = null> {
    name: string;
    expertise: string;
    salary: number;
    device: {
        brand: string;
        price: number;
    };
    smartWatch: T;
    bike?: X;
}

interface SmartWatch {
    brand: string;
    hartRate: number;
}
interface Bike {
    brand: string;
    price: number;
    Cc: number;
}

const developer1: Developer<SmartWatch & {

    gps: boolean;
}> = {
    name: "Arafat",
    expertise: "JavaScript",
    salary: 5000,
    device: {
        brand: "hp",
        price: 2000
    },
    smartWatch: {
        brand: "walton",
        hartRate: 80,
        gps: true,
    }

}

const developer2: Developer<Bike,SmartWatch & {
    ai: string;
    calling: boolean;

}> = {
    name: "Rafi",
    expertise: "TypeScript",
    salary: 7000,
    device: {
        brand: "Apple",
        price: 20000
    },
    smartWatch: {
        brand: "Apple",
        hartRate: 80,
        ai: "Siri",
        calling: true,
    },
}