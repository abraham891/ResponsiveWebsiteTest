import { createStore, combineReducers } from "redux";
import { registerReducer, loginStatusReducer } from "./reducers";

const rootReducer = combineReducers({
  register: registerReducer,
  loginStatus: loginStatusReducer
});

export const store = createStore(rootReducer);