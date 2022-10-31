/* eslint-disable */

// ! var의 문제점
/**
 * 1. 선언한 변수를 재 선언해도 에러가 아님.
 * 2. var을 달지 않아도 에러 아님(Global 영역 window에 선언됨)
 * 3. Global영역인 window를 오염시킴.
 * 4. var 변수는 {}가 존재하지 않음.
 */

// 변수.
var x = 10;
console.log('x=>' + x + 'typeof 변수명' + typeof x);

x = 'Hello World';
console.log('x=>' + x + 'typeof 변수명' + typeof x);

x = true;
console.log('x=>' + x + 'typeof 변수명' + typeof x);

x = undefined;
console.log('x=>' + x + 'typeof 변수명' + typeof x);

x = null;
console.log('x=>' + x + 'typeof 변수명' + typeof x);

// var 변수는 {}가 존재하지 않음.
if (true) {
  var x = 'IF {} 내부에 선언된 X';

  console.log('IF x=>' + x + ' typeof 변수명' + typeof x);
}

console.log('IF Outer x=>' + x + ' typeof 변수명' + typeof x);

// ES2015
// var를 대체. 값이 변경 가능한 변수를 선언할 목적으로 사용.
let z = 10;
console.log('IF Outer z=>' + z + ' typeof 변수명' + typeof z);

z = 'Good';
console.log('IF Outer z=>' + z + ' typeof 변수명' + typeof z);

z = true;
console.log('IF Outer z=>' + z + ' typeof 변수명' + typeof z);

// 1. 선언한 변수를 재 선언할 수 없음. var, let, const 동일
// var z = 20; -> Error
// let z = 20; -> Error
// const z = 20; -> Error

// 2. 모든 {} 에서 SCOPE를 갖음.
if (true) {
  // {} 내부에 선언된 변수를 "지역변수"라고 하며 종료 }를 만나면 GC 대상이 됨.(알아서 삭제됨.)
  let z = 100;
  console.log('IF Outer z=>' + z + ' typeof 변수명' + typeof z);
}

console.log('IF Outer z=>' + z + ' typeof 변수명' + typeof z);

// 3. window 영역을 오염시키지 않음. TDZ이라는 영역에 따로 선언됨.(var은 alert을 선언하면,
// window의 alert을 변경시켜 버린다. 따라서, window.alert이 동작하지 않음.)
let alert = 'Hello World';
// window.alert('야호');

// 상수를 정의할 목적으로 사용한다.(값 변경 불가 변수)
const MY_PI = 3.1415;
console.log('MY_PI=>' + MY_PI + ' typeof 변수명' + typeof MY_PI);

// MY_PI = 100; -> Error

// 재 선언 불가
// const  MY_PI = 100;  -> Error

const MY_ARR = [10, 20];
MY_ARR[0] = 100;
