function daggersAndSwords(input) {
    input = input.filter(el => 0 < el.length).map(Number).filter(el => 10 < el);
    let output = `<table border="1">
<thead>
<tr><th colspan="3">Blades</th></tr>
<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>
</thead>
<tbody>`;

    for (let el of input) {
        el = Math.floor(+el);

        let type = 40 < el ? 'sword' : 'dagger', blade;

        if (el % 5 === 0) blade = '*rap-poker';
        else if (el % 5 === 1 ) blade = 'blade';
        else if (el % 5 === 2) blade = 'quite a blade';
        else if (el % 5 === 3) blade = 'pants-scraper';
        else blade = 'frog-butcher';

        output += `\n<tr><td>${el}</td><td>${type}</td><td>${blade}</td></tr>`;
    }

    console.log(output + `\n</tbody>\n</table>`);
}

// daggersAndSwords(["17.8",
// "19.4",
// "13",
// "55.8",
// "126.96541651",
// "3"]);
daggersAndSwords(["17.8",
"19.4",
"13",
"55.8",
"126.96541651",
"3", ""])