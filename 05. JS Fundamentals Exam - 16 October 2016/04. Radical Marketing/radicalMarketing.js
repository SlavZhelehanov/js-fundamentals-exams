function radicalMarketing(commands) {
    const log = {}, order = [];

    for (const line of commands) {
        const [first, second] = line.split('-');

        if (!second && !log[first]) {
            log[first] = { subscribers: [], following: new Set() };
            order.push(first);
        } else if (first !== second && log[first] && log[second] && !log[second].subscribers.includes(first)) {
            log[second].subscribers.push(first);
            log[first].following.add(second);
        }
    }

    const sorted = Object.entries(log).sort((a, b) => {
        const [nameA, dataA] = a;
        const [nameB, dataB] = b;

        const subA = dataA.subscribers.length;
        const subB = dataB.subscribers.length;

        if (subB !== subA) return subB - subA;

        const followA = dataA.following.size;
        const followB = dataB.following.size;

        if (followB !== followA) return followB - followA;

        return order.indexOf(nameA) - order.indexOf(nameB);
    });

    const [bestPerson, bestData] = sorted[0];
    console.log(bestPerson);
    bestData.subscribers.forEach((sub, index) => {
        console.log(`${index + 1}. ${sub}`);
    });
}

radicalMarketing(["A",
    "B",
    "C",
    "D",
    "A-B",
    "B-A",
    "C-A",
    "D-A",
]);
console.log("------------------------------------------------------------------------");
radicalMarketing(["J",
    "G",
    "P",
    "R",
    "C",
    "J-G",
    "G-J",
    "P-R",
    "R-P",
    "C-J"
]);