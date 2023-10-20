
const kgToLbs = (kg)=> {
    const lbs = kg * 2.20462;
    return lbs;
}

const lbsToKg = (lbs)=> {
    const kg = lbs / 2.20462;
    return kg;
}

console.log("10 kg em lbs:",kgToLbs(10))
console.log("10 lbs em kg:",lbsToKg(10))

// console.log(a)


