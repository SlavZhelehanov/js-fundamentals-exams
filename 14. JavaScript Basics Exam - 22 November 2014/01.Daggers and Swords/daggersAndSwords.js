function daggersAndSwords(params) {
    params = params.map(Number).map(m => m = Math.floor(m)).filter(f => 10 < f);

    let output = `<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>
<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n`;

    for (const i of params) {
        if (i % 5 === 0) output += `<tr><td>${i}</td><td>${40 < i ? 'sword' : 'dagger'}</td><td>*rap-poker</td></tr>\n`;
        else if (i % 5 === 4) output += `<tr><td>${i}</td><td>${40 < i ? 'sword' : 'dagger'}</td><td>frog-butcher</td></tr>\n`;
        else if (i % 5 === 3) output += `<tr><td>${i}</td><td>${40 < i ? 'sword' : 'dagger'}</td><td>pants-scraper</td></tr>\n`;
        else if (i % 5 === 2) output += `<tr><td>${i}</td><td>${40 < i ? 'sword' : 'dagger'}</td><td>quite a blade</td></tr>\n`;
        else output += `<tr><td>${i}</td><td>${40 < i ? 'sword' : 'dagger'}</td><td>blade</td></tr>\n`;
    }

    console.log(output + `</tbody>\n</table>`);
}