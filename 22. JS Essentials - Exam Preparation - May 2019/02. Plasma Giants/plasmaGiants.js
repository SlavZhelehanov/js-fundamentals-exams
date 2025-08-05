function plasmaGiants(array, cutSize) {
    if (cutSize === 0) {
        console.log("Cut size cannot be zero.");
        return;
    }

    const mid = array.length / 2;
    const firstHalf = array.slice(0, mid);
    const secondHalf = array.slice(mid);

    function chunkAndProduct(part) {
        const chunks = [];
        for (let i = 0; i < part.length; i += cutSize) {
            const chunk = part.slice(i, i + cutSize);
            const product = chunk.reduce((a, b) => a * b, 1);
            chunks.push(product);
        }
        return chunks;
    }

    const firstGiantChunks = chunkAndProduct(firstHalf);
    const secondGiantChunks = chunkAndProduct(secondHalf);
    let firstGiant = firstGiantChunks.reduce((a, b) => a + b, 0);
    let secondGiant = secondGiantChunks.reduce((a, b) => a + b, 0);
    const minDamage = Math.min(...array);
    const maxThreshold = Math.max(...array);
    let rounds = 1;

    while (firstGiant > maxThreshold && secondGiant > maxThreshold) {
        firstGiant -= minDamage;
        secondGiant -= minDamage;
        rounds++;
    }
    
    if (firstGiant <= maxThreshold && secondGiant <= maxThreshold) {
        console.log(`Its a draw ${firstGiant} - ${secondGiant}`);
    } else if (firstGiant <= maxThreshold) {
        console.log(`Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`);
    } else {
        console.log(`First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`);
    }
}



plasmaGiants([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
console.log("----------------------------------------------------------");
plasmaGiants([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);