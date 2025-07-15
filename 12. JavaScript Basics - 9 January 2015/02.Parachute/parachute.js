function parachute(params) {
    let x, y;

    function moveLeft(arr) { for (const i of arr) if (i === "<") y--; }
    function moveRight(arr) { for (const i of arr) if (i === ">") y++; }
    function checkForLand(g) {
        if (g === '_') return ['Landed on the ground like a boss!'];
        if (g === '~') return ['Drowned in the water like a cat!'];
        if (g === '/' || g === '\\' || g === '|') return ['Got smacked on the rock like a dog!'];
        return [];
    }

    for (let i = 0; i < params.length; i++) {
        let f = false;
        for (let j = 0; j < params[i].length; j++) if (params[i][j] === 'o') {
            x = i; y = j; f = true; break;
        }
        if (f) break;
    }

    for (let i = x + 1; i < params.length; i++) {
        moveLeft(params[i]);
        moveRight(params[i]);
        if (0 < checkForLand(params[i][y]).length) {
            console.log(checkForLand(params[i][y])[0]);
            x = i;
            break;
        }
    }

    console.log(x, y);
}