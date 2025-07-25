function solution(params) {
    params = params.map(m => m = m.split(''));
    let output = { "I": 0, "L": 0, "J": 0, "O": 0, "Z": 0, "S": 0, "T": 0 };

    for (let x = 0; x < params.length; x++) {
        for (let y = 0; y < params[x].length; y++) {
            if (params[x][y] === 'o') {
                if (x + 3 < params.length && params[x + 1][y] === 'o' && params[x + 2][y] === 'o' && params[x + 3][y] === 'o') output.I++;
                if (x + 2 < params.length && y + 1 < params[x].length && params[x + 1][y] === 'o' && params[x + 2][y] === 'o' && params[x + 2][y + 1] === 'o') output.L++;
                if (0 <= y - 1 && x + 2 < params.length && params[x + 1][y] === 'o' && params[x + 2][y] === 'o' && params[x + 2][y - 1] === 'o') output.J++;
                if (x + 1 < params.length && y + 1 < params[x].length && params[x + 1][y] === 'o' && params[x][y + 1] === 'o' && params[x + 1][y + 1] === 'o') output.O++;
                if (x + 1 < params.length && y + 2 < params[x].length && params[x][y + 1] === 'o' && params[x + 1][y + 1] === 'o' && params[x + 1][y + 2] === 'o') output.Z++;
                if (0 <= x - 1 && y + 2 < params[x].length && params[x][y + 1] === 'o' && params[x - 1][y + 1] === 'o' && params[x - 1][y + 2] === 'o') output.S++;
                if (x + 1 < params.length && y + 2 < params[x].length && params[x][y + 1] === 'o' && params[x + 1][y + 1] === 'o' && params[x][y + 2] === 'o') output.T++;
            }
        }
    }

    console.log(JSON.stringify(output));
}