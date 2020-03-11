/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
*/

function Interval_Intersections(A, B) {
	let i = 0, j = 0;
	let res = [];

	while(i < A.length && j < B.length){
		let l = Math.max(A[i][0], B[j][0]);
		let h = Math.min(A[i][1], B[j][1]);

		if(l <= h){
			res.push([l, h]);
		}

		if(A[i][1] < B[j][1]) i++;
		else j++;
	}

	return res;
}