function deepCount(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count += 1;
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

console.log(deepCount(["x", "y", ["z"]]));
