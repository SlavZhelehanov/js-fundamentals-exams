function filterMatrix (input) {
    input = input.filter(f => 0 < f.length);
    let n = +input.pop(), inputRowsLength = [], temp = [];

    for (let i = 0; i < input.length; i++) {
        inputRowsLength.push(input[i].split(' ').length);
        temp.push(input[i]);
    }

    input = [];
    temp = temp.join(' ').split(' ');

    for (let i = 0; i < temp.length; i++) {
        let idxs = [i];

        for (let j = 1; j < n; j++) {
            if (temp[i] === undefined || temp[i + j] === undefined) break;
            if (temp[i] === temp[i + j]) idxs.push(i + j);
        }

        if (idxs.length === n) for (const idx of idxs) temp[idx] = undefined;
    }

    for (const el of inputRowsLength) {
        let arr = [];

        for (let i = 0; i < el; i++) arr.push(temp.shift());
        input.push(arr.filter(f => f !== undefined).join(' '));
    }

    for (const inputElement of input) 0 < inputElement.length ? console.log(inputElement) : console.log("(empty)");
}

filterMatrix(["3 3 3 2 5 9 9 9 9 1 2",
"1 1 1 1 1 2 5 8 1 1 7",
"7 7 1 2 3 5 7 4 4 1 2",
"2"]);
console.log("--------------------------------------------------");
filterMatrix(["1 2 3 3",
"3 5 7 8",
"3 2 2 1",
"3"]);
console.log("--------------------------------------------------");
filterMatrix(["2 1 1 1",
"1 1 1",
"3 7 3 3 1",
"2"]);
console.log("--------------------------------------------------");
filterMatrix(["1 2 3 3 2 1",
"5 2 2 1 1 0",
"3 3 1 3 3",
"2"]);