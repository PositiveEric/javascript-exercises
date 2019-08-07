function draw(num) {
  var stars = "";
  for (var i = 1; i <= num; i++) {
    var stars = stars + "*";
  }
  return;
}

draw(3);
// Expected result:
//
//      *
//      **
//      ***

draw(5);
// Expected result:
//
//      *
//      **
//      ***
//      ****
//      *****
//      *****
