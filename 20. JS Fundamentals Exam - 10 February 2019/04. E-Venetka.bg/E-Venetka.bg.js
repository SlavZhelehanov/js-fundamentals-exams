function eVenetkaBg(params) {
    let cities = {}, models = {}, listOfTowns = {};

    for (const car of params) {
        if (!cities[car.town]) cities[car.town] = { profit: car.price, registered: 1 };
        else {
            cities[car.town].profit += car.price;
            cities[car.town].registered++;
        }
    }

    const mostProfitable = Object.keys(cities).sort((a, b) => cities[b].profit - cities[a].profit || cities[b].registered - cities[a].registered || a.localeCompare(b))[0];
    console.log(`${mostProfitable} is most profitable - ${cities[mostProfitable].profit} BGN`);

    for (const car of params) {
        if (car.town === mostProfitable) models[car.model] = { count: 1, price: car.price, towns: [car.town] };
        else if (car.town === mostProfitable && models[car.model]) {
            models[car.model].count++;
            if (models[car.model].price < car.price) models[car.model].price = car.price;
        }
    }

    const mostDriven = Object.keys(models).sort((a, b) => models[b].count - models[a].count || models[b].price - models[a].price || a.localeCompare(b))[0];
    console.log(`Most driven model: ${mostDriven}`);

    params.filter(f => f.model === mostDriven).sort((a, b) => a.town.localeCompare(b.town)).forEach(element => {
        if (!listOfTowns[element.town]) listOfTowns[element.town] = [element.regNumber];
        else listOfTowns[element.town].push(element.regNumber);
    });

    for (const key in listOfTowns) {
        console.log(`${key}: ${listOfTowns[key].sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }
}