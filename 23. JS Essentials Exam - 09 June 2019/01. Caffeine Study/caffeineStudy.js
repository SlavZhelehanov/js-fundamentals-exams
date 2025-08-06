function caffeineStudy(days) {
    const coffee = ((3 * 150) / 100) * 40;
    const cocaCola = ((2 * 250) / 100) * 8;
    const tea = ((3 * 350) / 100) * 20;
    const energy = ((3 * 500) / 100) * 30;
    const dayDose = coffee + cocaCola + tea;
    let consumedCaffeine = 0;

    for (let i = 1; i <= days; i++) {
        consumedCaffeine += dayDose;

        if (i % 5 === 0) consumedCaffeine += energy;
        if (i % 9 === 0) consumedCaffeine += cocaCola + (((2 * 500) / 100) * 30);
    }
    console.log(`${consumedCaffeine} milligrams of caffeine were consumed`);
}

caffeineStudy(5);
console.log("------------------------------------------------------");
caffeineStudy(8);
console.log("------------------------------------------------------");
caffeineStudy(18);