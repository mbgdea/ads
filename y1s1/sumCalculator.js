function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
