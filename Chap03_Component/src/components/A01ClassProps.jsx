// A01ClassProps.js
import React from 'react';
import PropTypes from 'prop-types';

class A01ClassProps extends React.Component {
  // 생성자 메서드를 기술하면 반드시 super()를 먼저 호출해야 한다.
  constructor() {
    super();

    this.name = 'NolBu';  // 참조만 가능한 변수
  }

  // render() 메서드가 빌드 작업을 하는 메서드
  render() {
    return (
      <div>
        <h3>A01 Class Props / {this.name}</h3>

        <div>
          상위 컴포넌트(부모)가 전달한 값은 this.props로 받아서 사용.<br />
          Name: {this.props.name}<br />
          Age: {this.props.age + 100}<br />
          Address: {this.props.addr}<br />
          OnAdd: {this.props.onAdd(10, 20)}<br />
          {/* react에서는 undefined인 경우에도 에러를 뱉지 않는다. 
            기본형 변수의 값이 없으면 출력안됨(에러 아님)
            참조형 변수가 존재하지 않으면(에러)
            참조형 변수가 존재하고 그 속성 값이 없으면 출력 안됨(에러 아님)*/}
          Array: {this.props.arr[0]} / {this.props.arr[1]} / {this.props.arr[2]}<br />
          Object: {this.props.obj.name}<br />
          {/* ! 중요(자바스크립트랑 다른점)
                값을 던지지 않으면 그 변수는 true로 떨어진다. */}
          Boolean: {this.props.isChecked ? 'TRUE' : 'FALSE'}<br />


          {/* 컴포넌트의 view를 여기에 출력한다. 이 말은 즉, props를 넘겨준 값 말고 이 컴포넌트를 호출한
        App.js에서 해당 컴포넌트 안에 view(글자, 버튼 등)을 출력하고 싶으면 this.props.children이라는 거를 써야 한다.
        얘는, 한 컴포넌트에 하나만 호출할 수 있다. */}
          {/* {this.props.children} */}


          Num: {this.props.num}
          <br />
          <button type='button' onClick={this.props.changeNum}>부모 num 변경</button>

          <hr />

          넘기지 않은 변수 출력<br />
          Cnt: {this.props.cnt}<br />
          TEL: {this.props.tel}<br />                                    {/** 기본형이라 에러 안남. 출력만 안됨.(기본형 변수라는 뜻.) */}
          User: {this.props.user && this.props.user.name} <br />          {/** default에 user 객체가 없어도 에러 아님. 이유는, && 를 붙여줬기 떄문에. */}
        </div>
      </div>
    );
  }
}

export default A01ClassProps;

// 상위 컴포넌트에서 전달하는 변수의 기본값 설정
A01ClassProps.defaultProps = {
  name: 'Unknown',
  cnt: 0,
  user: { name: '송' }
};

// 넘어오는 props의 타입을 체크 (다른 타입을 구현하는 경우에는 에러 발생!)
// 책의 101페이지.
A01ClassProps.propTypes = {
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
