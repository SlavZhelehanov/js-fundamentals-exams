function coursesPrices(fund, adva, appl, educationForm) {
    const Fundamentals = 170, Advanced = 180, Applications = 190, online = educationForm === 'online' ? 0.94 : 1;
    let total = 0;

    if (adva && fund && appl) {
        total += (Fundamentals + (0.9 * Advanced) + Applications) * 0.94 * online;
    } else if (adva && fund) {
        total += (Fundamentals + (0.9 * Advanced)) * online;
    } else if (adva && appl) {
        total += (Advanced + Applications) * online;
    } else if (fund && appl) {
        total += (Fundamentals + Applications) * online;
    } else if (fund) {
        total += Fundamentals * online;
    } else if (adva) {
        total += Advanced * online;
    } else if (appl) {
        total += Applications * online;
    } else total = 0;

    console.log(Math.round(total));
}