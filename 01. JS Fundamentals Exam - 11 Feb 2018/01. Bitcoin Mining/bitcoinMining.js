function bitcoinMining(input) {
    input = input.map(Number);
    const bitcoin = 11949.16, gold = 67.51;
    let count = 0, day = 0, money = 0;

    for (let i = 1; i <= input.length; i++) {
        money += i % 3 === 0 ? (input[i - 1] * 0.7) * gold : input[i - 1] * gold;

        while (bitcoin <= money) {
            if (day === 0) day = i;
            count++;
            money -= 11949.16;
        }
    }

    console.log(`Bought bitcoins: ${count}`);
    if (0 < count) console.log(`Day of the first purchased bitcoin: ${day}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining(['100', '200', '300']);
console.log("----------------------------------------------------");
bitcoinMining(['50', '100']);
console.log("----------------------------------------------------");
bitcoinMining(['3124.15', '504.212', '2511.124']);