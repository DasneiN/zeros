module.exports = function getZerosCount(number) {
  let result = 0,
      n = 5,
      m = n;

  while (true) {
    let x = Math.floor(number / m);

    if (x == 0) {
      return result;
    } else {
      result += x;
      m *= n;
    }
    
  }
}