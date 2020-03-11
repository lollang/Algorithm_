/**
 * @param {number[]} nums
 * @return {number[][]}
*/

function Subsets(nums){
    let result = [], temp = [], start = 0;
    nums.sort((e1, e2) => e1 - e2);
    backtrack(result, temp, nums, start);
    return result;
}

function backtrack(result, temp, nums, start){
    result.push(temp.slice());
    for(let i = start; i < nums.length; i++){
        if(i != start && nums[i] === nums[i - 1]) continue;
        temp.push(nums[i]);
        backtrack(result, temp, nums, i + 1);
        temp.pop();
    }
}