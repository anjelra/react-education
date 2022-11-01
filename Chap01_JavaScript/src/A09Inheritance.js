class Person {
  constructor(name, age, add) {
    this.name = name;
    this.age = age;
    this.add = add;
  }

  toString() {
    console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
  }
  getName() {
    return this.name;
  }
}

class Employee extends Person {
  // 부모와 같은 변수를 사용한다면 생성자를 생략할 수 있지만,
  // 부모와 다른 수의 변수를 사용한다면 생성자를 생략할 수 없다.
  constructor(name, age, add, dept) {
    // 부모의 생성자 메서드를 호출하기 전에 다른 명령 실행 불가.
    // 순서는, 1. 부모 생성자 메서드 호출. 2. 다른 변수 생성.
    super(name, age, add);

    this.dept = dept;
  }

  toString() {
    console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
  }
}

const hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();

const nolbu = new Employee('널브', 30, '서울', 100);
nolbu.toString();
console.log(nolbu);
