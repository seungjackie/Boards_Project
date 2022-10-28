import { combineReducers } from "redux";
import BoardReucer from "./BoardReducer";

// 객체가 들어간다
export default combineReducers({
  board: BoardReucer,
});
