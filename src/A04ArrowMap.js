// 일반 함수. Arrow 함수 형태로 사용할 수 없음.
function fn() {
  console.log('funcion');
}
fn();

const arr = [10, 11, 100, 101, 1000];

// 익명함수(이름이 없는 함수)
let total = 0;
arr.forEach(function (item, index, arr2) {
  //   console.log(item, index, arr2);
  total = total + item;
});

console.log(total);

// map
// 배열을 순환해서 값을 리턴하면 그 리턴된 값으로 새로운 배열을 생성한다.
const newArr = arr.map((item) => item * 2);

console.log(newArr);

// filter
// 배열을 순환해서 내부의 조건이 true면 값을 리턴 false면 skip 하며
// 그 리턴된 값으로 새로운 배열을 생성한다.
// 새로만들어진 배열은 원래 배열과 length가 같거나 같지 않을 수 있다.
// react에서는 배열의 요소를 삭제할 때 사용.
const newFilter = arr.filter((item) => {
  if (item % 2 === 0) return true;
  else return false;
});

console.log(newFilter);

// 배열 함수
// 기본 배열에 값을 추가하여 새로운 배열을 생선한다.
const newConcat = arr.concat(30);
console.log(arr);
console.log(newConcat);
