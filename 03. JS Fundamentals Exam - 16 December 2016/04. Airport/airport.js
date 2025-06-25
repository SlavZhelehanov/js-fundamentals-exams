function airport(input) {
    let planes = [], towns = {};

    for (let i = 0; i < input.length; i++) {
        let [planeID, town, passengers, action] = input[i].split(" ");

        switch (action) {
            case "land": {
                if (!planes.includes(planeID)) {
                    planes.push(planeID);

                    if (!towns[town]) towns[town] = {planes: [planeID], arrivals: +passengers, departures: 0};
                    else if (!towns[town].planes.includes(planeID)) {
                        towns[town].planes.push(planeID);
                        towns[town].arrivals += +passengers;
                    } else towns[town].arrivals += +passengers;
                }
                break;
            }
            case "depart": {
                if (planes.includes(planeID)) {
                    let index = planes.indexOf(planeID);
                    planes.splice(index, 1);

                    if (!towns[town]) towns[town] = {planes: [planeID], arrivals: 0, departures: +passengers};
                    else if (!towns[town].planes.includes(planeID)) {
                        towns[town].planes.push(planeID);
                        towns[town].departures += +passengers;
                    } else towns[town].departures += +passengers;
                }
                break;
            }
            default: { break; }
        }
    }

    console.log("Planes left:");
    planes.sort((a, b) => a.localeCompare(b)).forEach(plane => console.log(`- ${plane}`));

    for (let [city, { planes, arrivals, departures }] of Object.entries(towns)) planes.sort((a, b) => a.localeCompare(b));

    Object.keys(towns).sort((a, b) => {
        if (towns[a].arrivals < towns[b].arrivals) return 1;
        if (towns[b].arrivals < towns[a].arrivals) return -1;
        return a.localeCompare(b);
    }).forEach(city => {
        console.log(`${city}`);
        console.log(`Arrivals: ${towns[city].arrivals}`);
        console.log(`Departures: ${towns[city].departures}`);
        console.log(`Planes:`);
        towns[city].planes.forEach(plane => console.log(`-- ${plane}`));
    });
}

// airport([
//     "Boeing474 Madrid 300 land",
//     "AirForceOne WashingtonDC 178 land",
//     "Airbus London 265 depart",
//     "ATR72 WashingtonDC 272 land",
//     "ATR72 Madrid 135 depart"]);
// console.log("-----------------------------------------------------------------------");
// airport([
//     "Airbus Paris 356 land",
//     "Airbus London 321 land",
//     "Airbus Paris 213 depart",
//     "Airbus Ljubljana 250 land"]);
airport([
    "Airbus London 100 land",
    "Airbus Paris 200 depart",
    "Airbus Madrid 130 depart",
    "Airbus Lisbon 403 depart",
    "Airbus Moscow 505 depart",
    "Airbus Sofia 16 depart",
]);