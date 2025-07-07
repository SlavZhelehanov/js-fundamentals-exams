function removeXShapes(input) {
    const rows = input.length;
    const cols = Math.max(...input.map(line => line.length));
    const matrix = input.map(line => line.split(''));
    const toRemove = Array.from({ length: rows }, () => Array(cols).fill(false));

    const isSameCharIgnoreCase = (a, b) => a && b && a.toLowerCase() === b.toLowerCase();

    for (let row = 0; row < rows - 2; row++) {
        for (let col = 0; col < cols - 2; col++) {
            const tl = matrix[row][col];
            const tr = matrix[row][col + 2];
            const center = matrix[row + 1][col + 1];
            const bl = matrix[row + 2][col];
            const br = matrix[row + 2][col + 2];

            if (
                isSameCharIgnoreCase(tl, tr) &&
                isSameCharIgnoreCase(tl, center) &&
                isSameCharIgnoreCase(tl, bl) &&
                isSameCharIgnoreCase(tl, br)
            ) {
                toRemove[row][col] = true;
                toRemove[row][col + 2] = true;
                toRemove[row + 1][col + 1] = true;
                toRemove[row + 2][col] = true;
                toRemove[row + 2][col + 2] = true;
            }
        }
    }

    const result = matrix.map((row, r) =>
        row.map((char, c) => (toRemove[r][c] ? '' : char)).join('')
    );

    result.forEach(line => console.log(line));
}

removeXShapes(["abnbjs",
"xoBab",
"Abmbh",
"aabab",
"ababvvvv"]);
console.log("------------------------------------------------------------");
removeXShapes(["8888888",
"08*8*80",
"808*888",
"0**8*8?"]);
console.log("------------------------------------------------------------");
removeXShapes(["^u^",
"j^l^a",
"^w^WoWl",
"adw1w6",
"(WdWoWgPoop)"]);
console.log("-------------------------------------------------------------");
removeXShapes(["puoUdai",
"miU",
"ausupirina",
"8n8i8",
"m8o8a",
"8l8o860",
"M8i8",
"8e8!8?!"]);