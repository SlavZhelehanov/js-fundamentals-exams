function rollandGarros(arr) {
    let players = [];

    for (let i = 0; i < arr.length; i++) {
        const [left, right] = arr[i].trim().split(':')
            .map(n => n = n.replace(/\s+/g, ' '))
            .map(n => n = n.trim());
        const [p1, p2] = left.split('vs.').map(n => n.trim());
        const sets = right.split(' ');
        let p1Sets = 0, p2Sets = 0;

        if (!players.some(p => p.name === p1)) players.push({name: p1, matchesWon: 0, matchesLost:0,setsWon:0,setsLost:0,gamesWon:0,gamesLost:0 });
        if (!players.some(p => p.name === p2)) players.push({name: p2, matchesWon: 0, matchesLost:0,setsWon:0,setsLost:0,gamesWon:0,gamesLost:0 });

        for (let j = 0; j < sets.length; j++) {
            const [r1, r2] = sets[j].trim().split('-').map(Number);

            if (r2 < r1) {
                p1Sets++;
                players.find(p => p.name === p1).setsWon++;
                players.find(p => p.name === p1).gamesWon += r1;
                players.find(p => p.name === p1).gamesLost += r2;
                players.find(p => p.name === p2).setsLost++;
                players.find(p => p.name === p2).gamesWon += r2;
                players.find(p => p.name === p2).gamesLost += r1;
            } else {
                p2Sets++;
                players.find(p => p.name === p2).setsWon++;
                players.find(p => p.name === p2).gamesWon += r2;
                players.find(p => p.name === p2).gamesLost += r1;
                players.find(p => p.name === p1).setsLost++;
                players.find(p => p.name === p1).gamesWon += r1;
                players.find(p => p.name === p1).gamesLost += r2;
            }
        }
        if (p2Sets < p1Sets) {
            players.find(p => p.name === p1).matchesWon++;
            players.find(p => p.name === p2).matchesLost++;
        } else {
            players.find(p => p.name === p2).matchesWon++;
            players.find(p => p.name === p1).matchesLost++;
        }
    }
    console.log(JSON.stringify(players.sort((a, b) => {
        if (a.matchesWon < b.matchesWon) return 1;
        if (b.matchesWon < a.matchesWon) return -1;
        if (a.setsWon < b.setsWon) return 1;
        if (b.setsWon < a.setsWon) return -1;
        if (a.gamesWon < b.gamesWon) return 1;
        if (b.gamesWon < a.gamesWon) return -1;
        return a.name.localeCompare(b.name);
    })));
}

rollandGarros(["Novak Djokovic vs. Roger Federer : 6-3 6-3",
"Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3",
"Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7",
"Andy Murray vs. David     Ferrer : 6-4 7-6",
"Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7",
"Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2",
"Pete Sampras vs. Andre Agassi : 2-1",
"Boris Beckervs.Andre        Agassi:2-1"]);