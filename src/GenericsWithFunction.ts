//Generics with function

// const CreateArrayWithString = (value: string) => [value]


// const createArrayWithNumber = (value: Number) => [value]


// const createArrayWithObject = (value: { name: string, id: number }) => {
//     return [value]
// }

const createArrayWithGenerics = <T>(value: T) => {
    return [value]
}
// const arrString = CreateArrayWithString("NurNewas");
// const arrNumber = createArrayWithNumber(10001);
// const arrObject = createArrayWithObject({ name: "NurNewas", id: 1 });
const arrString = createArrayWithGenerics("NurNewas");
const arrNumber = createArrayWithGenerics(10001);
const arrObject = createArrayWithGenerics({ name: "NurNewas", id: 1 });

// console.log(arrNumber, arrObject, arrString);


//?  tuple
const CreateArrayWithTuple = (param1: string, param2: string) => [param1, param2]

const cteateArrayTupleWithGenerics = <X, Y>(param1: X, param2: Y) => [param1, param2]
const result = cteateArrayTupleWithGenerics("Nur ", "Newas");
const result2 = cteateArrayTupleWithGenerics(1000, true);

console.log(result, result2);