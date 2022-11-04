import { combineReducers } from "redux";
import countR from "./counterR";
import todoListR from "./todoListR";

// 각 기능별로 분리해서 정의한 reducer 함수를 통합하는 작업을 한다.(combineReducers)
const rootReducer = combineReducers({
  countR,
  todoListR,
});

export default rootReducer;
