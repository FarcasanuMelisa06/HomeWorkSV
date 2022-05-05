//problem 1
console.log(problem1(3));
function problem1(number) {
    if (number % 2 != 0)
        return number * number;
    else
        return number - 2;
}

//problem 2
const savePrimes = primes => {
    const arrayPrimes = [];
    for (let i = 0; i < primes.length; i++) {
        let prim = true;
        if (primes[i] < 2)
            continue;
        for (let div = 2; div < primes[i]; div++) {
            if (primes[i] % div == 0) {
                prim = false;
                break;
            }

        }
        if (prim) {
            arrayPrimes.push(primes[i]);
        }
    }
    console.log(arrayPrimes);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
savePrimes(arr);


//problem 3 (IIFE)
const saveStrings = [1, '1', 'salut', 2, 6, true, 'true'];
((arrStrings) => {
    const justStrings = [];

    arrStrings.forEach(item => typeof (item) === 'string'
        && justStrings.push(item));
    console.log(justStrings);

})(saveStrings);


//problem 4 (arrow function)
const sum = SumOfDigits => {
    // console.log(typeof SumOfDigits)
    let sumImpar = 0;
    for (let i = 0; i < SumOfDigits.length; i++) {
        if (Number(SumOfDigits[i]) % 2 == 0)
            continue;
        else
            sumImpar = sumImpar + Number(SumOfDigits[i]);
    }

    console.log(sumImpar);
    //console.log(typeof SumOfDigits)

}
sum("1978");


// //problem 5 (switch)
const FlowerColor = "yellow";
switch (FlowerColor) {
    case "red":
    case "orange":
        console.log("Begonia");
        break;
    case "yellow":
    case "pink":
        console.log("Gerbera");
        break;
    case "violet":
        console.log("Lavender");
        break;
    case "green":
        console.log("Chrysanthemum");
        break;
    default:
        console.log("Color doesn't exist");
}

