function studentProtocol(arr) {
    const exams = {};

    for (let i = 0; i < arr.length; i++) {
        let [studentExam, result] = arr[i].split(':').map(x => x = x.trim());

        result = +result;

        if (0 <= result && result <= 400) {
            const [student, exam] = studentExam.split('-').map(x => x.trim());

            if (!exams.hasOwnProperty(exam)) exams[exam] = [{name: student, result, makeUpExams: 0}];
            else if (!exams[exam].some(person => person.name === student)) exams[exam].push({name: student, result, makeUpExams: 0 });
            else if (exams[exam].find(person => person.name === student).result < result) {
                exams[exam].find(person => person.name === student).result = result;
                exams[exam].find(person => person.name === student).makeUpExams++;
            } else exams[exam].find(person => person.name === student).makeUpExams++;
        }
    }

    for (const course in exams) {
        exams[course].sort((a, b) => {
            if (a.result < b.result) return 1;
            if (b.result < a.result) return -1;
            if (b.makeUpExams < a.makeUpExams) return 1;
            if (a.makeUpExams < b.makeUpExams) return -1;
            return a.name.localeCompare(b.name);
        });
    }

    console.log(JSON.stringify(exams));
}

studentProtocol(["Peter Jackson - Java : 350",
    "Jane - JavaScript : 200",
    "Jane     -    JavaScript :     400",
    "Simon Cowell - PHP : 100",
    "Simon Cowell-PHP: 500",
    "Simon Cowell - PHP : 200"]);
console.log("------------------------------------------------------");
studentProtocol(["Simon Cowell - PHP : 100",
    "Simon Cowell-PHP: 500",
    "Peter Jackson - PHP: 350",
    "Simon Cowell - PHP : 400"]);