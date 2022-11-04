// 하단에 state 변경한 reducer 함수를 쓰려면, action을 만들어서 넘겨줘야 한다.
const increaseAction = (cnt) => {
  return { type: "COUNTER_INCREASE", payload: cnt };
};
const decreaseAction = () => {
  return { type: "COUNTER_DECREATE" };
};

const init = {
  cnt: 0,
  moduleName: "Counter Reducer",
};

// state => init 값. acton에 의해 변경된 값을 return해서 변경된 값을 전달.
// action -> key, value.
// key => 구별자, value => 변경해야 할 값
// {type: '구별자', payload: value} 형태로 값이 넘어온다.
const counterR = (state = init, action) => {
  switch (action.type) {
    case "COUNTER_INCREASE":
      return { ...state, cnt: state.cnt + action.payload };

    case "COUNTER_DECREATE":
      return { ...state, cnt: state.cnt - 1 };

    default:
      return state;
  }
};

const createStore = (reducer) => {
  let state = reducer(undefined, "");

  const getState = () => {
    return { ...state };
  };

  // dispatch가 해주는 거는, 내가 정의한 action을 한번 더 실행하라는 뜻.
  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return { getState, dispatch };
};

const store = createStore(counterR);
console.log(store.getState());

/**
 * !!!!! 리덕스 작동 원리.
 * 1. createStore 가 해주는 것은 getState(state를 보여줌.), dispatch(내가 정의한 action을 실행해주는 것.)
 * 2, dispatch 로 해당 함수를 실행해라.
 * 3. increaseAction 요고는 내가 정의해 놓은 action.
 * 4. action에 가서 본인의 리듀서 함수가 실행된다.
 * 5. 전역에 있는 state 객체를 변경해주고, 화면으로 넘겨주면 된다.
 */
store.dispatch(increaseAction(5));
