/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
*/

function Three_Sum_Smaller(nums, target) {
	let n = nums.length;
	nums.sort((a, b) => a - b);
	let count = 0;

	for(let i = 0; i < n - 2; i++){
		let start = i + 1, end = n - 1;
		while(start < end){
			if(nums[i] + nums[start] + nums[end] < target){
				count += end - start;
				start++;
			}else{
				end--;
			}
		}
	}

	return count;
}
