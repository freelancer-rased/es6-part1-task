// Write an arrow function where it will do the following
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each elements is event, push elements with even length to a new array and return the results. 

const friends = ['rahim', 'karim', 'abul', 'ranu', 'raja', 'kafi', 'babul'];

const arr = (arrays) => {
    let evenArr = [];
    for (const array of arrays){
        if(array.length % 2 === 0){
           evenArr.push(array);
        }
    }
    return evenArr;
}

console.log(arr(friends));