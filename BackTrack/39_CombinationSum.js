/**
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/

function CombinationSum(candidates, target) {
    let result = [];
    let temp = [];
    let start = 0;
    backtrack(result, temp, candidates, target, start);
    return result;
}

function backtrack(result, temp, candidates, remain, start){
    if(remain === 0){
        result.push(temp.slice());
    }else if(remain > 0){
        for(let i = start; i < candidates.length; i++) {
            temp.push(candidates[i]);
            backtrack(result, temp, candidates, remain - candidates[i], i);
            temp.pop();
        }
    }else{
        return;
    }
}