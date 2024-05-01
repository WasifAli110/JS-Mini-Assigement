/*let matrix1 = [
  [1, 3, 4],
  [0, 5, 5],
  [9, 6, 1],
]; // 2D array

let matrix2 = [
  [1, 5, 4],
  [0, 7, 5],
  [1, 2, 1],
];

console.log(matrix1[0][0] + matrix2[0][0]);
console.log(matrix1[0][1] + matrix2[0][1]);
console.log(matrix1[0][2] + matrix2[0][2]);

console.log(matrix1[1][0] + matrix2[1][0]);
console.log(matrix1[1][1] + matrix2[1][1]);
console.log(matrix1[1][2] + matrix2[1][2]);

console.log(matrix1[2][0] + matrix2[2][0]);
console.log(matrix1[2][1] + matrix2[2][1]);
console.log(matrix1[2][2] + matrix2[2][2]);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(matrix1[i][j] + matrix2[i][j]);
  }
}*/

let arr1 = [
  [2,2,2],
  [5,6,6],
  [7,1,0],
];

let arr2 = [
  [3,2,1],
  [6,6,7],
  [7,1,1],
];


/*
[5,4,3],
[11,12,13],
[14,2,1],
*/

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
      console.log(arr1[i][j]  +   arr2[i][j] );
      
  }
  
}
