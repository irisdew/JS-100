// # 병합정렬 (Python)
// def merge_sort_(a):
//   n = len(a)
//   if n <= 1:
//     return a

//   mid = n // 2
//   g1 = merge_sort(a[:mid])
//   g2 = merge_sort(a[mid:])

//   result = []
//   while g1 and g2:
//     if g1[0] < g2[0]:
//       result.append(g1.pop(0))
//     else:
//       result.append(g2.pop(0))

//   while g1:
//     result.append(g1.pop(0))
//   while g2:
//     result.append(g2.pop(0))

//   return result

function mergeSort(a) {
  const n = a.length;
  if (n < 2) {
    return a;
  } else {
    const mid = Math.floor(n / 2);

    const g1 = mergeSort(a.slice(0, mid));
    const g2 = mergeSort(a.slice(mid));

    let result = [];
    while (g1.length && g2.length) {
      if (g1[0] < g2[0]) {
        result.push(g1.shift());
      } else {
        result.push(g2.shift());
      }
    }
    while (g1.length) {
      result.push(g1.shift());
    }
    while (g2.length) {
      result.push(g2.shift());
    }
    return result;
  }
}

console.log(mergeSort([5, 3, 2, 1, 4]));
