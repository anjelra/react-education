import { combineReducers } from "redux";
import counterR from "./counterR";
import contactR from "./contactR";

const rootReducer = combineReducers({
  counterR,
  contactR,
});
export default rootReducer;
