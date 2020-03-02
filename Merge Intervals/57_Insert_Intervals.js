/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
*/

function Insert_Intervals(intervals, newInterval){
	let res = [];

	let index = 0;
	while(index < intervals.length && intervals[index][1] < newInterval[0]){
		res.push(intervals[index++]);
	}

	let tempInterval = newInterval;
	while(index < intervals.length && intervals[index][0] <= newInterval[1]){
		tempInterval = [Math.min(tempInterval[0], intervals[index][0]), Math.max(tempInterval[1], intervals[index][1])];
		index++;
	}
	res.push(tempInterval);

	while(index < intervals.length) res.push(intervals[index++]);

	return res;
}