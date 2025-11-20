// Generics

type GenericsArray<T> = Array<T>;

// const friends : string[] = ["Arafat", "Rafi", "Shuvo"];
// const friends : Array<string> = ["Arafat", "Rafi", "Shuvo"];
const friends: GenericsArray<string> = ["Arafat", "Rafi", "Shuvo"];

// const roll : number[] = [101, 102, 103];
// const roll : Array<number> = [101, 102, 103];
const roll: GenericsArray<Number> = [101, 102, 103];

// const isAlligable: boolean[] = [true, false, true];
// const isAlligable: Array<boolean> = [true, false, true];
const isAlligable: GenericsArray<boolean> = [true, false, true];


type Coordinates<X, Y> = [X, Y]
const coordinates1: Coordinates<number, number> = [20, 30]
const coordinates2: Coordinates<string, string> = ['20', '30']
