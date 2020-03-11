/**
* @param {number[]} nums
* @return {number}
*/

function Remove_Duplicate_Sorted_Array(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if(i < 2 || nums[i] > nums[index - 2]){
            nums[index++] = nums[i];
        }
    } 
    return index;      
}
