function objConcat(o) {
  const mergedObj = {};
  o.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (mergedObj[key] !== obj[key]) {
        mergedObj[key] = obj[key];
      }
    });
  });
  return mergedObj;
}

let a = { 1: "1", 2: "2", 3: "3", 4: "45" },
  b = { 3: "44", 5: "6", 6: "7", 7: "8" },
  c = { 5: "9", 8: "9", 6: "12", 23: "35" };
o = [a, b, c];

console.log(objConcat(o));
