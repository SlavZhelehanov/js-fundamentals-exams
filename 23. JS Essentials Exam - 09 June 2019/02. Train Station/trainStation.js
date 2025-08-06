function trainStation(num, arr) {
    let remainingPassengers = 0;

    for (let i = 0; i < arr.length; i++) {
        if (num < arr[i] + remainingPassengers) {
            remainingPassengers += arr[i] - num;
            arr[i] = num;
        } else {
            arr[i] += remainingPassengers;
            remainingPassengers = 0;
        }
    }
    console.log(arr);
    console.log(`${0 < remainingPassengers ? "Could not fit " + remainingPassengers + " passengers" : "All passengers aboard"}`);
}

trainStation(10, [9, 39, 1, 0, 0]);
console.log("-------------------------------------------------");
trainStation(6, [5, 15, 2]);