/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function Unique_Paths(m, n) {
    let matrix = Array.from({length: m}, () => new Array(n));
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i == 0 || j == 0){
                matrix[i][j] = 1;
            }else{
                matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
            }
        }
    }

    return matrix[m - 1][n - 1];
};