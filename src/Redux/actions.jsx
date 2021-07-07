export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData
});

export const loginStatus = (booleanValue) => ({
  type: LOGIN_SUCCESS,
  payload: booleanValue
});
