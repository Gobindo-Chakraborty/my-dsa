/*

7 -> Graphs — Number of Islands

Question:

Given a grid of '1' (land) and '0' (water), return number of islands.

Answer:

*/

var numIslands = function (grid) {
  let count = 0;

  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      grid[r][c] === "0"
    )
      return;

    grid[r][c] = "0";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
};
