function allThatLuggage(params){
    params.pop();
    let criterion = params.pop(), data = {};

    params.forEach(line => {
        let [owner, luggage, isFood, isDrink, fragile, kg, transferredWith] = line.split(/[.]*[*][.]*/gm);
        const type = isFood === "true" ? 'food' : isDrink === 'true' ? 'drink' : 'other';

        fragile = fragile === "true";

        if (!data[owner]) data[owner] = {};
        data[owner][luggage] = { kg: +kg, fragile, type, transferredWith };
    });

    if (criterion === "luggage name") {
        Object.keys(data).forEach(name => {
            let sorted = {};
            Object.keys(data[name]).sort((a, b) => { return a.localeCompare(b) }).forEach(s => sorted[s] = data[name][s]);
            data[name] = sorted;
        });
    } else if(criterion === "weight") {
        Object.keys(data).forEach(name => {
            let sorted = {};
            Object.keys(data[name]).sort((a, b) => { return data[name][a].kg - data[name][b].kg }).forEach(s => sorted[s] = data[name][s]);
            data[name] = sorted;
        });
    }

    console.log(JSON.stringify(data));
}