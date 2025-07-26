function studentsCoursesGrades(params) {
    params.pop() //Този ред е добавен заради judge system
    let data = {}, output = {};

    params.forEach(element => {
        let [studentName, course, grade, visits] = element.split(/\s*\|\s*/).map(m => m = m.trim());
        grade = +grade; visits = +visits;

        if (!data[course]) data[course] = { totalGrades: 0, gradesCount: 0, visitsCount: 0, totalVisits: 0, students: [] };
        if (!data[course].students.includes(studentName)) data[course].students.push(studentName);

        data[course].totalGrades += grade;
        data[course].gradesCount++;
        data[course].visitsCount++;
        data[course].totalVisits += visits;
    });

    const sorted = Object.keys(data).sort();

    for (const s of sorted) {
        const students = data[s].students.sort();
        const avgGrade = parseFloat((data[s].totalGrades / data[s].gradesCount).toFixed(2));
        const avgVisits = parseFloat((data[s].totalVisits / data[s].visitsCount).toFixed(2));
        output[s] = { avgGrade, avgVisits, students };
    }

    console.log(JSON.stringify(output));
}