/**
* @param {number} n
* @param {number} k
* @return {number[][]}
*/
function Combinations(n, k) {
    let result = [];
    let temp = [];
    let start = 1;
    backtrack(result, temp, n, k, start);
    return result;
}

function backtrack(result, temp, n, k, start){
    if(temp.length === k){
        result.push(temp.slice());
        return;
    }

    for (var i = start; i <= n; i++) {
        temp.push(i);
        backtrack(result, temp, n, k, i + 1);
        temp.pop();
    }
}
