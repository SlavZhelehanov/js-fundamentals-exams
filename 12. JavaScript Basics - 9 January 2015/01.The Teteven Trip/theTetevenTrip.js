function theTetevenTrip(params) {
    params.pop();
    params.forEach(element => {
        let [car, fuel, route, luggageWeight] = element.split(/\s+/);
        let consumption = fuel !== "petrol" ? fuel === "gas" ? 12 : 8 : 10;

        consumption += (luggageWeight * 0.01);
        route === '1' ? consumption = 110 * (consumption / 100) + 10 * ((0.3 * consumption) / 100) : consumption = 95 * (consumption / 100) + 30 * ((0.3 * consumption) / 100);
        console.log(`${car} ${fuel} ${route} ${Math.round(consumption)}`);
    });
}