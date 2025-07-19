function ewoksFans(params) {
    const people = { fans: new Date('1973.05.26'), haters: new Date('1900.01.02') };
    let fans = [], haters = [];

    params.forEach(element => {
        const [DD, MM, YY] = element.split('.').map(Number);
        let dt = new Date();

        dt.setFullYear(YY);
        dt.setMonth(MM - 1, DD);

        if (new Date('1973.05.26') <= dt && dt < new Date('2015.01.02')) fans.push(dt);
        if (new Date('1900.01.02') < dt && dt < new Date('1973.05.26')) haters.push(dt);
    });

    if (fans.length === 0 && haters.length === 0) console.log("No result");
    if (0 < fans.length) {
        fans = fans.sort((a, b) => b - a)[0];
        console.log(`The biggest fan of ewoks was born on ${fans.toDateString()}`);
    }
    if (0 < haters.length) {
        haters = haters.sort((a, b) => a - b)[0];
        console.log(`The biggest hater of ewoks was born on ${haters.toDateString()}`);
    }
}