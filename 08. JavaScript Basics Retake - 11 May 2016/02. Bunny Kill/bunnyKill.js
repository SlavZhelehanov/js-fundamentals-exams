function bunnyKill(arr) {
    let indexes = arr.filter(f => 0 < f.length).pop().split(' ').map(row => row = row.split(',').map(Number)), victims = 0, totalDamage = 0;

    if (arr.length === 0) return console.log(0, "\n0");
    arr = arr.map(row => row = row.split(' ').map(Number));

    for (let i = 0; i < indexes.length; i++) {
        const [row, col] = indexes[i], damage = arr[row][col];

        if (damage <= 0) continue;
        totalDamage += damage;
        victims++;
        arr[row][col] = 0;

        if (0 <= row - 1 && row - 1 < arr.length && 0 <= col - 1 && col - 1 < arr[0].length) arr[row - 1][col - 1] = 0 < arr[row - 1][col - 1] - damage ? arr[row - 1][col - 1] - damage : 0;
        if (0 <= row - 1 && row - 1 < arr.length && 0 <= col && col < arr[0].length) arr[row - 1][col] = 0 < arr[row - 1][col] - damage ? arr[row - 1][col] - damage : 0;
        if (0 <= row - 1 && row - 1 < arr.length && 0 <= col + 1 && col + 1 < arr[0].length) arr[row - 1][col + 1] = 0 < arr[row - 1][col + 1] - damage ? arr[row - 1][col + 1] - damage : 0;
        if (0 <= row && row < arr.length && 0 <= col - 1 && col - 1 < arr[0].length) arr[row][col - 1] = 0 < arr[row][col - 1] - damage ? arr[row][col - 1] - damage : 0;
        if (0 <= row && row < arr.length && 0 <= col + 1 && col + 1 < arr[0].length) arr[row][col + 1] = 0 < arr[row][col + 1] - damage ? arr[row][col + 1] - damage : 0;
        if (0 <= row + 1 && row + 1 < arr.length && 0 <= col - 1 && col - 1 < arr[0].length) arr[row + 1][col - 1] = 0 < arr[row + 1][col - 1] - damage ? arr[row + 1][col - 1] - damage : 0;
        if (0 <= row + 1 && row + 1 < arr.length && 0 <= col && col < arr[0].length) arr[row + 1][col] = 0 < arr[row + 1][col] - damage ? arr[row + 1][col] - damage : 0;
        if (0 <= row + 1 && row + 1 < arr.length && 0 <= col + 1 && col + 1 < arr[0].length) arr[row + 1][col + 1] = 0 < arr[row + 1][col + 1] - damage ? arr[row + 1][col + 1] - damage : 0;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (0 < arr[i][j]) {
                victims++;
                totalDamage += arr[i][j];
            }
        }
    }

    console.log(totalDamage, `\n${victims}`);
}