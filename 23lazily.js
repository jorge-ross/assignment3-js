function makeLazy(func, ...args) {
  return function () {
    return func.apply(this, args);
  };
}

function multiply(a, b) {
  return a * b;
}

let lazy_val = makeLazy(multiply, 2, 3);

console.log(lazy_val());
