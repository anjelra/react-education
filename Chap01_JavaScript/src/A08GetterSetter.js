class Jumsu {
  constructor(name, kor, eng) {
    this._name = name;
    this._kor = kor;
    this._eng = eng;
  }

  // prototype
  onTotal() {
    return this._kor + this._eng;
  }
  display() {
    console.log(`${this._name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
  }
  // Getter / Seetter
  getName() {
    return this._name;
  }
  setName(name) {
    if (typeof name === 'number') {
      this._name = name;
    }
  }

  // javascript에서는 Getter와 Setter를 다음과 같이 사용
  // 정의는 함수로 사용은 프로퍼티로 한다.
  get kor() {
    return this._kor;
  }

  set kor(kor) {
    if (typeof kor === 'number') {
      this._kor = kor;
    }
  }
}

const nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name); // Nolbu
console.log(nolbu.getName());
nolbu.setName('ABC');
console.log(nolbu);

// Javascript getter / setter
console.log(nolbu.kor);
