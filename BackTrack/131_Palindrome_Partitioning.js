/**
* @param {string} s
* @return {string[][]}
*/
function Palindrome_Partitioning(s) {
    let result = [];
    let temp = [];
    let start = 0;
    backtrack(result, temp, s, start);
    return result;
}

function backtrack(result, temp, s, start){
    if(start === s.length){
        result.push(temp.slice());
        return;
    }
    
    for(let i = start; i < s.length; i++) {
        if(isPanlidrome(s, start, i)){
            temp.push(s.slice(start, i + 1));
            backtrack(result, temp, s, i + 1);
            temp.pop();
        }
    }
}

function isPanlidrome(s, start, end) {
    while(start <= end){
        if(s[start] !== s[end]) return false;
        start++;
        end--;
    }

    return true;
}

