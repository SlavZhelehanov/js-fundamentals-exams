function HTMLGrade(points, homeworkCompleted, totalHomework) {
    if(points === 400) return console.log(Number('6').toFixed(2));
    const bonus = 10 * (homeworkCompleted / totalHomework);
    const totalPoints =  (90 / (400 / points)) + bonus;
    const grade = (3 + (totalPoints - 20) / 25).toFixed(2);
    if(grade < 3) return console.log(Number('2').toFixed(2));
    if(6 < grade) return console.log(Number('6').toFixed(2));
    console.log(grade);
}