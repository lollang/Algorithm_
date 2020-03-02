function Find_Maximum_Sum_Subarray_Size_K(array, k) {
	let length = array.length;

	if(length < k) {
		return false;
	}

	let res = 0;

	// Compute sum of first window of size k
	for(let i = 0; i < k; i++){
		res += array[i];
	}

	// Compute sums of remaining windows by removing first element of previous window and adding last element of current window
	let sum = res;
	for(let i = k; i < length; i++){
		sum += array[i] - array[i - k];
		res = Math.max(res, sum);
	}

	return res;
}	