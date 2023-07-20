// 19/06/23
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part 
// of the primary diagonal.
 
// Input: mat = [[1,2,3],
// [4,5,6],
// [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

let mat = [[1,2,3],[4,5,6],[7,8,9]];

var diagonalSum = function(mat) {
    let length = mat.length -1,
    sum = 0
    for(let i=0 ; i < mat.length ; i++){
        sum += mat[i][i] + mat[i][length-i]
    }
    if(length % 2 ===0) sum -= mat[length/2][length/2]
    return sum;
};


//OR


var diagonalSum = function(mat) {
    let sum=0 , x=0 , y=mat.length-1;
    for (i=0 ; i<mat.length ; i++){
        if(x==y){
            sum += mat[i][x];
        } else {
            sum+=mat[i][x]+mat[i][y];
        }
        x++;
        y--;
    }
    return sum;
}
