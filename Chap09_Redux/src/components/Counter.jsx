import React from "react";
import { connect } from 'react-redux';
import { increaseAction, decreaseAction } from './../modules/counterR';

function Counter(props) {
  // 훅을 사용하지 않는 방법으로 일단 해보기.
  const { moduleName, cnt, increase, decrease } = props;


  return (
    <div>
      <h3>{moduleName}: {cnt}</h3>
      <button onClick={() => increase(1)}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

// connect는 두개의 파라미터를 받는다.
// 1번째 파라미터는 가져올 state. 2번째 파라미터는 가져올 dispatch.
export default connect(
  state => ({
    // counterR 1개만 store에 올라가 있는 경우는 하단 주석처리 되어 있는 것과 같이 쓴다.
    // 1개 이상의 reducer를 통합한 경우 등록한 키를 통해 참조
    moduleName: state.countR.moduleName,
    cnt: state.countR.cnt
  }),
  // 메서드
  // dispatch : 함수를 실행 시키는 명령. 이게 가능한 이유는, store 때문이다. createStore를 하게 되면
  // store가 dispatch를 통해, 해당 함수를 실행시켜준다.(앞에 선언한 이름으로 가져다 쓰면 됨.)
  dispatch => ({
    increase: cnt => dispatch(increaseAction(cnt)),
    decrease: () => dispatch(decreaseAction())
  })
)(Counter);

/*
// connect는 두개의 파라미터를 받는다.
// 1번째 파라미터는 가져올 state. 2번째 파라미터는 가져올 dispatch.
export default connect(
  // connect는 state, dispatch에 기술된 객체의 값을 Counter 컴포넌트의 props에 주입해 준다.
  // 즉, state.moduleName을 moduleName에 넣어주고(props.moduleName으로 접근 가능.)
  state => ({
    moduleName: state.moduleName,
    cnt: state.cnt
  }),
  // 메서드
  // dispatch : 함수를 실행 시키는 명령. 이게 가능한 이유는, store 때문이다. createStore를 하게 되면
  // store가 dispatch를 통해, 해당 함수를 실행시켜준다.(앞에 선언한 이름으로 가져다 쓰면 됨.)
  dispatch => ({
    increase: cnt => dispatch(increaseAction(cnt)),
    decrease: () => dispatch(decreaseAction())
  })
)(Counter);
*/