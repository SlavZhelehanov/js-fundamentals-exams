function uncleScroogesBag(arr) {
    let totalCoins = 0;

    for (let i = 0; i < arr.length; i++) {
        let [type, value] = arr[i].trim().split(' ').map(el => el = el.trim());
        const isInt = !isNaN(Number(value)) && (Number.isInteger(Number(value)) || Number(value) % 1 === 0);

        if (type.toLowerCase() === "coin" && isInt && 0 <= +value) totalCoins += parseInt(value);
    }
    console.log(`gold : ${Math.floor(totalCoins / 100)}\nsilver : ${Math.floor((totalCoins % 100) / 10)}\nbronze : ${(totalCoins % 100) % 10}\n`);
}

uncleScroogesBag(['coin 1', 'coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500', 'cigars 1']);
console.log("-----------------------------------------------------");
uncleScroogesBag(['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1']);
console.log("-----------------------------------------------------");
uncleScroogesBag(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']);