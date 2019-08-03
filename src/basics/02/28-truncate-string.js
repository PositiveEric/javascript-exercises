console.log(truncateString("Helicopter", 4)); // Expected output: Heli

function truncateString(str, num) {
  let result = str.substr(0, num);
  return result;
}
