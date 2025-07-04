function rosettaStone(arr) {
    const alphabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let n = +arr.shift(), decodingTemplate = [];

    for (let i = 0; i < n; i++) decodingTemplate.push(arr.shift().split(' ').map(Number));
    for (let i = 0; i < arr.length; i++) arr[i] = arr[i].split(' ').map(Number);
    for (let i = 0; i < arr.length; i += decodingTemplate.length) {
        for (let j = 0; j < arr[i].length; j += decodingTemplate[0].length) {
            for (let k = 0; k < decodingTemplate.length; k++) {
                for (let l = 0; l < decodingTemplate[k].length; l++) {
                    if (arr.length <= i + k || arr[0].length <= j + l) break;
                    arr[i + k][j + l] = alphabet[(arr[i + k][j + l] + decodingTemplate[k][l]) % 27];
                }
            }
        }
    }
    console.log(arr.map(row => row.join('')).join(''));
}

rosettaStone([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
);
console.log("-----------------------------------------------------------------------");
rosettaStone([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]
);