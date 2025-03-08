// Write an arrow function where it will do the following
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the result

const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 35, 8];


const combine = (num1, num2) => {
   const add2Array = [...num1, ...num2]

   const maxFind = Math.max(...add2Array)
   return maxFind;
}

console.log(combine(num1, num2));