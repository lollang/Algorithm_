/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function Coin_Change(coins, amount) {
    
    let dp = new Array(amount + 1);
    dp[0] = 0;

    for(let i = 1; i < amount + 1; i++){
        let min = Number.MAX_VALUE;
        
        for(let coin of coins){
            if(i >= coin && dp[i - coin] != -1){
                min = Math.min(min, 1 + dp[i - coin]);
            }
        }
        
        dp[i] = min == Number.MAX_VALUE ? -1 : min;
    }
    
    return dp[amount];
};