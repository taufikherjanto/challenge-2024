// https://www.codewars.com/kata/57f780909f7e8e3183000078
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// cara pertama:
// function grow(n) {
//     let result =  n[0];
//     for (let i = 1; i < n.length; i++) {
//         result = result * n[i];
//     }

//     return result;
// }

// cara kedua
function grow(n) {
    const result = n.reduce((acc, current) => acc * current, 1);
    return result;
}

console.log(grow([1, 2, 3, 4]));