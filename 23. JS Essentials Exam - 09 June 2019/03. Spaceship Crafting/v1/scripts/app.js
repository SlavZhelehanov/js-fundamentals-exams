function spaceshipCrafting() {
    let theUndefinedShip = 0, NullMaster = 0, JSONCrew = 0, FalseCrew = 0;

    const lossesPercent = (100 - (document.getElementById("lossesPercent").value / 4)) / 100;
    let titanium = Math.round(document.getElementById("titaniumCoreFound").value / 25 * lossesPercent);
    let aluminium = Math.round(document.getElementById("aluminiumCoreFound").value / 50 * lossesPercent);
    let magnesium = Math.round(document.getElementById("magnesiumCoreFound").value / 75 * lossesPercent);
    let carbon = Math.round(document.getElementById("carbonCoreFound").value / 100 * lossesPercent);

    while (true) {
        if (7 <= titanium && 9 <= aluminium && 7 <= magnesium && 7 <= carbon) {
            theUndefinedShip++;
            titanium -= 7;
            aluminium -= 9;
            magnesium -= 7;
            carbon -= 7;
        }
        if (5 <= titanium && 7 <= aluminium && 7 <= magnesium && 5 <= carbon) {
            NullMaster++;
            titanium -= 5;
            aluminium -= 7;
            magnesium -= 7;
            carbon -= 5;
        }
        if (3 <= titanium && 5 <= aluminium && 5 <= magnesium && 2 <= carbon) {
            JSONCrew++;
            titanium -= 3;
            aluminium -= 5;
            magnesium -= 5;
            carbon -= 2;
        }
        if (2 <= titanium && 2 <= aluminium && 3 <= magnesium && 1 <= carbon) {
            FalseCrew++;
            titanium -= 2;
            aluminium -= 2;
            magnesium -= 3;
            carbon -= 1;
        } else break;
    }

    let builtSpaceships = ``,
        availableBars = `${titanium} titanium bars, ${aluminium} aluminum bars, ${magnesium} magnesium bars, ${carbon} carbon bars`;

    if (0 < theUndefinedShip) builtSpaceships += `${theUndefinedShip} THE-UNDEFINED-SHIP`;
    if (0 < NullMaster) builtSpaceships += `, ${NullMaster} NULL-MASTER`;
    if (0 < JSONCrew) builtSpaceships += `, ${JSONCrew} JSON-CREW`;
    if (0 < FalseCrew) builtSpaceships += `, ${FalseCrew} FALSE-FLEET`;

    document.getElementById("availableBars").innerHTML = `<h1>Available Bars</h1>
	<p>${availableBars}</p>`;
    document.getElementById("builtSpaceships").innerHTML = `<h1>Built Spaceships</h1>
	<p>${builtSpaceships}</p>`;
}