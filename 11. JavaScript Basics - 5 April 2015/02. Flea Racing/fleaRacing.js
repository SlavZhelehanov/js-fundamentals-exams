function fleaRacing(arr) {
    const allowedJumps = +arr.shift(), lengthOfTheTrack = +arr.shift(), hashtags = '#'.repeat(lengthOfTheTrack), fleas = {}, winner = [];

    console.log(`${hashtags}\n${hashtags}`);

    for (const flea of arr) {
        let [name, jumpDistance] = flea.split(', '), firstLetter = name[0].toUpperCase();
        
        fleas[name] = {s: firstLetter, name, jump: +jumpDistance, distance: 0, wins: 0};
    }
    for (let i = 0; i < allowedJumps; i++) {
        let haveWinner = false;

        for (const flea in fleas) {
            fleas[flea].distance += fleas[flea].jump;

            if (lengthOfTheTrack - 1 <= fleas[flea].distance) {
                haveWinner = true;
                fleas[flea].distance = lengthOfTheTrack - 1;
                fleas[flea].wins = 1;
                break;
            }
        }
        if (haveWinner) break;
    }

    for (const [flea, {s, distance, wins}] of Object.entries(fleas)) {
        let line = '';

        for (let i = 0; i < lengthOfTheTrack; i++) line += i === distance ? s : '.'
        console.log(line);
        winner.push({name: flea, distance, wins});
    }

    console.log(`${hashtags}\n${hashtags}`);
    console.log(`Winner: ${winner.sort((a, b) => {
        if (b.wins < a.wins) return 1;
        if (a.wins < b.wins) return -1;
        return a.distance - b.distance;
    })[winner.length - 1].name}`);
}

fleaRacing(["10",
"19",
"angel, 9",
"Boris, 10",
"Georgi, 3",
"Dimitar, 7"]);
console.log("--------------------------------------------------------------");
fleaRacing(["3",
"5",
"cura, 1",
"Pepi, 1",
"UlTraFlea, 1",
"BOIKO, 1"]);