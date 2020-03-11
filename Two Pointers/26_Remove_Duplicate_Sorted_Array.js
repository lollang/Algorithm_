/**
* @param {number[]} nums
* @return {number}
*/
function Remove_Duplicate_Sorted_Array(nums) {
    let index = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] != nums[index]){
            index++;
            nums[index] = nums[i];
        } 
    }
    return index + 1;          
}

function Remove_Duplicate_Sorted_Array(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if(i < 1 || nums[i] > nums[index - 1]){
            nums[index++] = nums[i];
        }
    } 
    return index;      
}
