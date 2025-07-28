function sortTable(params) {
    const regex = /<td>([a-zA-Z0-9 ()+*\/\-.,'"]+)<\/td>/gm;
    let output = `<table>\n<tr><th>Product</th><th>Price</th><th>Votes</th></tr>\n`, data = [];

    for (let i = 2; i < params.length - 1; i++) {
        let m, j = 0, name = '', price = '', tail = '';

        while ((m = regex.exec(params[i])) !== null) {
            j++;
            if (m.index === regex.lastIndex) regex.lastIndex++;

            m.forEach((match, groupIndex) => {
                if (groupIndex === 1 && j === 1) name = match;
                if (groupIndex === 1 && j === 2) price = match;
                if (groupIndex === 1 && j === 3) tail = match;
            });
        }
        if (0 < name.length && 0 < price.length && 0 < tail.length) data.push({ name, price, tail });
    }

    data.sort((a, b) => {
        if (+b.price < +a.price) return 1;
        if (+a.price < +b.price) return -1;
        return a.name.localeCompare(b.name);
    }).forEach(key => output += `<tr><td>${key.name}</td><td>${key.price}</td><td>${key.tail}</td></tr>\n`);

    console.log(output + '</table>');
}