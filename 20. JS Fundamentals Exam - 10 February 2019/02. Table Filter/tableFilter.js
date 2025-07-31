function tableFilter(matrix, command) {
    command = command.split(' ');
    const header = matrix[0].indexOf(command[1]);

    if (command[0] === 'hide') {
        for (let x = 0; x < matrix.length; x++) {
            matrix[x].splice(header, 1);
            console.log(matrix[x].join(' | '));
        }
    } else if (command[0] === "sort") {
        console.log(matrix.shift().join(' | '));
        matrix.sort((a, b) => { return a[header].localeCompare(b[header]) }).forEach(element => {
            console.log(element.join(' | '));
        });
    } else if (command[0] === "filter") {
        const value = command[2];
        console.log(matrix.shift().join(' | '));
        matrix.filter(f => f[header] === value).forEach(element => console.log(element.join(' | ')));
    }
}