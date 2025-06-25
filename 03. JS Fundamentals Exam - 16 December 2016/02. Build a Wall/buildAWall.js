function buildAWall(nums) {
    nums = nums.map(Number);
    let totalCosts = 0, concretePerDay = [];

    while (nums.some(el => el < 30)) {
        let dayCost = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 30) {
                dayCost++;
                nums[i]++;
            }
        }

        concretePerDay.push(dayCost * 195);
    }

    console.log(concretePerDay.join(", "));
    console.log(`${concretePerDay.reduce((a, b) => a + b, 0) * 1900} pesos`);
}

buildAWall(["21", "25", "28"]);
console.log("-------------------------------------------------------------------");
buildAWall(["17"]);
console.log("-------------------------------------------------------------------");
buildAWall(["17", "22", "17", "19", "17"]);
console.log("-------------------------------------------------------------------");
buildAWall([]);