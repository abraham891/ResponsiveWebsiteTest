import { createStore } from "redux";
import { registerReducer } from "./reducers";

export const store = createStore(registerReducer);
