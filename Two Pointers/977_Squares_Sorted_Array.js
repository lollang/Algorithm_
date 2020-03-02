/**
 * @param {number[]} array
 * @return {number[]}
 */

function Square_Sorted_Array(array) {
 	let n = array.length;
 	let res = new Array(n);
 	for(let i = 0; i < n; i++){
 		res[i] = array[i] * array[i];
 	}

 	Array.sort(res);
 	return res;
}

function Square_Sorted_Array(array) {
	let n = array.length;
 	let j = 0;
 	while(j < n && array[j] < 0) j++;
 	let i = j - 1;

 	let index = 0;
 	let res = new Array(n);

 	while(i >= 0 && j < n){
 		if(array[i] * array[i] < array[j] * array[j]){
 			res[index++] = array[i] * array[i];
 			i--;
 		}else{
 			res[index++] = array[j] * array[j];
 			j++;
 		}
 	}

 	while(i >= 0){
 		res[index++] = array[i] * array[i];
 		i--;
 	}

 	while(j < n){
 		res[index++] = array[j] * array[j];
 		j++; 
 	}

 	return res;
}