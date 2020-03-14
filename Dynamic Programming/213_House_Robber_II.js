/**
 * @param {number[]} nums
 * @return {number}
 */
function House_Robber_II(nums){
    if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return nums[0];
    
    return Math.max(helper(nums, 0, nums.length - 2), helper(nums, 1, nums.length - 1));
}

function helper(array, l, h) {
    let nums = array.slice(l, h + 1);
    let records = new Array(nums.length + 1);
     
    records[0] = 0;
    records[1] = nums[0];
    for(let i = 1; i < nums.length; i++){
        records[i + 1] = Math.max(nums[i] + records[i - 1], records[i]);
    }
    
    return records[nums.length]
};

