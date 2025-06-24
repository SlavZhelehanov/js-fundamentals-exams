function solve(portions, commands) {
    let mealEaten = 0;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === "End") break;
        const [command, prm1, prm2] = commands[i].split(" ");

        switch (command) {
            case "Serve": {
                if (portions.length === 0) break;
                console.log(`${portions.pop()} served!`);
                break;
            }
            case "Eat": {
                if (portions.length === 0) break;
                mealEaten++;
                console.log(`${portions.shift()} eaten`);
                break;
            }
            case "Add": {
                if (!prm1) break;
                portions.unshift(prm1);
                break;
            }
            case "Consume": {
                if (prm1 && prm2 && !isNaN(prm1) && 0 <= +prm1 && +prm1 < portions.length && !isNaN(prm2) && 0 <= +prm2 && +prm2 < portions.length) {
                    const startIndex = +prm1, endIndex = +prm2;
                    portions.splice(startIndex, endIndex - startIndex + 1);
                    mealEaten += endIndex - startIndex + 1;
                    console.log(`Burp!`);
                }
                break;
            }
            case "Shift": {
                if (prm1 && prm2 && !isNaN(prm1) && 0 <= +prm1 && +prm1 < portions.length && !isNaN(prm2) && 0 <= +prm2 && +prm2 < portions.length) {
                    const firstPortion = portions[+prm1];
                    portions[+prm1] = portions[+prm2];
                    portions[+prm2] = firstPortion;
                }
                break;
            }
            default: { break; }
        }
    }

    0 < portions.length ? console.log(`Meals left: ${portions.join(", ")}`) : console.log(`The food is gone`);
    console.log(`Meals eaten: ${mealEaten}`);
}

// solve(['chicken', 'steak', 'eggs'],
//     ['Serve',
//         'Eat',
//         'End',
//         'Consume 0 1']
// );
// console.log("-------------------------------------------------------------------------");
// solve(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
//     ['Add spaghetti',
//         'Shift 0 1',
//         'Consume 1 4',
//         'End']
// );
// console.log("-------------------------------------------------------------------------");
// solve(['carrots', 'apple', 'beet'],
//     ['Consume 0 2',
//         'End',]
// );