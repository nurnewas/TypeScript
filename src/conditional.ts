// conditional type 
type a = null
type b = undefined

type c = a extends null ? true : false


type richPeopleVehicle = {
    car: string;
    bike: string;
    ship: string;
}
type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true: false ;
type hasBike = checkVehicle<"bike">;
