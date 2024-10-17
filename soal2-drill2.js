function soal2(nums, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]); 
        result.push(nums[i + n]);
    }
    return result;
}

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
console.log(soal2(nums, n));

