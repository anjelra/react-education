// de structuring
const obj = {
  name: 'NolBu',
  age: 30,
};

// const name = obj.name;
// 변수명은 꺼내는 오브젝트의 key값과 동일한 이름이어야 한다.
const { name, age } = obj;
console.log(name, obj);

const ary = ['A', 'B', 'C'];
console.log(obj, ary);
