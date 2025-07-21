function vladkosNotebook(arr) {
    const notebook = {}, output = {};

    arr.map(m => m.split(/\s*\|\s*/g)).forEach(([color, type, meta]) => {
        if (!notebook[color]) notebook[color] = {wins: 0, losses: 0, opponents: []};
        if (type === "age") notebook[color]["age"] = meta;
        else if (type === "win") {
            notebook[color].opponents.push(meta);
            notebook[color].wins++;
        } else if (type === "loss") {
            notebook[color].losses++;
            notebook[color].opponents.push(meta);
        } else if (type === "name") notebook[color]["name"] = meta;
    });

    for (const key in notebook) {
        notebook[key]['rank'] = ((notebook[key].wins + 1) / (notebook[key].losses + 1)).toFixed(2);
        notebook[key].opponents.sort();
    }

    Object.keys(notebook).sort().forEach(key => {
        if (notebook[key].age && notebook[key].name) output[key] = { age: notebook[key].age, name: notebook[key].name, opponents: notebook[key].opponents, rank: notebook[key].rank };
    });

    console.log(JSON.stringify(output));
}

vladkosNotebook(["purple|age|99",
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