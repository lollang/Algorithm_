/**
* @param {number[]} height
* @return {number}
*/
function Container_Most_Water(height) {
    let start = 0;
    let end = height.length - 1;
    let result = 0;

    while(start < end){
        result = Math.max(result, Math.min(height[start], height[end]) * (end - start));
        if(height[start] < height[end]){
            start++;
        }else{
            end--;
        }
    }
    
    return result;
}