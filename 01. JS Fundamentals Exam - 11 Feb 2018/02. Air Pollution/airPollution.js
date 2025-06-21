function airPollution(mapOfSofia, forces) {
    let pollutedAreas = [];

    for (let i = 0; i < mapOfSofia.length; i++) mapOfSofia[i] = mapOfSofia[i].split(" ").map(Number);

    for (let i = 0; i < forces.length; i++) {
        let [command, index] = forces[i].split(" ");

        switch (command) {
            case "breeze": {
                for (let j = 0; j < 5; j++) 0 <= mapOfSofia[+index][j] - 15 ? mapOfSofia[+index][j] -= 15 : mapOfSofia[+index][j] = 0;
                break;
            }
            case "gale": {
                for (let j = 0; j < 5; j++) 0 <= mapOfSofia[j][+index] - 20 ? mapOfSofia[j][+index] -= 20 : mapOfSofia[j][+index] = 0;
                break;
            }
            case "smog": {
                for (let j = 0; j < 5; j++) {
                    for (let k = 0; k < 5; k++) mapOfSofia[j][k] += +index;
                }
                break;
            }
            default: { break; }
        }
    }

    for (let i = 0; i < mapOfSofia.length; i++) {
        for (let j = 0; j < mapOfSofia[i].length; j++) if (mapOfSofia[i][j] >= 50) pollutedAreas.push(`[${i}-${j}]`);
    }

    0 < pollutedAreas.length ? console.log(`Polluted areas: ${pollutedAreas.join(", ")}`) : console.log("No polluted areas");
}

airPollution([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
);
console.log("-------------------------------------------------------------------------");
airPollution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
console.log("-------------------------------------------------------------------------");
airPollution([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);