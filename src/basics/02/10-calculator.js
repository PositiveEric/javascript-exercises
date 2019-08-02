function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}

function multiply(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result = result * array[i];
  }
  return result;
}

function power(x, y) {
  if (y === 0) {
    return 1;
  } else if (y % 2 === 0) {
    return power(x, parseInt(y / 2)) * power(x, parseInt(y / 2));
  } else {
    return x * power(x, parseInt(y / 2)) * power(x, parseInt(y / 2));
  }
}

console.log(add(1, 2)); // Expected result: 3
console.log(subtract(1, 2)); // Expected result: -1
console.log(sum([1, 2, 3])); // Expected result: 6
console.log(multiply([1, 2, 3])); // Expected result: 9
console.log(power(2, 3)); // Expected result: 8
