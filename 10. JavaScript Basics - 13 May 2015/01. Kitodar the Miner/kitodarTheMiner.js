function kitodarTheMiner(input) {
    const mining = {silver: 0, gold: 0, diamonds: 0};

    input = input.map(m => m = m.trim());

    for (let i = 0; i < input.length; i++) {
        if (!input[i].includes('-')) continue;

        input[i] = input[i].trim().split('-');

        if (!input[i][1].includes(':')) continue;

        let [ore, quantity] = input[i][1].trim().split(':').map(n => n = n.trim());

        if (mining.hasOwnProperty(ore)) mining[ore] += +quantity.replace(/\D/g, "");
    }

    console.log(`*Silver: ${mining.silver}\n*Gold: ${mining.gold}\n*Diamonds: ${mining.diamonds}`);
}

kitodarTheMiner(["mine bobovDol - gold: 10\"",
"mine medenRudnik - silver: 22\"",
"mine chernoMore - shrimps : 24\"",
"gold: 50"]);
console.log("-------------------------------------------------");
kitodarTheMiner(["mine bobovdol - gold: 10",
"mine - diamonds: 5",
"mine colas - wood: 10",
"mine myMine - silver:  14",
"mine silver:14 - silver: 14"]);