

// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

function getRandFromString(lengthInput) {
    let result = ''
    let stringInput1 = 'abcdefghijkmnpqrstuvwxyz1235678908888899999abcdefghijkmnpqrstuvwxyz123567895555500ee'
    let stringInput2 = 'abcdefghijkmnpqrstuvwxyz1235678908888899999abcdefghijkmnpqrstuvwxyz123567895555500ee'
    let stringInput = stringInput1.concat(stringInput2)
    let strLen = stringInput.length

    for (let i = 0; i < lengthInput; i++) {
        result = result + stringInput.charAt(Math.floor(Math.random() * strLen))
    }
    return result

}

console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))
console.log(getRandFromString(33))