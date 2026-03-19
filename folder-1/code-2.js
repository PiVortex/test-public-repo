function sumArray(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
