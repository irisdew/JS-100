// 넓이 우선 탐색(BFS)
const graph = { E: ["D", "A"], F: ["D"], A: ["E", "C", "B"], B: ["A"], C: ["A"], D: ["E", "F"] };

function bfs(graph, root) {
  let visited = [root];
  let search = [];
  let queue = [root];

  while (queue.length !== 0) {
    cur = queue.shift();
    search.push(cur);
    for (let n of graph[cur]) {
      if (!visited.includes(n)) {
        queue.push(n);
        visited.push(n);
      }
    }
  }
  return search.join(" ");
}

console.log(bfs(graph, "E"));

// 책 정답
function bfs2(graph, start) {
  let visited = [];
  let queue = [start];

  while (queue.length !== 0) {
    let n = queue.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }
  return visited;
}

console.log(bfs2(graph, "E"));
