/**
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/

function combinationSum2(candidates, target) {
    let result = [];
    let temp = [];
    let start = 0;
    candidates.sort((e1,e2)=>e1 - e2);
    backtrack(result, temp, candidates, target, start);
    return result;
}

function backtrack(result, temp, candidates, remain, start){
    if(remain === 0){
        result.push(temp.slice());
    }else if(remain > 0){
        for(let i = start; i < candidates.length; i++) {
            if(i > start && candidates[i] === candidates[i - 1]) continue;
            temp.push(candidates[i]);
            backtrack(result, temp, candidates, remain - candidates[i], i + 1);
            temp.pop();
        }
    }else{
        return;
    }
}