

// password generator

function getRandomLower() {
    let randOutput = Math.floor(Math.random() * 26) + 97
    let char = String.fromCharCode(randOutput)
    return char
}

console.log(Math.floor(Math.random() * 26) + 97)

console.log(getRandomLower())

