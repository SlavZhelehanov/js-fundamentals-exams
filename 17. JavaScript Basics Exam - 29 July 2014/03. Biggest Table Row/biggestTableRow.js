function biggestTableRow(params) {
    let regex = /<td>([0-9.-]+)<\/td>/gm, data = {};

    for (let i = 2; i < params.length - 1; i++) {
        let m, sum = 0, nums = [];

        while ((m = regex.exec(params[i])) !== null) {
            if (m.index === regex.lastIndex) regex.lastIndex++;

            m.forEach((match, groupIndex) => {
                if (groupIndex === 1 && !isNaN(match)) {
                    sum += +match;
                    nums.push(match);
                }
            });
        }

        if (0 < nums.length && !data[sum]) data[sum] = { nums, sum };
    }

    if (Object.keys(data).length === 0) console.log("no data");
    else {
        const f = Object.keys(data).sort((a, b) => b - a)[0];
        console.log(`${+f} = ${data[f].nums.join(' + ')}`);
    }
}