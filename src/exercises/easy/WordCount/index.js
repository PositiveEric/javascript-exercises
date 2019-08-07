/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str) {
    let obj = {};
    let splitArray = str
      .toLowerCase()
      .trim()
      .replace(/(\s+|\t+)/g, " ")
      .split(" ");

    // console.log(splitArray);
    for (let i = 0; i < splitArray.length; i++) {
      if (
        obj[`${splitArray[i]}`] == undefined &&
        obj[`${splitArray[i]}`] !== ""
      ) {
        obj[`${splitArray[i]}`] = 1;
      } else {
        obj[`${splitArray[i]}`] += 1;
      }
      if (obj.hasOwnProperty("constructor")) {
        obj[`${splitArray[i]}`] = 1;
      }
    }

    console.log(obj);
    return obj;
  }
}

module.exports = Words;
