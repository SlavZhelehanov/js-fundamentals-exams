function VATCalculator(price, rate) {
    console.log((price / (1 + rate / 100)).toFixed(2));
}