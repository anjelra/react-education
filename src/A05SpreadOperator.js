// spread operator
console.log([10, 11, 100]);
// console.log는 각 요소를 개별 요소로 취급해서 출력
console.log(...[10, 11, 100]);

console.log('NolBu');
console.log('');

// ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷
function spreadFun(a, b, c, d, e, ...rest) {
  console.log(`a => ${a}`);
  console.log(`b => ${b}`);
  console.log(`c => ${c}`);
  console.log(`d => ${d}`);
  console.log(`e => ${e}`);
  console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, [10, 20, 30], 40, [50, 60, 70]);
// spread는 개별 값으로 취급하게 만듦.
spreadFun(0, ...[10, 20, 30], 40, [50, 60, 70]);
console.log('');

// 배열 합치기.
const aryOne = [10, 20, 30];
const aryTwo = [1, 2, 3, aryOne];
console.log(aryTwo);
console.log('');

// Object
const objOne = {
  id: 1,
  name: 'NolBu',
};

const objTwo = {
  id: 2,
  address: 'Seoul',
};
console.log(objTwo);

const objThree = {
  id: 3,
  address: 'InChen',
};
console.log(objThree);
