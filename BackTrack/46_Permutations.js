/**
 * @param {number[]} nums
 * @return {number[][]}
*/

function Permutation(nums){
    let res = [], temp = [];
    let used = new Array(nums.length);
    used.fill(false);
    backtrack(res, temp, nums, used);
    return res;
}

function backtrack(result, temporary, nums, used){
    if(temporary.length == nums.length){
        result.push(temporary.slice());
    }else{
        for(let i = 0; i < nums.length; i++){
            if(!used[i]){
                temporary.push(nums[i]);
                used[i] = true;
                backtrack(result, temporary, nums, used);
                used[i] = false;
                temporary.pop();
            }
        }
    }
}