// A02ClassStateChild.jsx
import React from 'react';

class A02ClassStateChild extends React.Component {
  render() {
    return (
      <div>
        <h3>A02 Class State Child</h3>

        <div>
          {/* 부모 컴포넌트(A02ClassState) 에서 '참조형은 안바뀐다!!!' 라는 버튼을 클릭하면,
            changeClassName 함수를 타서 내부적으로는(javascript는 당연..) 변하는데, 리엑트 자체가 state에 따라서
            리렌더링이 되기 때문에 바뀌지 않는 것처럼 보일 뿐이다.
            그러나, '참조형은 안바뀐다!!!' 라는 버튼을 누르고 난 뒤, 부모 컴포넌트에서 changeName 함수를 이용해서
            이름을 변경하면 ClassName도 변경되어 있는 것을 알 수 있다. 그 이유는, 위에 기술한 것과 동일함.

            그런데 말입니다...
            함수형 컴포넌트는 이게 안먹는다.
            왜냐하면 함수는 함수기 때문에 위에서부터 다시 읽기 때문에 초기화. 
            새로 메모리에 올려서 바인딩하기 때문에 초기화가 되는 것이다.
            그런데 어떻게 useState를 사용해서 값을 변경할 수 있는 것일까?
            그 이유는....
            자바스크립트의 클로즈업 기능 떄문이다. 이 기능은 새로 값을 변경하더라도 값을 킵해놓기 떄문에
            동작이 되는 것이다.


            객체는 레퍼런스로 위에 떠있다.
            그렇기 때문에 다시 새로 그리는게 아니여서 className이 변경된 채로 나오는 것이다.
          */}
          ClassName : {this.props.className} <br />
          Name: {this.props.name}
        </div>
      </div>
    );
  }
}

export default A02ClassStateChild;
