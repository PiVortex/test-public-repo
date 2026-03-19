function sumNumbers(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumNumbers([1, 2, 3, 4, 10]));