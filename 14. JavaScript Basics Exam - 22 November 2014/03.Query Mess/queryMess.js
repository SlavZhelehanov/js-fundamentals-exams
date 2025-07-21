function queryMess(params) {
    params.forEach(element => {
        element = element.split(/&|\?/).map(m => m = m.trim()).filter(f => f.includes('='));
        let data = {}, output = '';

        element.forEach(p => {
            while (p.includes('+') || p.includes('%20')) p = p.replace('+', ' ').replace('%20', ' ');
            p = p.split('=').map(m => m = m.trim()).map(m => m = m.replace(/\s+/g, ' '));

            if (!data[p[0]]) data[p[0]] = [];
            data[p[0]].push(p[1]);
        });

        for (const key in data) output += `${key}=[${data[key].join(', ')}]`;

        console.log(output);
    });
}