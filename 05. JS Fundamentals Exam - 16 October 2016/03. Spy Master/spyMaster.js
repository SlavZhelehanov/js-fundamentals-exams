function spyMaster(input) {
    const specialKey = input[0];
    const textLines = input.slice(1);
    const pattern = new RegExp(`(^|\\s)(${specialKey})(\\s+)([A-Z!%$#]{8,})(?=\\s|\\.|,|$)`, 'gi');
    const decode = (msg) =>
        msg
            .replace(/!/g, '1')
            .replace(/%/g, '2')
            .replace(/#/g, '3')
            .replace(/\$/g, '4')
            .toLowerCase();

    for (let i = 0; i < textLines.length; i++) {
        textLines[i] = textLines[i].replace(pattern, (match, leadingSpace, key, spaces, encoded) => {
            // Validate encoded strictly
            if (/^[A-Z!%$#]+$/.test(encoded)) {
                const decoded = decode(encoded);
                return `${leadingSpace}${key}${spaces}${decoded}`;
            }
            return match;
        });
    }

    console.log(textLines.join('\n'));
}

spyMaster(["specialKey",
    "In this text the specialKey HELLOWORLD! is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"
]);
console.log("------------------------------------------------------------------------");
spyMaster(["enCode",
    "Some messages are just not encoded what can you do?",
        "RE - ENCODE THEMNOW! - he said.",
        "Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."
]);