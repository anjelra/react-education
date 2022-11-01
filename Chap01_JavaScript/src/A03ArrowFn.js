// 함수 리터럴. 함수 표현식
const onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
};

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};

onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');

// ES6.
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const onMulti = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};
console.log(onMulti(10, 20));

// 매개변수가 1개인 경우는 ()를 생략할 수 있다.
// ** ES015에서 추가됨 2 ** 3 => 2 * 2 * 2
const onDouble = (x) => {
  return x ** 3;
};

console.log(onDouble(10));

// {} 안에 구문이 리턴구문 1줄이면 return과 {}를 생략 후, 한 줄에 기술한다.
const onDiv = (x) => 10 / x;

console.log(onDiv(2));

// 한줄 이상인 경우는 일반 함수와 동일하게 구현
const onTwo = (x, y) => {
  const result = x * y;
  return result;
};
console.log(onTwo(1, 2));

// 일반함수도 가능
// 매개변수에 기본값 설정 가능
const onInit = (x = 10, y = 1) => x * y;

onInit();

// Arrow 함수의 this는 자신을 포함한 객체의 this를 따른다.
const nolbu = {
  name: 'NolBu',
  age: 20,
  info: function () {
    console.log(this);
    console.log(`$(this.name) / $(this.age)`);
  },
  show: () => {
    // 자신을 호출한 객체(nolbu)의 this를 그대로 물려받아 처리한다.
    console.log(this);
    console.log(`$(this.name) / $(this.age)`);
  },
};

// 자바스크립트에서의 this는 누가 호출 했냐 이다.(여기서는 nolbu에서 호출 했기 떄문에, info 입장에서는 nolbu가 this이다.)
nolbu.info();
// 응답값
// {name: 'NolBu', age: 20, info: ƒ, show: ƒ}
// A03ArrowFn.js:47 $(this.name) / $(this.age)

// 화살표 함수는 this가 없기 때문에
// A03ArrowFn.js:60 Uncaught TypeError: Cannot read properties of undefined (reading 'show') 에러 발생한다.
// window.nolbu.show(); // Error

nolbu.show();
// 응답값
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// A03ArrowFn.js:52 $(this.name) / $(this.age)
