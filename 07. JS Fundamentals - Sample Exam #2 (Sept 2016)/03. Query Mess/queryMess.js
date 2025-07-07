function queryMess(input) {
    for (let i = 0; i < input.length; i++) {
        while (input[i].includes("+")) input[i] = input[i].replace("+", " ");
        while (input[i].includes("%20")) input[i] = input[i].replace("%20", " ");
        while (input[i].includes("  ")) input[i] = input[i].replace("  ", " ");

        let output = {}, message = '';

        input[i] = input[i].split("&").map(m => m = m.split("?"));

        for (let j = 0; j < input[i].length; j++) {
            for (let k = 0; k < input[i][j].length; k++) {
                if (input[i][j][k].includes("=")) {
                    const [key, value] = input[i][j][k].split("=").map(m => m = m.trim());

                    if (!output[key]) output[key] = [value];
                    else output[key].push(value);
                }
            }
        }
        for (const [field, arr] of Object.entries(output)) message += `${field}=[${arr.join(", ")}]`;
        console.log(message);
    }
}

queryMess(["login=student&password=student"]);
console.log("-----------------------------------------------------------------");
queryMess(["field=value1&field=value2&field=value3", "http://example.com/over/there?name=ferret"]);
console.log("-----------------------------------------------------------------");
queryMess(["foo=%20foo&value=+val&foo+=5+%20+203",
"foo=poo%20&value=valley&dog=wow+",
"url=https://softuni.bg/trainings/coursesinstances/details/1070",
"https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php"]);