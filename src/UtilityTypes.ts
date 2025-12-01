//* Explore Utility types

type product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
}

// type productSummary = {
//      id: number;
//     name: string;
//     price: number;
// }


//* need all 
type productSummary = Pick<product, "id" | "name" | "price"> //! which type or key i need

//* remove any thing 
type productWithOutStock = Omit<product, "stock" | "color"> //! remove the key from the list which are flowing 

//* must have
type productWithColor = Required<product> //! must need the key //?where the element must have to there 

//*  Optional
type OptionalProduct = Partial<product>

//* read Only
type productReadOnly = Readonly<product>

//* recoard 

const emptyObject: Record<string, unknown> ={} // when we declard empty object 






const card: productWithColor = {
    id: 222,
    name: "HP",
    price: 5000000,
    stock: 101,
    color: "Pink Pnada"
}
