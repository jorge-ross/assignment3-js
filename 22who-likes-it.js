// You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

// function likes(names) {
//   if (names.length === 0) {
//     return "no one likes this";
//   } else if (names.length === 1) {
//     return names[0] + " likes this";
//   } else if (names.length === 2) {
//     return names[0] + " and " + names[1] + " like this";
//   } else if (names.length === 3) {
//     return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//   } else {
//     return (
//       names[0] +
//       ", " +
//       names[1] +
//       " and " +
//       (names.length - 2) +
//       " others like this"
//     );
//   }
// }

// names = ["A", "B", "c", "D"];
// console.log(likes(names));

// Destructuring

function likes(names) {
  const [first, second, third, ...rest] = names;
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${first} likes this`;
    case 2:
      return `${first} and ${second} like this`;
    case 3:
      return `${first}, ${second} and ${third} like this`;
    default:
      return `${first}, ${second} and ${rest.length + 1} others like this`;
  }
}

names = [];
console.log(likes(names));
