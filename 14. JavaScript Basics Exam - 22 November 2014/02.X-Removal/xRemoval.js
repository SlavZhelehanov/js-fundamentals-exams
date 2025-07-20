function xRemoval(params) {
    params = params.map(m => m = m.split(''));
    let coordinates = [];

    for (let x = 0; x < params.length; x++) {
        for (let y = 0; y < params[x].length; y++) {
            if (params[x - 1] && params[x - 1][y - 1] && params[x - 1][y + 1] && params[x + 1] && params[x + 1][y - 1] && params[x + 1][y + 1] && params[x][y].toLowerCase() === params[x - 1][y - 1].toLowerCase() && params[x][y].toLowerCase() === params[x - 1][y + 1].toLowerCase() && params[x][y].toLowerCase() === params[x + 1][y - 1].toLowerCase() && params[x][y].toLowerCase() === params[x + 1][y + 1].toLowerCase()) {
                coordinates.push([x - 1, y - 1]);
                coordinates.push([x - 1, y + 1]);
                coordinates.push([x, y]);
                coordinates.push([x + 1, y - 1]);
                coordinates.push([x + 1, y + 1]);
            }
        }
    }

    for (const [x, y] of coordinates) params[x][y] = ' ';
    console.log(params.map(m => m = m.filter(f => f != ' ')).map(m => m = m.join('')).join('\n'));
}