const summer = (object1) => {
    let sum = 0;
    for (const value of Object.values(object1)) {
      if (typeof value === "number") {
        if (value % 2 === 0){
          sum += value;
        }
      }
      if (typeof value === "object") {
        sum += summer(value);
      }
    }
    return sum;
  };
  
module.exports = summer;