function mtjsg(lines) {
    let data = {}, points = {}, sortedPoints = {}, output = {};

    for (let line of lines) {
        let [name, type, taskNumber, score, codeLines] = line.split(' & ');

        if (!data["Task " + taskNumber]) {
            data["Task " + taskNumber] = {tasks: [{name, type}]};
            points["Task " + taskNumber] = {countOfTasks: 1, score: +score, lines: +codeLines};
        } else {
            data["Task " + taskNumber].tasks.push({name, type});
            points["Task " + taskNumber].score += +score;
            points["Task " + taskNumber].lines += +codeLines;
            points["Task " + taskNumber].countOfTasks++;
        }
    }

    for (const [key, {countOfTasks, score, lines}] of Object.entries(points)) points[key].average = parseFloat((score / countOfTasks).toFixed(2));
    for (const [task, {tasks}] of Object.entries(data)) {
        data[task].tasks.sort((a, b) => a.name.localeCompare(b.name));
    }
    sortedPoints = Object.keys(points).sort((a, b) => {
        if (points[b].average !== points[a].average) return points[b].average - points[a].average;
        return points[a].lines - points[b].lines;
    });
    for (const task of sortedPoints) {
        output[task] = {tasks: data[task].tasks, average: points[task].average, lines: points[task].lines};
    }

    console.log(JSON.stringify(output));
}

mtjsg(["Array Matcher & strings & 4 & 100 & 38",
    "Magic Wand & draw & 3 & 100 & 15",
    "Dream Item & loops & 2 & 88 & 80",
    "Knight Path & bits & 5 & 100 & 65",
    "Basket Battle & conditionals & 2 & 100 & 120",
    "Torrent Pirate & calculations & 1 & 100 & 20",
    "Encrypted Matrix & nested loops & 4 & 90 & 52",
    "Game of bits & bits & 5 &  100 & 18",
    "Fit box in box & conditionals & 1 & 100 & 95",
    "Disk & draw & 3 & 90 & 15",
    "Poker Straight & nested loops & 4 & 40 & 57",
    "Friend Bits & bits & 5 & 100 & 81"]);