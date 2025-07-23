function keepTheChange([bill, mood]) {
    bill = +bill;

    switch (mood) {
        case "happy": {
            bill *= 0.1;
            break;
        }
        case "married": {
            bill *= 0.0005;
            break;
        }
        case "drunk": {
            bill *= 0.15;
            const n = +(bill + '').charAt(0);
            bill **= n;
            break;
        }
        default: {
            bill *= 0.05
            break;
        }
    }
    console.log(bill.toFixed(2));
}