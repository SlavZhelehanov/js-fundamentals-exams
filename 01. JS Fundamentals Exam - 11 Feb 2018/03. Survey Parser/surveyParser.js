function surveyParser(str) {
    let regex = /<svg>(.+)<\/svg>/g;
    let mOne, firstResult = ``, surveyLabel = ``, valueCount = ``, value = 0, count = 0;
    while ((mOne = regex.exec(str)) !== null) {
        if (mOne.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        firstResult = mOne[1];
    }
    if (firstResult === ``) {
        console.log(`No survey found`);
        return;
    }
    regex = /(?:<cat><text>)(?:([\w\W\D\d]*)?)(\[.+])(?:<\/text><\/cat>)( )*((?:<cat><g>))([\w\W\D\d]+)(?:<\/g><\/cat>)/g;
    let mTwo;
    while ((mTwo = regex.exec(firstResult)) !== null) {
        if (mTwo.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        surveyLabel = mTwo[2];
        valueCount = mTwo[5];
    }
    if (surveyLabel === `` || valueCount === ``) {
        console.log(`Invalid format`);
        return;
    }
    regex = /(?:<val>)(\d+)(?:<\/val>)(\d+)/g;
    let mThree;
    while ((mThree = regex.exec(firstResult)) !== null) {
        if (mThree.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        count += Number(mThree[2]);
        value += Number(mThree[2]) * Number(mThree[1]);
    }
    if (value === 0 && count === 0) {
        console.log(`Invalid format`);
        return;
    }
    console.log(surveyLabel.replace(`[`, ``).replace(`]`, ``) + `: ` + parseFloat((value / count).toFixed(2)));
}

surveyParser(`<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>`);
console.log("--------------------------------------------------------------");
surveyParser(`<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>`);
console.log("--------------------------------------------------------------");
surveyParser(`<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>`);
console.log("--------------------------------------------------------------");
surveyParser(`<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>`);