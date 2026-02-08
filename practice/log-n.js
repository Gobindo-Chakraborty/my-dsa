function permute(arr) {
  if (arr.length === 0) return [[]];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(0, i).concat(arr.slice(i + 1));
    for (let p of permute(rest)) {
      result.push([arr[i], ...p]);
    }
  }
  return result;
}

console.log(permute([1, 2, 3]));
