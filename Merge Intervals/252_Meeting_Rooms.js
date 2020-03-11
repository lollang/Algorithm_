/**
 * @param {number[][]} intervals
 * @return {boolean}
*/

function Meeting_Rooms(intervals) {
	intervals.sort((e1, e2) => e1[0] - e2[0]);

	for(let i = 0;i < intervals.length - 1;i++){
		if(intervals[i][1] > intervals[i + 1][0]) return false;
	}

	return true;
}