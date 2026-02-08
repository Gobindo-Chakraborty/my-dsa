const stringArr = ["a", "b", "c", "d", "e"];
const numArr = [1, 2, 3, 4, 5];
const boolArr = [true, false, undefined, null];
const mixedArr = [
  "a",
  2,
  true,
  undefined,
  null,
  { a: "a" },
  ["a", "b", "c", false],
];

const combineArr = [...stringArr, ...boolArr, ...numArr];

console.log(combineArr);
