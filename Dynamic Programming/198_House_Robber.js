/**
 * @param {number[]} nums
 * @return {number}
 */
function House_Robber(nums) {
    let records = new Array(nums.length + 1);
    
    records[0] = 0;
    records[1] = nums[0];
    for(let i = 1; i < nums.length; i++){
        records[i + 1] = Math.max(nums[i] + records[i - 1], records[i]);
    }
    
    return records[nums.length]
};

function House_Robber(nums){
    let prev1 = 0;
    let prev2 = 0;
    
    for(let i = 0; i < nums.length; i++){
        let tmp = prev1;
        prev1 = Math.max(nums[i] + prev2, prev1);
        prev2 = tmp;
    }
    
    return prev1;
}