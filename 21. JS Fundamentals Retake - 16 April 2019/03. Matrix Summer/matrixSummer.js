function matrixSummer(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        let temp = [], reminder = 0;

        for (let j = 0; j < matrixA[i].length; j++) {

            if (9 < matrixA[i][j] + matrixB[i][j] + reminder) {
                temp.push(9);
                reminder = matrixA[i][j] + matrixB[i][j] + reminder - 9;
            } else if (9 < matrixA[i][j] + matrixB[i][j]) {
                temp.push(9);
                reminder =  matrixA[i][j] + matrixB[i][j] - 9
            } else {
                temp.push(matrixA[i][j] + matrixB[i][j] + reminder);
                reminder = 0;
            }
        }

        if (0 < reminder) temp.push(reminder);
        result.push(temp);
    }

    return console.log(JSON.stringify(result));
}

// matrixSummer([[1, 2, 3], [3, 4, 5], [5, 6, 7]],
//     [[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
// matrixSummer([[9, 2, 3], [4, 5, 6], [7, 8, 8]],
//     [[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
matrixSummer([[9, 9], [4, 7]],
    [[7, 1], [1, 2]]);