function useYourChainsBuddy(params) {
    const regex = /(?<=<p>)(.*?)(?=<\/p>)/gm;
    let arr, output = '';

    while ((arr = regex.exec(params[0])) !== null) output += arr[0];
    output = output.replace(/[^a-z0-9]/g, " ").replace(/\s+/g, " ").split('');

    for (let i = 0; i < output.length; i++) {
        if (96 < output[i].charCodeAt(0) && output[i].charCodeAt(0) < 110) {
            output[i] = String.fromCharCode(output[i].charCodeAt(0) + 13);
        } else if (109 < output[i].charCodeAt(0) && output[i].charCodeAt(0) < 123) {
            output[i] = String.fromCharCode(output[i].charCodeAt(0) - 13);
        }
    }

    console.log(output.join(''));
}