/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    
    if(matrix == null || matrix.length == 0) return;
    let m = matrix.length;
    let n = matrix[0].length;
    this.dp = [];
    for(let i = 0; i < m; i++){
        
        let sum = 0;
        let temp = [];
        
        for(let j = 0; j < n; j++){
            
            sum += matrix[i][j];
            temp.push(sum);
        }
        this.dp.push(temp);
    }
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for(let i = row1; i <= row2; i++){
        sum += this.dp[i][col2] - (col1 > 0 ? this.dp[i][col1 - 1] : 0);
    }
    
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/



/* Method 2 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    
    if(matrix == null || matrix.length == 0) return;
    let m = matrix.length;
    let n = matrix[0].length;
    this.dp = Array.from({length: m + 1}, () => (new Array(n + 1)).fill(0));
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            this.dp[i + 1][j + 1] = this.dp[i + 1][j] + this.dp[i][j + 1] - this.dp[i][j] + matrix[i][j]; 
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1]
};