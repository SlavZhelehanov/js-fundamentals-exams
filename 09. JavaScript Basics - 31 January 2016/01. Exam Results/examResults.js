function examResults(input) {
    input = input.filter(f => 0 < f.length).map(m => m = m.trim());
    let courseName = input.pop(), averagePoints = 0, n = 0;

    for(let i = 0; i < input.length; i++) {
        let [student, course, examPoints, courseBonuses] = input[i].split(' ').filter(f => 0 < f.length).map(m => m = m.trim());

        if (course === courseName) {
            n++;
            averagePoints += +examPoints;
        }
        if (+examPoints < 100) console.log(`${student} failed at "${course}"`);
        else {
            const points = parseFloat(((examPoints / 5) + +courseBonuses).toFixed(2));
            const grade = (((((examPoints / 5) + +courseBonuses) / 80) * 4) + 2).toFixed(2);

            console.log(`${student}: Exam - "${course}"; Points - ${points}; Grade - ${6 < grade ? "6.00" : grade}`);
        }
    }
    console.log(`"${courseName}" average points -> ${parseFloat((averagePoints / n).toFixed(2))}`);
}

// examResults(["Pesho C#-Advanced 100 3",
// "Gosho Java-Basics 157 3",
// "Tosho HTML&CSS 317 12",
// "Minka C#-Advanced 57 15",
// "Stanka C#-Advanced 157 15",
// "Kircho C#-Advanced 300 0",
// "Niki C#-Advanced 400 10",
// "C#-Advanced"]);

examResults(["   EDUU    JS-Basics                317          15         ",
"           RoYaL        HTML5        121         10        ",
"ApovBerger      OOP   0    10     ",
"Stamat OOP   190 10",
"MINKA OOP   230 10",
"   OOP"])