const sumSubarray = (arr, ind) => {
    let sum = 0;
    let index = ind-1;
    let array = []
  
    for (let i = 0; i <= index; i++) {
      arr.slice(i, index+1).forEach((element) => sum+=element);
      array.push(sum)
      sum = 0
      index++
      if (index === arr.length){
        break
      }
    }
    return Math.max(...array);
  }
  
const result = sumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);

module.exports = sumSubarray;