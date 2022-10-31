// de structuring
const obj = {
  name: 'NolBu',
  age: 30,
};

// const name = obj.name;
// 변수명은 꺼내는 오브젝트의 key값과 동일한 이름이어야 한다.
const { name, age } = obj;
console.log(name, obj);

// 이미 선언된 변수와 충돌되는 경우는 별칭을 이용한다.
const { name: nickname, age: num } = obj;
console.log(nickname, num);

// 넘어오지 않을 수도 있는 속성을 정의 가능. 이때 기본 값을 할당할 수 있다.
const { name: x, age: y = 0, address = 'Seoul' } = obj;
console.log(x, y, address);

// 배열은 별칭 사용 안됨
const ary = ['A', 'B', 'C'];
const [a, b, c] = ary;
console.log(a, b, c);

// 기본 값은 할당할 수 있다.
const [a1, b1, c1, d1 = 100] = ary;
console.log(a1, b1, c1, d1);
