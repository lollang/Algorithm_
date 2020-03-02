/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
*/

function Subarray_Product_Less_Than_K(nums, k) {

	if(k <= 1) return 0;
	let prod = 1, start = 0, end = 0;
	for(let end = 0; end < nums.length; end++){
		prod *= nums[end];
		while(prod >= k) prod /= nums[start++]; 
		res += end - start + 1;
	}

	return res;
}