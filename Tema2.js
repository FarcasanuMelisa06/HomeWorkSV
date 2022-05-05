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
    //console.log(savePrimes[1]);
    const arrayPrimes = new Array;
    let dimension = primes.length;
    let contor = 0;

    for (let i = 0; i < dimension; i++) {
        let prim = true;
        if (primes[i] < 2)
            continue;
        for (let div = 2; div < primes[i]; div++) {
            if (primes[i] % div == 0)
                prim = false;

        }
        if (prim) {
            arrayPrimes[contor++] = primes[i];
        }
    }
    console.log(arrayPrimes);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
savePrimes(arr);


//problem 3 (IIFE)
const saveStrings = [1, '1', 'salut', 2, 6, true, 'true'];
((arrStrings) => {
    const justStrings = new Array;
    let dim = arrStrings.length;
    let k = 0;

        arrStrings.forEach(item => {
            if(typeof(item) === 'string') 
              justStrings[k++] = item;
        });
        console.log(justStrings);
        
})(saveStrings);


//problem 4 (arrow function)
const sum = SumOfDigits => {
    Number(SumOfDigits); //convert strings to number
    //console.log(SumOfDigits);
    let sumImpar = 0;
    let contor = 0;
    let lengthDigits = SumOfDigits;

    //size of string
    while (lengthDigits != 0) {
        contor++;
        lengthDigits = lengthDigits / 10 | 0; //remove the last digit
    }

    for (let i = 0; i <= contor; i++) {
        if ((SumOfDigits % 10) % 2 == 0) {
            SumOfDigits = SumOfDigits / 10 | 0;
            continue;
        }
        else
            sumImpar = sumImpar + (SumOfDigits % 10);
        SumOfDigits = SumOfDigits / 10 | 0;
    }
    console.log(sumImpar);

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

