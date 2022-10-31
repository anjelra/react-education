class Jumsu {
  constructor(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
  }

  // prototype
  // constructor에 만들어주게 되면, 각각 객체를 생성할 때마다 생성이 되기 때문에
  // 메모리를 많이 잡아 먹는다. 따라서, 프로토타입을 만들면
  // 프로토타입 체인에 의해서 흥부는 일단 자기꺼에서 찾고,
  // 없으면 그 부모. 그 부모.. 이런식으로 된다.
  display() {
    console.log(`${this.name} / ${this.kor + this.eng}`);
  }

  onTotal() {
    return this.kor + this.eng;
  }
}

const nolbu = new Jumsu('놀부', 100, 80);
const hungbu = new Jumsu('흥부', 89, 11);

console.log(nolbu);
console.log(hungbu);

// 놀부에는 display가 없지만 Jumsu에 있으니까 있다. 혹시 없으면 최상위인 Object에 가서 뒤지고,
// Object에도 없으면 에러가 발생한다.
/**
 * Jumsu {name: '놀부', kor: 100, eng: 80}
            eng
            : 
            80
            kor
            : 
            100
            name
            : 
            "놀부"
            [[Prototype]]
            : 
            Object
            constructor
            : 
            class Jumsu
            display
            : 
            ƒ display()
            length
            : 
            0
            name
            : 
            "display"
            arguments
            : 
            (...)
            caller
            : 
            (...)
            [[FunctionLocation]]
            : 
            A07Class.js:13
            [[Prototype]]
            : 
            ƒ ()
            [[Scopes]]
            : 
            Scopes[2]
            [[Prototype]]
            : 
            Object
 */
nolbu.display();

console.log(nolbu.onTotal());
console.log(hungbu.onTotal());
