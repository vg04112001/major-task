import { combineReducers } from "redux";
import { wishListData } from "./reducers/wishReducer";

export default combineReducers({
  wishListReducer: wishListData,
})
