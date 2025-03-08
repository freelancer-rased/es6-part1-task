// 1. Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result

const multiply = (a, b, c) => a * b * c;
console.log(multiply(2, 3, 4));

// 2. Write the following sentence in three lines and print the Result. I am a web developer. I love to code. I love to eat biryani.

const multiLine = `
I am a web developer.
I love to code.
I love to eat biryani. 
`;
console.log(multiLine);

// 3. Write an arrow function that will take 2 parameters: one parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const addTwoNumber = (a, b = 100) => a + b;
console.log(addTwoNumber(11));
