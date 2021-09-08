// 깊이 우선 탐색(DFS)

// 재귀로 푸는 방법
const graph = { E: ["D", "A"], F: ["D"], A: ["E", "C", "B"], B: ["A"], C: ["A"], D: ["E", "F"] };

N = Object.keys(graph).length;
console.log(N);
visited = {};
Object.keys(graph).forEach((k) => (visited[k] = false));
console.log(visited);

function dfs(v) {
  visited[v] = true;
  console.log(v);
  graph[v].forEach((w) => {
    if (!visited[w]) {
      dfs(w);
    }
  });
}

Object.keys(graph).forEach((k) => {
  if (!visited[k]) {
    dfs(k);
  }
});

// 스택으로 푸는 방법
function dfs2(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
    // console.log(n, visited, stack);
  }
  return visited;
}

console.log(dfs2(graph, "E"));
