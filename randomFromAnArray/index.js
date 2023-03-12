

// https://www.programiz.com/javascript/examples/get-random-item

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [
        'tomato',
        'orange',
        'DodgerBlue',
        'MediumSeaGreen',
        'SlateBlue',
        'AliceBlue',
        'Aquamarine',
];

const result = getRandomItem(array);
console.log(result);
console.log(typeof(result));


console.log(' ');

const array2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

const result2 = getRandomItem(array2);
console.log(result2);
console.log(typeof(result2));