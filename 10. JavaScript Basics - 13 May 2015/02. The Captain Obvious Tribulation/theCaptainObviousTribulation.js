function theCaptainObviousTribulation([first, second]) {
    let words = {}, output = [];

    first = first.match(/\b[a-zA-Z']+\b/g);

    for (const word of first) {
        if (!words.hasOwnProperty(word.toLowerCase())) words[word.toLowerCase()] = 1;
        else words[word.toLowerCase()]++;
    }

    words = Object.fromEntries(Object.entries(words).filter(([key, value]) => 3 <= value));

    if (0 === Object.keys(words).length) return console.log("No words");

    second = second.split(/(?<=[.!?])\s+/);

    for (let sentence of second) {
        let dumi = new Set(sentence.match(/\b[a-zA-Z']+\b/g).map(w => w.toLowerCase())), count = 0;

        for (const word of dumi) if (words.hasOwnProperty(word)) count++;
        if (1 < count) output.push(sentence);
    }

    if (0 === output.length) return console.log("No sentences");
    console.log(output.join('\n'));
}

// theCaptainObviousTribulation(["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
//     "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."]);
// console.log("-------------------------------------------------------------");
// theCaptainObviousTribulation(["Why, why is he so crazy, so so crazy? Why?",
//     "There are no words that you should be matching. You should be careful."]);
theCaptainObviousTribulation(["Lorem ipsum dolor sit amet, sale errem nam no, dictas scaevola posidonium id per. Cibo rebum eloquentiam in per, est vide suavitate et? Duo eu nostro dolorum eloquentiam, at mei libris prompta expetendis, ius hinc vero fabulas ad. Duo natum putant voluptatum ei. Vix option offendit erroribus no, his no meis menandri, ne sea cibo choro dicam. Mei agam consul electram at, vel te iisque regione! Brute adversarium consequuntur in ius, ius ex essent meliore. Sea no modus omnesque expetenda, vix ludus ceteros id, per ancillae voluptatum definitionem ea? Id vis tota dicam exerci, mea mollis expetenda ei? Vel no tation partiendo, eu nam dolore pertinax adversarium, ea sea ludus atomorum! Vix option suscipiantur concludaturque id. His elit vitae explicari ne. Duo ut nonumy iisque pertinax, ut meis zril mel?",
"Lorem ipsum dolor sit amet, ut accumsan adipisci nam! Has oratio docendi vulputate ei, ut vis vidit ceteros. Vel eu dolor oblique, ea quot unum vel. Sint convenire at his, tempor constituam est ex. Cibo epicuri ne est, per no convenire erroribus patrioque, has te utamur oblique scaevola! No euismod senserit concludaturque has? Ei legere commodo appellantur duo, assum ponderum eu sea, nulla graece no duo? Et erant eirmod propriae his, qui invenire scripserit efficiantur ut. Integre referrentur mea at. At amet ocurreret qui, cum libris possim praesent ea, velit legere viderer an his? Vim quis solet eirmod cu. Saperet perfecto cum eu, dicant ornatus vix ne. Discere euismod detraxit has ex, sea cibo legere adolescens cu, pro eu alii elit. Ex probatus signiferumque vel? Id vix audiam delectus necessitatibus, quod ocurreret disputationi eos cu. Mea eu animal fabellas sensibus, ut sit paulo torquatos! Oratio forensibus ut ius, sed scaevola torquatos definitionem an. Everti option atomorum cu quo, vix tempor postea tincidunt ea, eu viderer aliquid democritum mel. Sed dicta abhorreant contentiones ne, sed laoreet invenire democritum cu! Per laudem sententiae ea! Nam numquam commune vulputate ex. Ridens verear disputando qui eu, per in debitis accusamus consetetur, et nec hinc nostrum evertitur? Id est iuvaret mediocrem, fastidii pertinax consectetuer sit ei, has quaeque eruditi an? Liber abhorreant argumentum nam te, eos in inimicus mnesarchum."]);