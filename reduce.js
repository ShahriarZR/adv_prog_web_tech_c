const numbers = [21, 25.6, 1.3, 1.5, 19.9, 51.8];
console.log(numbers.reduce(getSum, 0));

function getSum(total, num) {
  return total + Math.round(num);
}