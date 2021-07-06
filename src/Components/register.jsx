import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/register.css";
import { registerUser } from "../Redux/actions";

import {
  validateForm,
  RegisterSuccess,
  removeErrorMessage
} from "./registerUtilities";

export const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone: ""
  });

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(registerUser(userData));
      RegisterSuccess();
      e.target.reset();
    }
  };
  return (
    <div className="container">
      <h1 className="m-3 text-center">Register Page</h1>
      <div
        className="bg-light w-0 border border-2 p-2 m-auto"
        style={{ maxWidth: "400px", borderRadius: "25px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="registerStatus m-2 p-1 d-none text-center rounded-3"></div>
          <div className="name-div m-2">
            <label>Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter name"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              onBeforeInput={removeErrorMessage}
            />
            <span className="error text-danger" id="nameError"></span>
          </div>
          <div className="username-div m-2">
            <label>Username</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter username"
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
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
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              onBeforeInput={removeErrorMessage}
            />
            <span className="error text-danger" id="passwordError"></span>
          </div>
          <div className="email-div m-2">
            <label>email</label>
            <br />
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              onBeforeInput={removeErrorMessage}
            />
            <span className="error text-danger" id="emailError"></span>
          </div>
          <div className="phone-div m-2">
            <label>Phone Number</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              onBeforeInput={removeErrorMessage}
            />
            <span className="error text-danger" id="phoneError"></span>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
