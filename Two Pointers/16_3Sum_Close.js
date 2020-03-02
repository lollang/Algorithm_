/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
*/

function Three_Sum_Close(nums, target) {
	nums.sort((a, b) => a - b);
	let result = nums[0] + nums[1] + nums[nums.length - 1];
	for(let i = 0; i < nums.length - 2; i++){
		let start = i + 1, end = nums.length - 1;
		while(start < end){
			let sum = nums[i] + nums[start] + nums[end];
			if(sum > target) end--;
			else start++;

			if(Math.abs(sum - target) < Math.abs(result - target)) result = sum;
		}
	}

	return result;
}