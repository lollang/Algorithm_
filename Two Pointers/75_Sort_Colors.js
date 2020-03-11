/**
* @param {number[]} nums
* @return {void}
*/
function SortColors(nums) {
    let left = 0;
    let right = nums.length - 1;
    let index = 0;

    while(index <= right){
        if(nums[index] === 0){
            swap(nums, index, left);
            left++;
            index++;
        }else if(nums[index] === 2){
            swap(nums, index, right);
            right--;
        }else{
            index++
        }
    }
}  

function swap(nums, element1, element2) {
    let temp = nums[element1];
    nums[element1] = nums[element2];
    nums[element2] = temp;
}