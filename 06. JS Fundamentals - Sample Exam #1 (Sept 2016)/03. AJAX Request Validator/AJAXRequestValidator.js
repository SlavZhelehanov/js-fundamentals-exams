function ajaxRequestValidator(input) {
    input.pop();
    const hashPattern = input.pop(), responses = [], hashRules = [], hashRegex = /(\d)([a-zA-Z])/g;
    let match;

    while ((match = hashRegex.exec(hashPattern)) !== null) hashRules.push({ count: parseInt(match[1]), char: match[2] });

    for (let i = 0; i < input.length; i += 3) {
        const methodLine = input[i], credentialsLine = input[i + 1], contentLine = input[i + 2];
        const methodMatch = methodLine.match(/^Method: (GET|POST|PUT|DELETE)$/);
        const credentialsMatch = credentialsLine.match(/^Credentials: (Basic|Bearer) ([a-zA-Z0-9]+)$/);
        const contentMatch = contentLine.match(/^Content: ([a-zA-Z0-9.]+)$/);

        if (!methodMatch || !credentialsMatch || !contentMatch) {
            responses.push("Response-Code:400");
            continue;
        }

        const method = methodMatch[1], authType = credentialsMatch[1], authToken = credentialsMatch[2];

        if (method !== "GET" && authType === "Basic") {
            responses.push(`Response-Method:${method}&Code:401`);
            continue;
        }

        let valid = false;

        for (const rule of hashRules) {
            const count = (authToken.match(new RegExp(rule.char, 'g')) || []).length;

            if (count === rule.count) {
                valid = true;
                break;
            }
        }

        if (!valid) {
            responses.push(`Response-Method:${method}&Code:403`);
            continue;
        }

        responses.push(`Response-Method:${method}&Code:200&Header:${authToken}`);
    }

    responses.forEach(response => console.log(response));
}

ajaxRequestValidator(["Method: GET",
"Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB",
"Content: users.asd.1782452.278asd",
"Method: POST",
"Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas",
"Content: Johnathan",
"2q"]);
console.log("--------------------------------------------------------------------------------------------------");
ajaxRequestValidator(["Method: PUT",
"Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB",
"Content: users.asd/1782452$278///**asd123",
"Method: POST",
"Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas",
"Content: Johnathan",
"Method: DELETE",
"Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx",
"Content: This.is.a.sample.content",
"2e5g"]);