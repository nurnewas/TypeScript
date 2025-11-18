let anyThink: any;
anyThink = "NurNewas";

(anyThink as string).length;


const KGToGram = (input: number | string): number | string | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ")
        return `Converted value is ${Number(value) * 1000} gram`;
    }
}

const result1 = KGToGram(2) as number;
const result2 = KGToGram("2 kg") as string;
console.log(result1, "another:", result2);