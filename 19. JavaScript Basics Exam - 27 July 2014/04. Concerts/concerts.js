function solution(params) {
    params.pop();
    data = {}, output = {};

    params.forEach(element => {
        let [band, town, date, venue] = element.split('|').map(m => m = m.trim());

        if (!data[town]) data[town] = {};
        if (!data[town][venue]) data[town][venue] = [];
        if (!data[town][venue].includes(band)) data[town][venue].push(band);
    });

    let sortedTowns = Object.keys(data).sort((a, b) => a.localeCompare(b));

    for (const town of sortedTowns) {
        let tmp = {};
        for (const x in data[town]) data[town][x].sort((a, b) => a.localeCompare(b));
        Object.keys(data[town]).sort((a, b) => a.localeCompare(b));
        let sortedVenues = Object.keys(data[town]).sort((a, b) => a.localeCompare(b));
        for (const x of sortedVenues) tmp[x] = data[town][x];
        output[town] = tmp;
    }

    console.log(JSON.stringify(output));
}