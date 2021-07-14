// 자바스크립트 자료형의 복잡도

// 다음 배열 내장함수의 시간복잡도가 O(1)이 아닌것은?

// 아닌 것
arr.includes(5);
arr.slice();
/* 
slice()는 배열을 복사한다. 
복사하기 위해서는 빈 값을 만들고 
원래 값을 하나씩 돌면서 push 작업을 해준다.
*/

// O(1)인것
arr[i];
arr.push(5);
arr.pop();