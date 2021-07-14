// 소수 판별
function isPrime(n) {
  for (let i = 2; i <= n ** 0.5 + 1; i++) {
    if (n % i == 0) {
      return "NO";
    }
  }
  if (n === 1) return "NO";
  return "YES";
}

console.log(isPrime(100));
console.log(isPrime(17));
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(1));
