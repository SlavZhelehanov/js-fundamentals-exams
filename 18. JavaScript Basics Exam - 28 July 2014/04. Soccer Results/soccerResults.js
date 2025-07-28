function soccerResults(params) {
    params.pop();
    function sorter(a, b) {
        if (a === b) return 0;
        if (a.charAt(0) === b.charAt(0)) return sorter(a.slice(1), b.slice(1));
        if (a.charAt(0).toLowerCase() === b.charAt(0).toLowerCase()) {
            if (/^[a-z]/.test(a.charAt(0)) && /^[A-Z]/.test(b.charAt(0))) return -1;
            if (/^[a-z]/.test(b.charAt(0)) && /^[A-Z]/.test(a.charAt(0))) return 1;
        }
        return a.localeCompare(b);
    }

    let data = {}, output = {};

    params.forEach(element => {
        let [teams, goals] = element.split(/\s*:\s*/).map(m => m = m.trim());
        const [homeTeam, awayTeam] = teams.split(/\s*\/\s*/);
        const [homeGoals, awayGoals] = goals.split(/\s*\-\s*/).map(Number);

        if (!data[homeTeam]) data[homeTeam] = { goalsScored: homeGoals, goalsConceded: awayGoals, matchesPlayedWith: [awayTeam] };
        else if (!data[homeTeam].matchesPlayedWith.includes(awayTeam)) {
            data[homeTeam].goalsScored += homeGoals;
            data[homeTeam].goalsConceded += awayGoals;
            data[homeTeam].matchesPlayedWith.push(awayTeam);
        } else {
            data[homeTeam].goalsScored += homeGoals;
            data[homeTeam].goalsConceded += awayGoals;
        }

        if (!data[awayTeam]) data[awayTeam] = { goalsScored: awayGoals, goalsConceded: homeGoals, matchesPlayedWith: [homeTeam] };
        else if (!data[awayTeam].matchesPlayedWith.includes(homeTeam)) {
            data[awayTeam].goalsScored += awayGoals;
            data[awayTeam].goalsConceded += homeGoals;
            data[awayTeam].matchesPlayedWith.push(homeTeam);
        } else {
            data[awayTeam].goalsScored += awayGoals;
            data[awayTeam].goalsConceded += homeGoals;
        }

        data[homeTeam].matchesPlayedWith.sort();
        data[awayTeam].matchesPlayedWith.sort();
    });

    Object.keys(data).sort().forEach(i => output[i] = data[i]);

    console.log(JSON.stringify(output));
}