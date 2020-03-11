/**
* @param {number[]} stones
* @return {boolean}
*/
function Frog_Jump(stones) {
    let map = new Map();
    map.set(0, new Set());
    map.get(0).add(1);

    for(let i = 1;i < stones.length;i++){
        map.set(stones[i], new Set());
    }

    for(let i = 0; i < stones.length; i++){
        let stone = stones[i];
        let currentSet = map.get(stone);
        for(let step of currentSet){
            let reach = stone + step;
            if(reach === stones[stones.length - 1]){
                return true;
            }
            if(map.has(reach)){
                let set = map.get(reach);
                set.add(step);
                set.add(step + 1);
                if(step - 1 > 0) set.add(step - 1);
            }
        }
    }

    return false;
}