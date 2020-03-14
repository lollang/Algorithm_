/**
 * @param {number[][]} dungeon
 * @return {number}
*/
function Dungeon_Game(dungeon) {
    let m = dungeon.length - 1;
    let n = dungeon[0].length - 1;
    
    for(let i = m; i >= 0; i--){
        for(let j = n; j >= 0; j--){
            if(i == m && j == n){
                dungeon[i][j] = Math.max(1 - dungeon[i][j], 1);
            }else if(i == m){
                dungeon[i][j] = Math.max(dungeon[i][j + 1] - dungeon[i][j], 1);
            }else if(j == n){
                dungeon[i][j] = Math.max(dungeon[i + 1][j] - dungeon[i][j], 1);
            }else{
                dungeon[i][j] = Math.max(Math.min(dungeon[i][j + 1], dungeon[i + 1][j]) - dungeon[i][j], 1);
            }
        }
    }
    
    return dungeon[0][0];
};


