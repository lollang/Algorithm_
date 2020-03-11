/**
* @param {character[]} s
* @return {void}
*/

function Reverse_String(s) {
    let l = 0;
    let r = s.length - 1;
    
    while(l < r){
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
}