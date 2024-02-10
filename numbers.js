function calculateDistance (x1, x2) {
    return x2 - x1
}
console.log(calculateDistance(0, 5))
console.log(calculateDistance(-3, 2))
export {calculateDistance}

function calculateSegmentProduct (a, b, c) {
    return (abs(a) + abs(c), abs(c) + abs(b))
}
console.log(calculateDistance(0, 5, 2))
console.log(calculateDistance(-1, 12, 7))
export {calculateDistance}

function calculateKilobytes (fileSizeInBytes) {
    return floor(fileSizeInBytes / 1024)
}
console.log(calculateKilobytes(2048))
console.log(calculateKilobytes(5000))
export {calculateKilobytes}

function calculateSegments (lengthA, lengthB) {
    return lengthA / lengthB
}
console.log(calculateSegments(10, 3))
console.log(calculateSegments(15, 4))
export {calculateSegments}

function calculateDigitSum (twoDigitNumber) {
    return floor(twoDigitNumber / 10) + twoDigitNumber % 10
}
console.log(calculateDigitSum(47))
console.log(calculateDigitSum(89))
export {calculateDigitSum}

function swapHundredsAndTens (twoDigitNumber) {
    return `${twoDigitNumber % 10}${floor(twoDigitNumber / 10 % 10)}${floor(twoDigitNumber / 100)}`
}
console.log(swapHundredsAndTens(123))
console.log(swapHundredsAndTens(987))
export {swapHundredsAndTens}

function getHundredsDigit (number) {
    if number <= 999 {
        return 0
    }
    return floor(number / 100 / 10%)
}
console.log(getHundredsDigit(1234))
console.log(getHundredsDigit(9876))
console.log(getHundredsDigit(500))
export {getHundredsDigit}

function getFullHours (seconds) {

}
console.log(getFullHours(3600))
console.log(getFullHours(7200))
console.log(getFullHours(18000))
export {getFullHours}

function getDayOfWeek (dayOfYear) {

}
console.log(getDayOfWeek(1))
console.log(getDayOfWeek(10))
console.log(getDayOfWeek(365))
export {getDayOfWeek}

function countSquares (a, b, c) {

}
console.log(countSquares(6, 4, 2))
console.log(countSquares(8, 5, 3))
console.log(countSquares(10, 10, 5))
export {countSquares}