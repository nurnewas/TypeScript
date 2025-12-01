//* Explore mapped types


// map 

const arrayOfNumber: number[] = [1, 2, 3, 4, 5]
const arrayOfString: string[] = ["1", "2", "3", "4"] // 


const arrayOfNumberMap: string[] = arrayOfNumber.map((num) => num.toString())
console.log(arrayOfNumberMap); //! i don't have to wright const arrayOfString: string[] = ["1", "2", "3", "4"] // 



type AreaOfString = { // this is string
    [key in "hight" | "Width"]: string
}

type x = { // this is boolean
    [key in "hight" | "Width"]: boolean
}

type Area<T> = {
    [key in typeof T ]: boolean
}