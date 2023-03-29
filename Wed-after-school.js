// Write a function to get the first element in an array. Invoke the function.

function pullFirstElementConsole() {
    const firstArray = ["car", "truck", "boat"]
    console.log(firstArray[0])
}
pullFirstElementConsole();

function pullFirstElementReturn() {
    const secondArray = ["car", "truck", "boat"]
    return secondArray[0]
}
console.log(pullFirstElementReturn());







//  You are given the following "car" object:
let myCar = { brand: "Toyota", make: "Prius", color: "red" }
//  Please use destructuring to access the color property.

console.log(myCar.color)





//1. Create a function that takes in a number of two-pointers (shots made that count as 2 points each) and three-pointers (shots made that count as 3 points each) made and returns a basketball team's total score. Invoke the function and console.log the results.

function basketball(twoPoints, threePoints) {
    
    const totalPoints = (twoPoints * 2) + (threePoints * 3)
    console.log(totalPoints)
}

basketball(5,3)
