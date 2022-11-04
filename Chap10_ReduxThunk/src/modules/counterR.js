// 리덕스는 동기로 실행을 해주는 게 없다. 따라서, 비동기를 동기로 바꾸기 위해서,
// redux-thunk를 사용하면 된다.(react-query가 이번에 나온 것이다.)
import { createAction, handleActions } from "redux-actions";

const COUNTER_INCREASE = "COUNTER/INCREASE";
const COUNTER_DECREASE = "COUNTER/DECREASE";

export const increaseAction = createAction(COUNTER_INCREASE, (num) => {
  console.log("--------------------- START -------------------------");
  // setTimeout(() => {
  //   console.log("1초 경과");
  // }, 2000);

  console.log("--------------------- END -------------------------");

  // 이 시점에 reducer 함수가 호출되고 state 변경되서 화면 갱신이 이루어진다.
  return num;
});

// 매개변수 받음 다음에, dispatch가 실행되게 만든 것이다.
// redux-thunk의 next가 함수이면, 또 그함수를 실행하고, 그 다음에도 또 함수면 그 함수를 실행하고,
// 최종에 값이 객체를 리턴하면 그 때, reducer에 가서 state를 변경한 후 작업이 끝나게 된다.
// 즉, redux-thunk는 비동기적인 redux를 동기로 바꿔주는 역할을 한다.
export const increaseActionAsync = (num) => (dispatch) => {
  // console.log("--------------------- START -------------------------");
  // setTimeout(() => {
  //   console.log("1초 경과");
  //   increaseAction(num);
  // }, 2000);

  // dispatch({ type: COUNTER_INCREASE, payload: num });
  dispatch(increaseAction(num));

  // console.log("--------------------- END -------------------------");
};

export const decreaseAction = createAction(COUNTER_DECREASE);

export const decreateActionAsync = () => (dispatch) => {
  setTimeout(() => {
    // 시간 걸리는 작ㅇ버이 끝난 다음에 reducer 함수를 실행해라
    dispatch({ type: COUNTER_DECREASE });
  });
};

const init = {
  num: 0,
  moduleName: "Counter Module",
};

const counterR = handleActions(
  {
    [COUNTER_INCREASE]: (state, action) => ({
      ...state,
      num: state.num + action.payload,
    }),
    [COUNTER_DECREASE]: (state, action) => ({ ...state, num: state.num - 1 }),
  },
  init
);
export default counterR;
