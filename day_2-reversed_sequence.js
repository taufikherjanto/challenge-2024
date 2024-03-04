// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// cara pertama: 
// const reverseSeq = n => {
//     const result = []
//     for (let x = n; x >= 1; x--) {
//         result.push(x);
//     }

//     return result;
// }

reverseSeq = n => {
    return [...Array(n)].map((el, i) => 1 + i).reverse()
}

console.log(reverseSeq(5));