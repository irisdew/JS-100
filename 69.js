// 골드바흐의 추측
// 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것, 하나의 소수를 두 번 사용하는 것은 허용

function isPrime(n) {
  const isPrime = [false, false];
  isPrime.length = n;
  isPrime.fill(true, 2);
  const primes = [];
  for (let i = 2; i < n + 1; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = 2 * i; j < n + 1; j = j + i) {
        isPrime[j] = false;
      }
    }
  }
  return primes;
}

function solution(n) {
  const primes = isPrime(n);
  //   console.log(primes);
  const goldbach = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes.includes(n - i)) {
      goldbach.push([i, n - i]);
    }
  }
  return goldbach;
}

// console.log(isPrime(100));

console.log(solution(100));

// Math.min.apply(null, arr) : apply로 최솟값 구하기
// Function.prototype.apply() : this를 바꾸는 방법 중 하나
const gaps = solution(100).map((el) => el[1] - el[0]);
const minGap = Math.min.apply(null, gaps);
const minIdx = gaps.indexOf(minGap);
const maxGap = Math.max.apply(null, gaps);
const maxIdx = gaps.indexOf(maxGap);

console.log(solution(100)[minIdx]);
console.log(solution(100)[maxIdx]);
