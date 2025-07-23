function theNumbers(params) {
    params = params[0];
    const regex = /(\d+)/gm;
    let m, messages = [];

    while ((m = regex.exec(params)) !== null) {
        if (m.index === regex.lastIndex) regex.lastIndex++;

        m.forEach((match, groupIndex) => {
            if (groupIndex === 1) {
                let str = (+match).toString(16).toUpperCase();

                while (str.length < 4) str = 0 + str;
                messages.push(`0x${str}`);
            }
        });
    }
    console.log(messages.join('-'));
}