function gameOfEpicness(arrOfObjects, matrixOfStrings) {
    const kingdoms = {};

    for (let i = 0; i < arrOfObjects.length; i++) {
        const {kingdom, general, army} = arrOfObjects[i];

        if (!kingdoms[kingdom]) {
            kingdoms[kingdom] = { totalWins: 0, totalLoses: 0, [general]: { army, wins: 0, defeats: 0 }};
        } else if (!kingdoms[kingdom][general]) {
            kingdoms[kingdom][general] = { army, wins: 0, defeats: 0};
        } else {
            kingdoms[kingdom][general].army += army;
        }
    }

    for (let i = 0; i < matrixOfStrings.length; i++) {
        const [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = matrixOfStrings[i];

        if (attackingKingdom !== defendingKingdom && kingdoms[attackingKingdom][attackingGeneral].army !== kingdoms[defendingKingdom][defendingGeneral].army) {
            if (kingdoms[attackingKingdom][attackingGeneral].army > kingdoms[defendingKingdom][defendingGeneral].army) {
                kingdoms[defendingKingdom][defendingGeneral].defeats++;
                kingdoms[attackingKingdom][attackingGeneral].wins++;
                kingdoms[attackingKingdom].totalWins++;
                kingdoms[defendingKingdom].totalLoses++;
                kingdoms[attackingKingdom][attackingGeneral].army = Math.floor(kingdoms[attackingKingdom][attackingGeneral].army * 1.1);
                kingdoms[defendingKingdom][defendingGeneral].army = Math.floor(kingdoms[defendingKingdom][defendingGeneral].army * 0.9);
            } else {
                kingdoms[attackingKingdom][attackingGeneral].defeats++;
                kingdoms[defendingKingdom][defendingGeneral].wins++;
                kingdoms[defendingKingdom].totalWins++;
                kingdoms[attackingKingdom].totalLoses++;
                kingdoms[attackingKingdom][attackingGeneral].army = Math.floor(kingdoms[attackingKingdom][attackingGeneral].army * 0.9);
                kingdoms[defendingKingdom][defendingGeneral].army = Math.floor(kingdoms[defendingKingdom][defendingGeneral].army * 1.1);
            }
        }
    }

    const winningKingdom = Object.keys(kingdoms).sort((a, b) => {
        if (kingdoms[a].totalWins < kingdoms[b].totalWins) return 1;
        if (kingdoms[b].totalWins < kingdoms[a].totalWins) return -1;
        if (kingdoms[b].totalLoses < kingdoms[a].totalLoses) return 1;
        if (kingdoms[a].totalLoses < kingdoms[b].totalLoses) return -1;
        return a.localeCompare(b);
    })[0];

    console.log(`Winner: ${winningKingdom}`);

    const generals = Object.keys(kingdoms[winningKingdom]).sort((a, b) => {
        if ( a !== "totalWins" && b !== "totalWins" && a !== "totalLoses" && b !== "totalLoses" ) {
            return kingdoms[winningKingdom][b].army - kingdoms[winningKingdom][a].army;
        }
    });

    for (const general of generals) {
        if (general !== "totalWins" && general !== "totalLoses") {
            console.log(`/\\general: ${general}`);
            console.log(`---army: ${kingdoms[winningKingdom][general].army}`);
            console.log(`---wins: ${kingdoms[winningKingdom][general].wins}`);
            console.log(`---losses: ${kingdoms[winningKingdom][general].defeats}`);
        }
    }
}

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);

console.log("----------------------------------------------------------------");
gameOfEpicness([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
);
console.log("-----------------------------------------------------------------");
gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
);