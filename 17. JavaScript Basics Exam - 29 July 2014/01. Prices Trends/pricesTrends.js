function pricesTrends(arr) {
    let previousPrice = -1, html = `<table>\n<tr><th>Price</th><th>Trend</th></tr>\n`;

    arr.filter(x => 0 < x.length).map(x => x = Number(x).toFixed(2)).forEach((x, i) => {
        if (0 === i || previousPrice === x) html += `<tr><td>${x}</td><td><img src="fixed.png"/></td></td>\n`;
        else if (Number(previousPrice) < Number(x)) html += `<tr><td>${x}</td><td><img src="up.png"/></td></td>\n`;
        else html += `<tr><td>${x}</td><td><img src="down.png"/></td></td>\n`;
        previousPrice = x;
    });
    console.log(html + "</table>");
}

// pricesTrends(["50", "60"]);
// console.log("----------------------------------------------------------");
// pricesTrends(["36.333",
//     "36.5",
//     "37.019",
//     "35.4",
//     "35",
//     "35.001",
//     "36.225"]);
pricesTrends(["1.33",
"1.35",
"2.25",
"13.00",
"0.5",
"0.51",
"0.5",
"0.5",
"0.33",
"1.05",
"1.346",
"20",
"900",
"1500.1",
"1500.10",
"2000"])