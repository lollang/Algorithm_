/**
 * @param {number[][]} intervals
 * @return {number[][]}
*/

function Merge_Intervals(intervals) {
    if(intervals == null || intervals.length == 0) return intervals;
	intervals.sort((e1, e2) => e1[0] - e2[0]);

	let prev = intervals[0];
	let res = [];
    
	for(let curr of intervals){        
		if(curr[0] <= prev[1]){
			prev[1] = Math.max(prev[1], curr[1]);
		}else{
			res.push(prev);
			prev = curr;
		}
	}

	res.push(prev);

	return res;
}