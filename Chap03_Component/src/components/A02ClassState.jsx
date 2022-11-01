// A02ClassState.jsx
import React from 'react';
import PropTypes from 'prop-types';
import A02ClassStateChild from './A02ClassStateChild';

class A02ClassState extends React.Component {
  constructor() {
    super();

    // 변경되면 화면 갱신이 자동으로 이루어지는 변수를 정의.
    this.state = {
      name: 'NolBu',
      age: 30,
      isChecked: true,
      arr: [10, 20],
      obj: { name: 'HangDan', age: 20 }
    };
  }

  // ! method는 Arrow 함수로 정의한다. 일반 함수는 this가 달라 state 참조가 안된다.
  // this.setState는 React의 내장 객체. this.state의 값을 변경할 목적으로 사용한다.
  changeName = () => this.setState({ name: '놀부' });
  changeAge = () => this.setState({ age: 200 });
  changeCheck = () => this.setState({ isChecked: !this.state.isChecked });

  // react에서 객체는 shift, unshift, push 등으로 리렌더링을 할 수 없다.(왜냐하면 객체는 주소값이 변경되어야 하기 때문에.)
  addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    const newArr = this.state.arr.concat(random);
    this.setState({ arr: newArr });
  };

  // splice도 쓸 수 없다. map을 사용해야 한다. map은 새로운 배열을 만들어주기 때문에.
  updateArray = (index, value) => {
    const newArr = this.state.arr.map((item, i) => {
      return i === index ? value : item;
    });

    this.setState({ arr: newArr });
  };

  // splice를 쓸 수 없으니, filter를 써야 한다.
  deleteArray = index => {
    const newArr = this.state.arr.filter((item, i) => index !== i);

    this.setState({ arr: newArr });
  };

  // Object.assign을 써도 되지만, spread 연산자를 쓰면 편하다.
  addObject = (key, value) => {
    const newObj = { ...this.state.obj, [key]: value };

    this.setState({ obj: newObj });
  };

  // 있으면 변경하기 떄문에, 객체는 추가와 업데이트가 동일하다.
  updateObject = (key, value) => {
    const newObj = { ...this.state.obj, [key]: value };

    this.setState({ obj: newObj });
  };

  // delete 같은 경우에는 delete를 사용해서 원객체에서 지우고, 복사해서 state를 변경해줘야 한다.
  // ! 내가 docs 만들 떄 어떻게 했더라..?
  deleteObject = (key) => {
    delete this.state.obj[key];

    const newObj = { ...this.state.obj };

    this.setState({ obj: newObj });
  };

  // 참조형변수는 안바뀜!
  changeClassName = () => this.className = '안바뀐다......';

  render() {
    return (
      <div>
        <h3>A02 Class State</h3>

        <div>
          {this.state.name}<br />
          {this.state.age}<br />
          {this.state.isChecked && '동의'}<br />
          {this.state.arr}<br />
          {
            // map은 새로운 배열로 만들어준다.
            this.state.arr.map((item, index, arr) => {
              return <span key={index}>{item},</span>;
            })
          }
          <br />
          {this.state.obj.name} / {this.state.obj.age} / {this.state.obj.address}<br />
        </div>

        <div>
          {/* true, false는 화면에 표시되지 않는다! */}
          <button type='button' onClick={this.changeName}>changeName</button>
          <button type='button' onClick={this.changeAge}>changeAge</button>
          <button type='button' onClick={this.changeCheck}>changeCheck</button>

          {/* Array */}
          <h4>Array</h4>
          {/* 매개변수를 받아야 하는 경우에는, this.addArray처럼 쓰면 안된다. */}
          <button type='button' onClick={this.addArray}>Add</button>
          <button type='button' onClick={() => this.updateArray(1, 2000)}>Update</button>
          <button type='button' onClick={() => this.deleteArray(1)}>Delete</button>

          {/* Object */}
          <h4>Object</h4>
          <button type='button' onClick={() => this.addObject('address', 'Seoul')}>Add</button>
          <button type='button' onClick={() => this.updateObject('address', 'Busan')}>Update</button>
          <button type='button' onClick={() => this.deleteObject('address')}>Delete</button>
        </div>

        <div>
          <A02ClassStateChild className={this.className} name={this.state.name}></A02ClassStateChild>

          <button type='button' onClick={this.changeClassName}>참조형은 안바뀐다!!!</button>
        </div>
      </div>
    );
  }
}

export default A02ClassState;

// 상위 컴포넌트에서 전달하는 변수의 기본값 설정
A02ClassState.defaultProps = {
  name: 'Unknown',
  cnt: 0,
  user: { name: '송' }
};

// 넘어오는 props의 타입을 체크 (다른 타입을 구현하는 경우에는 에러 발생!)
// 책의 101페이지.
A02ClassState.propTypes = {
  // import 되어 있어야만 쓸 수 있음.
  // import PropTypes from 'prop-type'; 
  name: PropTypes.string,
  age: PropTypes.number,
  address: PropTypes.string,
  onAdd: PropTypes.func,
  arr: PropTypes.array,
  obj: PropTypes.object,
  isChecked: PropTypes.bool
};
