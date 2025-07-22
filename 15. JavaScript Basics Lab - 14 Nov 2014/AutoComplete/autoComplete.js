function autoComplete(params) {
    // params.pop() // Този ред е заради Judge system
    let words = params.shift().split(/\s+/), data = {};

    params.forEach(p => {
        data[p] = [];

        words.forEach(w => {
            if (w.toLowerCase().startsWith(p.toLowerCase()) && !data[p].includes(p)) data[p].push(w);
        });
    });

    for (const key in data) {
        if (data[key].length === 0) console.log('-');
        else {
            console.log(data[key].sort((a, b) => {
                if (a.length < b.length) return -1;
                if (b.length < a.length) return 1;
                return a.localeCompare(b);
            })[0]);
        }
    }
}

autoComplete(['word screammm screech speech wolf',
    'bas',
    'wo',
    'scr',
    's']);