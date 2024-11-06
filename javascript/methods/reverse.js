// Write your code here:


function reverseArray(array) {
  let newArray = [];
  for (let i of array) {
    newArray.unshift(i);
  }
  return newArray;
}





// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];



