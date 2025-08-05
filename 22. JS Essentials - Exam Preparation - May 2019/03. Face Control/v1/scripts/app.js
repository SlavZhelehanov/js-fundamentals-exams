function getData() {
    let textarea = JSON.parse(document.querySelector('textarea').value);
    let { criteria, action } = textarea.pop();
    let peopleIn = {}, peopleOut = {}, blacklist = {};

    function criteriaSorting(arr, c) {
        arr.sort((a, b) => { return a[c].localeCompare(b[c]) });
        return arr;
    }

    function objToArr(obj) {
        let arr = [];
        for (const key in obj) arr.push(obj[key]);
        return arr;
    }

    criteria = criteria.trim();
    action = action.trim();

    textarea.forEach(({ firstName, lastName, action }) => {
        const person = firstName + ' ' + lastName;

        switch (action) {
            case "peopleIn": {
                if (!peopleIn[person] && !blacklist[person]) peopleIn[person] = { firstName, lastName };
                break;
            }
            case "peopleOut": {
                if (peopleIn[person]) {
                    peopleOut[person] = { firstName, lastName };
                    delete peopleIn[person];
                }
                break;
            }
            case "blacklist": {
                if (peopleIn[person]) {
                    peopleOut[person] = { firstName, lastName };
                    delete peopleIn[person];
                }
                blacklist[person] = { firstName, lastName };
                break;
            }
            default: { break; }
        }
    });

    peopleIn = objToArr(peopleIn);
    peopleOut = objToArr(peopleOut);
    blacklist = objToArr(blacklist);

    if (0 < criteria.length && 0 < action.length) {
        switch (action) {
            case "peopleIn": {
                peopleIn = criteriaSorting(peopleIn, criteria);
                break;
            }
            case "peopleOut": {
                peopleOut = criteriaSorting(peopleOut, criteria);
                break;
            }
            case "blacklist": {
                blacklist = criteriaSorting(blacklist, criteria);
                break;
            }
            default: { break; }
        }
    }

    document.getElementById("peopleIn").innerHTML = `<h1>People in</h1>\n<p>${peopleIn.map(m => m = JSON.stringify(m)).join(' ')}</p>`;
    document.getElementById("blacklist").innerHTML = `<h1>Blacklist</h1>\n<p>${blacklist.map(m => m = JSON.stringify(m)).join(' ')}</p>`;
    document.getElementById("peopleOut").innerHTML = `<h1>People out</h1>\n<p>${peopleOut.map(m => m = JSON.stringify(m)).join(' ')}</p>`;
}