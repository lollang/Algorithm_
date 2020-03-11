/**
* @param {number[]} people
* @param {number} limit
* @return {number}
*/
function Boats_Save_People(people, limit) {
    let left = 0;
    let right = people.length - 1;
    people.sort((e1, e2) => e1 - e2);
    let count = 0;

    while(left <= right){
        if(people[left] + people[right] <= limit){
            left++;
        }
        right--;
        count++;
    }

    return count;
}