import {
  validateForm,
  isValidUser,
  loginFailError,
  removeErrorMessage
} from "./loginUtilities";
import { loginStatus } from "../Redux/actions";
import "../css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { username, password } = useSelector(
    (state) => state.register.userDetails
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isValidUser(username, password)) {
        dispatch(loginStatus(true));
        history.push("/home");
      } else {
        loginFailError();
        e.target.reset();
      }
    }
  };

  return (
    <div className="container">
      <h1 className="m-3 text-center">Login Page</h1>
      <div
        className="bg-light w-0 border border-2 p-2 m-auto"
        style={{ maxWidth: "400px", borderRadius: "25px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="loginError m-2 p-1 d-none text-center border border-danger rounded-3"></div>
          <div className="username-div m-2">
            <label>Username</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter username"
              autoComplete="off"
              onBeforeInput={removeErrorMessage}
            />
            <span className="error text-danger" id="usernameError"></span>
          </div>
          <div className="password-div m-2">
            <label>Password</label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter password"
              onBeforeInput={removeErrorMessage}
            />
            <span className="error text-danger" id="passwordError"></span>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
