function solution() {
    let [primary, secondary, overlayCoordinates, start] = arguments, quadrant = 0, steps = 0, direction = '';//, previous = '';

    for (const [x, y] of overlayCoordinates) {
        for (let i = 0; i < secondary.length; i++) {
            if ((x + i) < primary.length) {
                for (let j = 0; j < secondary[i].length; j++) {
                    if ((y + j) < primary[0].length) {
                        if (secondary[i][j] === 1 && primary[x + i][y + j] === 1) {
                            primary[x + i][y + j] = 0;
                        } else if (secondary[i][j] === 1 && primary[x + i][y + j] === 0) {
                            primary[x + i][y + j] = 1;
                        }
                    } else { break; }
                }
            } else { break; }
        }
    }

    let [x, y] = start;

    function findQuadrant(x, y) {
        if (x < (primary.length / 2) && y < (primary[0].length / 2)) return 0;
        if (x < (primary.length / 2) && y >= (primary[0].length / 2)) return 1;
        if (x >= (primary.length / 2) && y < (primary[0].length / 2)) return 2;
        return 3;
    }

    while (true) {
        ++steps;
        if (0 <= (x - 1) && primary[x - 1][y] === 0 && direction != "Down") {
            direction = "Up";
            x--;
            if (x === 0) return console.log(`${++steps}\nTop`);
        } else if ((x + 1) < primary.length && primary[x + 1][y] === 0 && direction != "Up") {
            direction = "Down";
            x++;
            if (x === (primary.length - 1)) return console.log(`${++steps}\nBottom`);
        } else if (0 <= (y - 1) && primary[x][y - 1] === 0 && direction != "Right") {
            direction = "Left";
            y--;
            if (y === 0) return console.log(`${++steps}\nLeft`);
        } else if ((y + 1) < primary[0].length && primary[x][y + 1] === 0 && direction != "Left") {
            direction = "Right";
            y++;
            if (y === (primary[0].length - 1)) return console.log(`${++steps}\nRight`);
        } else {
            quadrant = findQuadrant(x, y)
            return console.log(`${steps}\nDead end ${quadrant}`);
        }
    }
}