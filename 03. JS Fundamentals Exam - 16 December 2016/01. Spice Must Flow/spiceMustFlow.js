function spiceMustFlow(starting) {
    starting = starting.map(Number)[0];

    let totalSpiceMined = 0, days = 0;

    while (100 <= starting) {
        days++;
        totalSpiceMined += starting - 26;
        starting -= 10;
    }

    console.log(days);
    console.log(0 <= totalSpiceMined - 26 ? totalSpiceMined - 26 : 0);
}

spiceMustFlow(["111"]);
console.log("-------------------------------------------------------------------");
spiceMustFlow(["200"]);
console.log("-------------------------------------------------------------------");
spiceMustFlow(["450"]);
console.log("-------------------------------------------------------------------");
spiceMustFlow(["0"]);