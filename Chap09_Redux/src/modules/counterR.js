import { createAction, handleActions } from "redux-actions";

const COUNTER_INCREASE = "COUNTER_INCREASE";
const COUNTER_DECREATE = "COUNTER_DECREATE";

export const increaseAction = createAction(COUNTER_INCREASE, (cnt) => cnt);
export const decreaseAction = createAction(COUNTER_DECREATE);

const init = {
  cnt: 0,
  moduleName: "Counter Reducer",
};

const counterR = handleActions(
  {
    [COUNTER_INCREASE]: (state, action) => {
      return { ...state, cnt: state.cnt + action.payload };
    },
    [COUNTER_DECREATE]: (state, action) => {
      return { ...state, cnt: state.cnt - 1 };
    },
  },
  init
);

export default counterR;

/*
// 하단에 state 변경한 reducer 함수를 쓰려면, action을 만들어서 넘겨줘야 한다.
export const increaseAction = (cnt) => {
  return { type: "COUNTER_INCREASE", payload: cnt };
};
export const decreaseAction = () => {
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

export default counterR;
*/
