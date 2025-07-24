function toTheStars(params) {
    params.pop(); // този ред е заради judge system
    const n = +params.pop(), [x, y] = params.pop().split(/\s+/).map(Number), starSystem = {};

    params.forEach(element => {
        let [name, Sx, Sy] = element.split(/\s+/).map(m => m = m.trim());
        name = name.toLowerCase(); Sx = +Sx; Sy = +Sy;
        starSystem[name] = [Sx, Sy];
    });

    for (let i = 0; i <= n; i++) {
        let space = true;

        for (const key in starSystem) {
            if(x <= (starSystem[key][0] + 1) && (starSystem[key][0] - 1) <= x) {
                if ((y + i) <= (starSystem[key][1] + 1) && (starSystem[key][1] - 1) <= (y + i)) {
                    space = false;
                    console.log(key);
                    break;
                }
            }
        }

        if (space) console.log('space');
    }
}