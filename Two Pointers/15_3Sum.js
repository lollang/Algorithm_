/**
 * @param {number[]} nums
 * @return {number[][]}
*/

function Three_Sum(nums) {
	nums.sort((a, b) => a - b);
	let res = [];

	for(let i = 0; i < nums.length; i++){
		if(i == 0 || i > 0 && nums[i] != nums[i - 1]){
			let start = i + 1, end = nums.length, target = -nums[i];
			while(start < end){
				if(nums[start] + nums[end] == target){
					res.push(new Array(nums[i], nums[start], nums[end]));
					while(start + 1 < end && nums[start] == nums[start + 1]) start++;
					while(end > start + 1 && nums[end] == nums[end - 1]) end--;
                    start++;
                    end--;
				}else if(nums[start] + nums[end] < target){
					start++;
				}else{
					end--;
				}
			} 
		}
	}

	return res;
}