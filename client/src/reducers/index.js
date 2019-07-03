import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

// state from reducer was returned here
export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer
});
