function  medenkaWars(strings) {
    let Naskor = { consecutive: 0, tmpDmg: 0, total: 0 }, Vitkor = { consecutive: 0, tmpDmg: 0, total: 0 };

    for (let i = 0; i < strings.length; i++) {
        let [damage, attacker, _] =  strings[i].split(" ");

        if (attacker === "dark") {
            if (Naskor.consecutive === 0) {
                Naskor.consecutive++;
                Naskor.tmpDmg = +damage;
                Naskor.total += +damage;
            } else if (Naskor.consecutive < 4 && Naskor.tmpDmg === +damage) {
                Naskor.consecutive++;
                Naskor.total += +damage;
            } else if (Naskor.consecutive === 4 && Naskor.tmpDmg === +damage) {
                Naskor.consecutive = 0;
                Naskor.tmpDmg = +damage;
                Naskor.total += (damage * 4.5);
            } else {
                Naskor.consecutive = 1;
                Naskor.tmpDmg = +damage;
                Naskor.total += +damage;
            }
        } else {
            if (Vitkor.consecutive === 0) {
                Vitkor.consecutive++;
                Vitkor.tmpDmg = +damage;
                Vitkor.total += +damage;
            } else if (Vitkor.consecutive < 1 && Vitkor.tmpDmg === +damage) {
                Vitkor.consecutive++;
                Vitkor.total += +damage;
            } else if (Vitkor.consecutive === 1 && Vitkor.tmpDmg === +damage) {
                Vitkor.consecutive = 0;
                Vitkor.tmpDmg = +damage;
                Vitkor.total += (damage * 2.75);
            } else {
                Vitkor.consecutive = 1;
                Vitkor.tmpDmg = +damage;
                Vitkor.total += +damage;
            }
        }
    }

    console.log(`Winner - ${Naskor.total < Vitkor.total ? "Vitkor" : "Naskor"}`);
    console.log(`Damage - ${Naskor.total < Vitkor.total ? Vitkor.total * 60 : Naskor.total * 60}`);
}

medenkaWars(["5 white medenkas",
"5 dark medenkas",
"4 white medenkas"]);
console.log("-------------------------------------------------------------------------------------");
medenkaWars(["2 dark medenkas",
"1 white medenkas",
"2 dark medenkas",
"2 dark medenkas",
"15 white medenkas",
"2 dark medenkas",
"2 dark medenkas"]);