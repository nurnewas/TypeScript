const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DM: ${input}`);

    } else {
        console.log("From DB All User");
    }
}
// getUser(null);

const productDicCalcu = (input: unknown) => {
    if (typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log("You Payment :", input - discountedPrice);
    }
}

productDicCalcu(100)