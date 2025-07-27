function doubleRakiyaNumbers([start, end]) {
    let html = "<ul>\n";

    function isDRN(arr) {
        if (arr.length < 4) return false;

        let couples = [];

        for (let i = 0; i < arr.length; i++) {
            if (couples.includes(arr[i+1] + arr[i + 2])) return true;
            else couples.push(arr[i] + arr[i + 1]);
        }
        return false;
    }

    for (let i = +start; i <= +end; i++) {
        const className = isDRN((i + '').split('')) ? 'rakiya' : 'num';
        const value = isDRN((i + '').split('')) ? `<a href="view.php?id=${i}>View</a>` : '';

        html += `<li><span class='${className}'>${i}</span>${value}</li>\n`;
    }
    console.log(html + "</ul>");
}

doubleRakiyaNumbers(["5", "8"]);
console.log("----------------------------------------");
doubleRakiyaNumbers(["11210", "11215"]);
console.log("----------------------------------------");
doubleRakiyaNumbers(["55555", "55560"])