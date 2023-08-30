let fib = function (n) {
  const result = [];
  let a = 1;
  let b = 1;

  for (i = 1; i <= n; i++) {
    if (a % 3 === 0 && a % 5 === 0) {
      result.push("FizzBuzz");
    } else if (a % 3 === 0) {
      result.push("Fizz");
    } else if (a % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(a);
    }

    const sequence = a + b;
    a = b;
    b = sequence;
  }
  return result;
};

const fb = fib(20);
console.log(fb);
