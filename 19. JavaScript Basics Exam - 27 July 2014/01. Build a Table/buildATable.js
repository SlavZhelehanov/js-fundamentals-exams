function buildTable(params) {
    function isPerfectSquare(x) {
        let sqrt = parseInt(Math.sqrt(x));
        return sqrt * sqrt == x;
    }

    function isFibonacci(n) {
        return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
    }
    let [start, end] = params.map(Number), table = `<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>`;

    for (let i = start; i <= end; i++) table += `\n<tr><td>${i}</td><td>${i * i}</td><td>${isFibonacci(i) ? "yes" : "no"}</td></tr>`;
    console.log(table + "\n</table>");
}