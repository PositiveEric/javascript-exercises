const repeatString = (input, times) => {
  let result = input.repeat(times);
  if (result === "") {
    return "pot" + input + "toe";
  }
  return result;
};

console.log(repeatString("a", 4)); // Expected result: 'aaaa'
console.log(repeatString("a")); // Expected result: 'potatoe'
