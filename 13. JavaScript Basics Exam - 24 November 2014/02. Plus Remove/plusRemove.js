function plusRemove(params) {
    params = params.map(m => m = m.split(''));
    let data = [];

    for (let x = 1; x < params.length - 1; x++) {
        for (let y = 1; y < params[x].length - 1; y++) {
            const xMinusOne = params[x - 1];
            const xPlusOne = params[x + 1];
            const xYMinusOne = params[x][y - 1] ? params[x][y - 1].toLowerCase() === params[x][y].toLowerCase() : false;
            const xYPlusOne = params[x][y + 1] ? params[x][y + 1].toLowerCase() === params[x][y].toLowerCase() : false;
            const xMinusOneY = params[x - 1][y] ? params[x - 1][y].toLowerCase() === params[x][y].toLowerCase() : false;
            const xPlusOneY = params[x + 1][y] ? params[x + 1][y].toLowerCase() === params[x][y].toLowerCase() : false;

            if (xMinusOne && xPlusOne && xYMinusOne && xYPlusOne && xMinusOneY && xPlusOneY) {
                data.push([x, y]);
                data.push([x - 1, y]);
                data.push([x + 1, y]);
                data.push([x, y - 1]);
                data.push([x, y + 1]);
            }
        }
    }

    for (const [x, y] of data) params[x][y] = ' ';
    params.map(m => m = m.filter(f => f !== ' ').join('')).forEach(line => console.log(line));
}