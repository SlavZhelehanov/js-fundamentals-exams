function HTMLStrictMode(params) {
    let output = [];
    for (const str of params) if(str.match(/^([<])([\w]+[>])+(.+)(\1[\/]\2)$/g)) output.push(str.replace(/(<([^>]+)>)/ig, ''));
    console.log(output.join(' '));
}