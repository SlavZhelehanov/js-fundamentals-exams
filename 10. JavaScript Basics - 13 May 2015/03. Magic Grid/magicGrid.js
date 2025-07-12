function magicGrid(arr) {
    let encryptedString = arr.shift().split(''), magicNumber = +arr.shift(), twoNums = [], finded = false;
    const seen = new Map();

    arr = arr.map(line => line = line.split(' ').map(Number));

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const num = arr[i][j];
            const complement = magicNumber - num;

            if (seen.has(complement)) {
                const [x, y] = seen.get(complement);
                twoNums = [[x, y], [i, j]];
                finded = true;
                break;
            }

            seen.set(num, [i, j]);
        }
        if (finded) break;
    }

    twoNums = twoNums.map(el => el = el.reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);

    for (let i = 0; i < encryptedString.length; i++) {
        if (i % 2 === 0) encryptedString[i] = encryptedString[i].charCodeAt(0) + twoNums;
        else encryptedString[i] = encryptedString[i].charCodeAt(0) - twoNums;
    }
    console.log(String.fromCharCode(...encryptedString));
}

magicGrid(["QqdvSpg",
    "400",
    "100 200 120",
    "120 300 310",
    "150 290 370"])