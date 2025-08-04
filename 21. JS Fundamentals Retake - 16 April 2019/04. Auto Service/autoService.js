function autoService(strings) {
    let cars = {}, parts = {};

    for (let i = 0; i < strings.length; i++) {
        const [command, carModel, prm1, prm2] = strings[i].trim().split(' ');

        switch (command) {
            case "instructions": {
                if (!cars[carModel]) cars[carModel] = {};
                break;
            }
            case "addPart": {
                if (!parts[carModel]) parts[carModel] = {[prm1]: [prm2]};
                else if (!parts[carModel][prm1]) parts[carModel][prm1] = [prm2];
                else parts[carModel][prm1].push(prm2);
                break;
            }
            case "repair": {
                if (!cars[carModel]) console.log(`${carModel} is not supported`);
                else {
                    const data = JSON.parse(prm1);

                    for (const part in data) {
                        cars[carModel][part] = data[part];

                        if (data[part] === "broken" && parts[carModel].hasOwnProperty(part)) {
                            cars[carModel][part] = parts[carModel][part].shift();

                            // if (0 === parts[carModel][part].length) delete parts[carModel][part];
                            // if (0 === Object.keys(parts).length) delete parts[carModel];
                        }
                    }
                    console.log(`${carModel} client - ${JSON.stringify(cars[carModel])}`);
                }
                break;
            }
            default: {
                break;
            }
        }
    }

    for (const car of Object.keys(parts).sort((a, b) => a.localeCompare(b))) console.log(`${car} - ${JSON.stringify(parts[car])}`);
}

autoService(["repair mazda {\"engine\":\"broken\"}",
    "instructions bmw",
    "addPart opel engine GV1399SSS"]);
console.log("--------------------------------------------------------------------------");
autoService([
    'instructions bmw',
    'addPart opel engine GV1399SSS',
    'addPart opel transmission SMF556SRG',
    'addPart bmw engine GV1399SSS',
    'addPart bmw transmission SMF444ORG',
    'addPart opel transmission SMF444ORG',
    'instructions opel',
    'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
    'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
]);