function goshkoTheRabbit(arr) {
    let directions = arr.shift().trim().split(',').map(n => n.trim()), passedCells = [], row = 0, col = 0;
    let countOfLettuce = 0, countOfCabbage = 0, countOfTurnip = 0, countOfCarrots = 0, countOfWallHits = 0;

    arr = arr.map(n => n = n.split(', '));

    function findVegetables(str) {
        while (str.includes('{!}')) {
            str = str.replace('{!}', '@');
            countOfCarrots++;
        }
        while (str.includes('{*}')) {
            str = str.replace('{*}', '@');
            countOfCabbage++;
        }
        while (str.includes('{&}')) {
            str = str.replace('{&}', '@');
            countOfLettuce++;
        }
        while (str.includes('{#}')) {
            str = str.replace('{#}', '@');
            countOfTurnip++;
        }
        return str;
    }

    for (const direction of directions) {
        let hasChange = false;

        switch (direction) {
            case "left": {
                if (col - 1 < 0) countOfWallHits++;
                else {
                    col--;
                    hasChange = true;
                }
                break;
            }
            case "right": {
                if (arr[row].length - 1 < col + 1) countOfWallHits++;
                else {
                    col++;
                    hasChange = true;
                }
                break;
            }
            case "up": {
                if (row - 1 < 0) countOfWallHits++;
                else {
                    row--;
                    hasChange = true;
                }
                break;
            }
            case "down": {
                if (arr.length - 1 < row + 1) countOfWallHits++;
                else {
                    row++;
                    hasChange = true;
                }
                break;
            }
            default: {break;}
        }
        if (hasChange) {
            arr[row][col] = findVegetables(arr[row][col]);
            passedCells.push(arr[row][col]);
        }
    }
    console.log(`{"&":${countOfLettuce},"*":${countOfCabbage},"#":${countOfTurnip},"!":${countOfCarrots},"wall hits":${countOfWallHits}}\n${0 < passedCells.length ? passedCells.join('|') : 'no'}`);
}

goshkoTheRabbit(["right, up, up, down",
    "asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj",
    "tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip",
    "poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne"]);
console.log("---------------------------------------------------------------------------");
goshkoTheRabbit(["up, right, left, down",
    "as{!}xnk"]);