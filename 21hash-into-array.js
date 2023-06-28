// Convert a hash into an array. Nothing more, Nothing less.
function convertHashToArray(hash) {
  const obj = hash;
  const array = Object.entries(obj).sort();
  return array;
}

hash = { name: "Jeremy", age: 24, role: "Software Engineer" };
console.log(convertHashToArray(hash));
