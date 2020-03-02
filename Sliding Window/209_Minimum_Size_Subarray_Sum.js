function Minimum_Size_Subarray_Sum(s, nums) {
	let sum = 0;
	let start = 0;
	let ans = Number.MAX_VALUE;
	for(let i = 0; i < nums.length; i++){
		sum += nums[i];
		while(sum >= s){
			ans = Math.min(ans, i - start + 1);
			sum -= nums[start++];
		}
	}

	return ans !== Number.MAX_VALUE ? ans : 0;
}