// Write an arrow function where it will do the following: x^2
// 1. Square each array element
// 2. Calculate the sum of the squared elements
// 3. Return the averate of the sum of the squared elements

const number = [5, 6, 4, 6, 8, 9];

const squared = (numbers) => {
  let multiply = [];
//   step:1 square each element
  for (const num of numbers) {
    const squaredNum = num * num;
    multiply.push(squaredNum);
  }

//   step: 2 calculate the sum of squared numbers 
  let sum = 0;
  for (const numm of multiply) {
    sum = sum + numm;
  }

//   step: 3 calculate and return the average 
  const average = sum / multiply.length;
  return average;
};

console.log(squared(number));
