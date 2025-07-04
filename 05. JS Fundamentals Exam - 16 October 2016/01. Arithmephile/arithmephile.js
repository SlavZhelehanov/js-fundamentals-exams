function arithmephile(arr) {
    arr = arr.map(Number);
    let biggestMultiplication = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (0 <= arr[i] && arr[i] < 10) {
            let temp = 1;

            for (let j = 0; j < arr[i]; j++) {
                if (arr[i + j + 1] === undefined) break;
                temp *= arr[i + j + 1];
            }

            if (biggestMultiplication < temp) biggestMultiplication = temp;
        }
    }

    console.log(biggestMultiplication);
}

// arithmephile(["10", "20","2","30","44","3","56","20","24"]);
// console.log("-------------------------------------------------------------------------------");
// arithmephile(["100","200","2","3","2","3","2","1","1"]);
// arithmephile([9,
//     5652,
//     5652,
//     9190,
//     4172,
//     494,
//     536,
//     9510,
//     1584,
//     0,
//     1,
//     10,
//     6,
//     0,
//     675,
//     8913,
//     1891,
//     4298,
//     269,
//     3754,
//     6459])
arithmephile([18,
    42,
    19,
    36,
    1,
    -297,
    38,
    100,
    9,
    -249,
    -170,
    -18,
    -208,
    -11,
    -87,
    -90,
    -286,
    -27,])