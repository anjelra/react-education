// ES6
let name = 'NolBu';
console.log('My Name is ' + name);

console.log(`My Name is ${name}`); // es6

let obj = {
  name: 'HungBu',
  age: 25,
  child: ['one', 'two'],
  info: {
    tel: '010-1234-5678',
    add: 'Seoul',
  },
  toString: function () {
    console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');

    // ES6 - tempate 문자열
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다.`);
    console.log(`${this.name}님은 ${this.info.add}에 거주하며
    전번은 ${this.info.tel}입니다.`);

    // 내부에 연산자는 사용이 가능함.
    console.log(`나이 + 100 = ${this.age + 100}`);
  },
};

obj.toString();
