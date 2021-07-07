import { REGISTER_USER, LOGIN_SUCCESS } from "./actions";

const initialRegisterState = {
  userDetails: {}
};

export const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

const initialLoginStatusState = {
  loginSuccess: false
};

export const loginStatusReducer = (state = initialLoginStatusState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};
