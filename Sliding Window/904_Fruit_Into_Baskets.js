function Fruit_Into_Basket(array) {
	let map = new Map();
	let start = 0;
	let res = 0;
	for(let end = 0; end < array.length; end++){
		let getOrDefault = map.get(array[end]) || 0;
		map.set(array[end], getOrDefault + 1);
		while(map.size > 2){
			map.set(array[start], map.get(array[start]) - 1);
			if(map.get(array[start]) === 0) map.delete(array[start]);
			start++;
		}
		res = Math.max(res, end - start + 1);
	}

	return res;
}