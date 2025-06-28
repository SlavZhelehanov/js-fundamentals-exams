function revealTriangles(params) {
    let output = params.map(m => m = m.split(''));
    
    for (let row = 1; row < params.length; row++) {
        let maxCol = Math.min(params[row - 1].length - 2, params[row].length - 3);
        
        for (let col = 0; col <= maxCol; col++) {
            let a = params[row][col];
            let b = params[row][col + 1];
            let c = params[row][col + 2];
            let d = params[row - 1][col + 1];
            if (a == b && b == c & c == d) {
                output[row][col] = '*';
                output[row][col + 1] = '*';
                output[row][col + 2] = '*';
                output[row - 1][col + 1] = '*';
            }
        }
    }
    
    for (let row = 0; row < params.length; row++) console.log(output[row].join(''));
}