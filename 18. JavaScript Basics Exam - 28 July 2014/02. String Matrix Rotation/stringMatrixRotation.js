function stringMatrixRotation(input) {
    const match = input[0].match(/Rotate\((\d+)\)/);
    const degrees = parseInt(match[1]) % 360;
    const lines = input.slice(1);
    const maxLen = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const matrix = lines.map(line => line.padEnd(maxLen, ' '));

    let rotated;
    switch (degrees) {
        case 0:
            rotated = matrix;
            break;
        case 90:
            rotated = [];
            for (let col = 0; col < maxLen; col++) {
                let rowStr = '';
                for (let row = matrix.length - 1; row >= 0; row--) {
                    rowStr += matrix[row][col];
                }
                rotated.push(rowStr);
            }
            break;
        case 180:
            rotated = matrix
                .slice()
                .reverse()
                .map(line => [...line].reverse().join(''));
            break;
        case 270:
            rotated = [];
            for (let col = maxLen - 1; col >= 0; col--) {
                let rowStr = '';
                for (let row = 0; row < matrix.length; row++) {
                    rowStr += matrix[row][col];
                }
                rotated.push(rowStr);
            }
            break;
        default:
            console.log("Rotation must be a multiple of 90.");
            return;
    }

    rotated.forEach(line => console.log(line));
}

stringMatrixRotation(["Rotate(90)",
    "hello",
    "softuni",
    "exam"]);
console.log("-----------------------------------------------------");
stringMatrixRotation(["Rotate(180)",
    "hello",
    "softuni",
    "exam"]);
console.log("-----------------------------------------------------");
stringMatrixRotation(["Rotate(270)",
    "hello",
    "softuni",
    "exam"]);
console.log("-----------------------------------------------------");
stringMatrixRotation(["Rotate(720)",
    "js",
    "exam"]);
console.log("-----------------------------------------------------");
stringMatrixRotation(["Rotate(810)",
    "js",
    "exam"]);
console.log("-----------------------------------------------------");
stringMatrixRotation(["Rotate(0)",
    "js",
    "exam"]);