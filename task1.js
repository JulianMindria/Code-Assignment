let done = false;
let array = [1, 2, 6, 3, 21, 25]
while (!done) {
  done = true;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i - 1] < array[i]) {
      done = false;
      var tmp = array[i - 1];
      array[i - 1] = array[i];
      array[i] = tmp;
    }
  }
}

module.exports = array;