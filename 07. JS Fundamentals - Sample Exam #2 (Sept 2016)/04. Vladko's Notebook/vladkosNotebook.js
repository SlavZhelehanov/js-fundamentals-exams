function vladkoNotebook(input) {
    input = input.filter(f => 0 < f.length);
    const data = {}, output = {};

    for (const line of input) {
        const [color, key, value] = line.split('|');

        if (!data[color]) {
            data[color] = {
                age: null,
                name: null,
                opponents: [],
                wins: 0,
                losses: 0
            };
        }

        if (key === 'win') {
            data[color].wins++;
            data[color].opponents.push(value);
        } else if (key === 'loss') {
            data[color].losses++;
            data[color].opponents.push(value);
        } else if (key === 'name') {
            data[color].name = value;
        } else if (key === 'age') {
            data[color].age = value;
        }
    }

    for (const color in data) {
        const player = data[color];

        if (player.name !== null && player.age !== null) {
            output[color] = {
                age: player.age,
                name: player.name,
                opponents: player.opponents.sort((a, b) => a.localeCompare(b)),
                rank: ((player.wins + 1) / (player.losses + 1)).toFixed(2)
            };
        }
    }

    console.log(JSON.stringify(output));
}

vladkoNotebook(["purple|age|99",
"red|age|44",
"blue|win|pesho",
"blue|win|mariya",
"purple|loss|Kiko",
"purple|loss|Kiko",
"purple|loss|Kiko",
"purple|loss|Yana",
"purple|loss|Yana",
"purple|loss|Manov",
"purple|loss|Manov",
"red|name|gosho",
"blue|win|Vladko",
"purple|loss|Yana",
"purple|name|VladoKaramfilov",
"blue|age|21",
"blue|loss|Pesho"]);