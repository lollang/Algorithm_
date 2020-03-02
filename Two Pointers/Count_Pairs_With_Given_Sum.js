//Given an array of integers, and a number ‘sum’, find the number of pairs of integers in the array whose sum is equal to ‘sum’.

/**
 * @param {number[]} array
 * @param {number} sum
 * @return {number}
 */

function Count_Pairs_With_Given_Sums(array, sum) {
	let count = 0;

	for(let i = 0; i < array.length; i++){
		for(let j = i + 1; j < array.length; j++){
			if(array[i] + array[j] === sum) count++
		}
	}

	return count;
}


function Count_Pairs_With_Given_Sums(array, sum) {
	let map = new Map();

	// Store counts of all elements in map
	for(let i = 0; i < array.length; i++){

		// initializing value to 0, if key not found 
		if(!map.has(array[i])){
			map.set(array[i], 0);
		}

		map.set(array[i], map.get(array[i]) + 1);
	}

	let count = 0;

	// if (arr[i], arr[i]) pair satisfies the condition, then we need to ensure that the count is decreased by one such that the (arr[i], arr[i]) pair is not considered 
	for(let i = 0; i < array.length; i++){
		if(map.has(sum - array[i])){
			count += map.get(sum - array[i]);
		}

		if(sum - array[i] == array[i]) count--
	}

	return count;
}