console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false

function isBlank(input) {
  switch (input) {
    case "":
    case " ":
    case null:
      return true;
    default:
      return false;
  }
}
